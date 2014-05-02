//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
//                                                                      //
// If you are using Chrome, open the Developer Tools and click the gear //
// icon in its lower right corner. In the General Settings panel, turn  //
// on 'Enable source maps'.                                             //
//                                                                      //
// If you are using Firefox 23, go to `about:config` and set the        //
// `devtools.debugger.source-maps-enabled` preference to true.          //
// (The preference should be on by default in Firefox 24; versions      //
// older than 23 do not support source maps.)                           //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var _ = Package.underscore._;
var UI = Package.ui.UI;
var Handlebars = Package.ui.Handlebars;
var Deps = Package.deps.Deps;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var i18n;

(function () {

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/just-i18n/i18n.js                                        //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
/*                                                                   // 1
  just-i18n package for Meteor.js                                    // 2
  author: Hubert OG <hubert@orlikarnia.com>                          // 3
*/                                                                   // 4
                                                                     // 5
var maps = {};                                                       // 6
var defaultLanguage = 'en';                                          // 7
var language = '';                                                   // 8
var dep = new Deps.Dependency();                                     // 9
var missingTemplate = '';                                            // 10
var showMissing = false;                                             // 11
                                                                     // 12
/*                                                                   // 13
  Get the value for the given key                                    // 14
*/                                                                   // 15
i18n = function(label) {                                             // 16
  dep.depend();                                                      // 17
  if(typeof label !== 'string') return '';                           // 18
  return (maps[language] && maps[language][label]) ||                // 19
         (maps[defaultLanguage] && maps[defaultLanguage][label]) ||  // 20
         (showMissing && _.template(missingTemplate, {language: language, defaultLanguage: defaultLanguage, label: label})) ||
         '';                                                         // 22
};                                                                   // 23
                                                                     // 24
/*                                                                   // 25
  Register handlebars helper                                         // 26
*/                                                                   // 27
if(Meteor.isClient) {                                                // 28
  if(UI) {                                                           // 29
    UI.registerHelper('i18n', function (x) {                         // 30
      return i18n(x);                                                // 31
    });                                                              // 32
  } else if(Handlebars) {                                            // 33
    Handlebars.registerHelper('i18n', function (x) {                 // 34
      return i18n(x);                                                // 35
    });                                                              // 36
  }                                                                  // 37
}                                                                    // 38
                                                                     // 39
/*                                                                   // 40
  Settings                                                           // 41
*/                                                                   // 42
i18n.setLanguage = function(lng) {                                   // 43
  language = lng;                                                    // 44
  dep.changed();                                                     // 45
};                                                                   // 46
                                                                     // 47
i18n.setDefaultLanguage = function(lng) {                            // 48
  defaultLanguage = lng;                                             // 49
  dep.changed();                                                     // 50
};                                                                   // 51
                                                                     // 52
i18n.getLanguage = function() {                                      // 53
  dep.depend();                                                      // 54
  return language;                                                   // 55
};                                                                   // 56
                                                                     // 57
i18n.showMissing = function(template) {                              // 58
  if(template) {                                                     // 59
    if(typeof template === 'string') {                               // 60
      missingTemplate = template;                                    // 61
    } else {                                                         // 62
      missingTemplate = '[<%= label %>]';                            // 63
    }                                                                // 64
    showMissing = true;                                              // 65
  } else {                                                           // 66
    missingTemplate = '';                                            // 67
    showMissing = false;                                             // 68
  }                                                                  // 69
};                                                                   // 70
                                                                     // 71
/*                                                                   // 72
  Register map                                                       // 73
*/                                                                   // 74
i18n.map = function(language, map) {                                 // 75
  if(!maps[language]) maps[language] = {};                           // 76
  registerMap(language, '', false, map);                             // 77
  dep.changed();                                                     // 78
};                                                                   // 79
                                                                     // 80
var registerMap = function(language, prefix, dot, map) {             // 81
  if(typeof map === 'string') {                                      // 82
    maps[language][prefix] = map;                                    // 83
  } else if(typeof map === 'object') {                               // 84
    if(dot) prefix = prefix + '.';                                   // 85
    _.each(map, function(value, key) {                               // 86
      registerMap(language, prefix + key, true, value);              // 87
    });                                                              // 88
  }                                                                  // 89
};                                                                   // 90
                                                                     // 91
                                                                     // 92
///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['just-i18n'] = {
  i18n: i18n
};

})();

//# sourceMappingURL=21d96a08fd7bac9d6c81f1c4b7bfa5465a4cff57.map
