(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var WebApp = Package.webapp.WebApp;
var main = Package.webapp.main;
var WebAppInternals = Package.webapp.WebAppInternals;
var _ = Package.underscore._;

/* Package-scope variables */
var Spiderable;

(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/spiderable-404/spiderable.js                                                                           //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var fs = Npm.require('fs');                                                                                        // 1
var child_process = Npm.require('child_process');                                                                  // 2
var querystring = Npm.require('querystring');                                                                      // 3
var urlParser = Npm.require('url');                                                                                // 4
                                                                                                                   // 5
                                                                                                                   // 6
Spiderable = {};                                                                                                   // 7
                                                                                                                   // 8
// list of bot user agents that we want to serve statically, but do                                                // 9
// not obey the _escaped_fragment_ protocol. The page is served                                                    // 10
// statically to any client whos user agent matches any of these                                                   // 11
// regexps. Users may modify this array.                                                                           // 12
Spiderable.userAgentRegExps = [                                                                                    // 13
  /^facebookexternalhit/i, /^linkedinbot/i, /^twitterbot/i, /^googlebot/i, /^Yahoo/i, /^bingbot/i                  // 14
  , /^Baiduspider/i, /^Teoma/i];                                                                                   // 15
                                                                                                                   // 16
                                                                                                                   // 17
// how long to let phantomjs run before we kill it                                                                 // 18
var REQUEST_TIMEOUT = 15*1000;                                                                                     // 19
                                                                                                                   // 20
WebApp.connectHandlers.use(function (req, res, next) {                                                             // 21
  if (/\?.*_escaped_fragment_=/.test(req.url) ||                                                                   // 22
      _.any(Spiderable.userAgentRegExps, function (re) {                                                           // 23
        return re.test(req.headers['user-agent']); })) {                                                           // 24
                                                                                                                   // 25
                                                                                                                   // 26
    // reassembling url without escaped fragment if exists                                                         // 27
    var parsedUrl = urlParser.parse(req.url);                                                                      // 28
    var parsedQuery = querystring.parse(parsedUrl.query);                                                          // 29
    delete parsedQuery['_escaped_fragment_'];                                                                      // 30
    var newQuery = querystring.stringify(parsedQuery);                                                             // 31
    var newPath = parsedUrl.pathname + (newQuery ? ('?' + newQuery) : '');                                         // 32
    var url = "http://" + req.headers.host + newPath;                                                              // 33
                                                                                                                   // 34
    // This string is going to be put into a bash script, so it's important                                        // 35
    // that 'url' (which comes from the network) can neither exploit phantomjs                                     // 36
    // or the bash script. JSON stringification should prevent it from                                             // 37
    // exploiting phantomjs, and since the output of JSON.stringify shouldn't                                      // 38
    // be able to contain newlines, it should be unable to exploit bash as                                         // 39
    // well.                                                                                                       // 40
    var phantomScript = "var url = " + JSON.stringify(url) + ";" +                                                 // 41
          "var page = require('webpage').create();" +                                                              // 42
          "page.open(url);" +                                                                                      // 43
          "setInterval(function() {" +                                                                             // 44
          "  var ready = page.evaluate(function () {" +                                                            // 45
          "    if (typeof Meteor !== 'undefined' " +                                                               // 46
          "        && typeof(Meteor.status) !== 'undefined' " +                                                    // 47
          "        && Meteor.status().connected) {" +                                                              // 48
          "      Deps.flush();" +                                                                                  // 49
          "      return DDP._allSubscriptionsReady();" +                                                           // 50
          "    }" +                                                                                                // 51
          "    return false;" +                                                                                    // 52
          "  });" +                                                                                                // 53
          "  if (ready) {" +                                                                                       // 54
          "    var response = page.evaluate(function() {" +                                                        // 55
          "        return Spiderable;" +                                                                           // 56
          "    });" +                                                                                              // 57
          "    if(response.httpStatusCode != 200 " +                                                               // 58
          "       || Object.keys(response.httpHeaders).length > 0) {" +                                            // 59
          "      console.log('<!-- HTTP-RESPONSE:' + response.httpStatusCode + ' ' " +                             // 60
          "             + JSON.stringify(response.httpHeaders) + ' -->');" +                                       // 61
          "    }" +                                                                                                // 62
          "    var out = page.content;" +                                                                          // 63
          "    out = out.replace(/<script[^>]+>(.|\\n|\\r)*?<\\/script\\s*>/ig, '');" +                            // 64
          "    out = out.replace('<meta name=\"fragment\" content=\"!\">', '');" +                                 // 65
          "    console.log(out);" +                                                                                // 66
          "    phantom.exit();" +                                                                                  // 67
          "  }" +                                                                                                  // 68
          "}, 100);\n";                                                                                            // 69
                                                                                                                   // 70
    // Run phantomjs.                                                                                              // 71
    //                                                                                                             // 72
    // Use '/dev/stdin' to avoid writing to a temporary file. We can't                                             // 73
    // just omit the file, as PhantomJS takes that to mean 'use a                                                  // 74
    // REPL' and exits as soon as stdin closes.                                                                    // 75
    //                                                                                                             // 76
    // However, Node 0.8 broke the ability to open /dev/stdin in the                                               // 77
    // subprocess, so we can't just write our string to the process's stdin                                        // 78
    // directly; see https://gist.github.com/3751746 for the gory details. We                                      // 79
    // work around this with a bash heredoc. (We previous used a "cat |"                                           // 80
    // instead, but that meant we couldn't use exec and had to manage several                                      // 81
    // processes.)                                                                                                 // 82
    child_process.execFile(                                                                                        // 83
      '/bin/bash',                                                                                                 // 84
      ['-c',                                                                                                       // 85
       ("exec phantomjs --load-images=no /dev/stdin <<'END'\n" +                                                   // 86
        phantomScript + "END\n")],                                                                                 // 87
      {timeout: REQUEST_TIMEOUT},                                                                                  // 88
      function (error, stdout, stderr) {                                                                           // 89
        if (!error && /<html/i.test(stdout)) {                                                                     // 90
          var match,                                                                                               // 91
              headers,                                                                                             // 92
              statusCode = 200,                                                                                    // 93
              responseRegexp = /^<!-- HTTP-RESPONSE:([0-9]+) ({.*}) -->\n/;                                        // 94
          if(match = stdout.match(responseRegexp)) {                                                               // 95
            statusCode = parseInt(match[1]);                                                                       // 96
            headers = JSON.parse(match[2]);                                                                        // 97
            stdout = stdout.replace(responseRegexp, '');                                                           // 98
            if (!headers['Content-Type']) {                                                                        // 99
              headers['Content-Type'] = 'text/html; charset=UTF-8';                                                // 100
            }                                                                                                      // 101
            res.writeHead(statusCode, headers);                                                                    // 102
          } else {                                                                                                 // 103
            res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});                                      // 104
          }                                                                                                        // 105
          res.end(stdout);                                                                                         // 106
        } else {                                                                                                   // 107
          // phantomjs failed. Don't send the error, instead send the                                              // 108
          // normal page.                                                                                          // 109
          if (error && error.code === 127)                                                                         // 110
            Meteor._debug("spiderable: phantomjs not installed. Download and install from http://phantomjs.org/"); // 111
          else                                                                                                     // 112
            Meteor._debug("spiderable: phantomjs failed:", error, "\nstderr:", stderr);                            // 113
                                                                                                                   // 114
          next();                                                                                                  // 115
        }                                                                                                          // 116
      });                                                                                                          // 117
  } else {                                                                                                         // 118
    next();                                                                                                        // 119
  }                                                                                                                // 120
});                                                                                                                // 121
                                                                                                                   // 122
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['spiderable-404'] = {
  Spiderable: Spiderable
};

})();
