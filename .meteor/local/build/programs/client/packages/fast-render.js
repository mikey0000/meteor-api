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
var Deps = Package.deps.Deps;
var EJSON = Package.ejson.EJSON;
var Accounts = Package['accounts-base'].Accounts;

/* Package-scope variables */
var FastRender, __init_fast_render, EncodeEJSON, DecodeEJSON, Cookies, DeepExtend, deepExtend, Log;

(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/fast-render/lib/utils.js                                                                             //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
EncodeEJSON = function(ejson) {                                                                                  // 1
  var ejsonString = EJSON.stringify(ejson);                                                                      // 2
  return encodeURI(ejsonString);                                                                                 // 3
};                                                                                                               // 4
                                                                                                                 // 5
DecodeEJSON = function(encodedEjson) {                                                                           // 6
  var decodedEjsonString = decodeURI(encodedEjson);                                                              // 7
  return EJSON.fromJSONValue(JSON.parse(decodedEjsonString));                                                    // 8
};                                                                                                               // 9
                                                                                                                 // 10
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/fast-render/lib/vendor/cookies.js                                                                    //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
// Picked from: https://github.com/ScottHamper/Cookies                                                           // 1
                                                                                                                 // 2
/*!                                                                                                              // 3
 * Cookies.js - 0.3.1                                                                                            // 4
 * Wednesday, April 24 2013 @ 2:28 AM EST                                                                        // 5
 *                                                                                                               // 6
 * Copyright (c) 2013, Scott Hamper                                                                              // 7
 * Licensed under the MIT license,                                                                               // 8
 * http://www.opensource.org/licenses/MIT                                                                        // 9
 */                                                                                                              // 10
(function (undefined) {                                                                                          // 11
    'use strict';                                                                                                // 12
                                                                                                                 // 13
    var Cookies = function (key, value, options) {                                                               // 14
        return arguments.length === 1 ?                                                                          // 15
            Cookies.get(key) : Cookies.set(key, value, options);                                                 // 16
    };                                                                                                           // 17
                                                                                                                 // 18
    // Allows for setter injection in unit tests                                                                 // 19
    Cookies._document = document;                                                                                // 20
    Cookies._navigator = navigator;                                                                              // 21
                                                                                                                 // 22
    Cookies.defaults = {                                                                                         // 23
        path: '/'                                                                                                // 24
    };                                                                                                           // 25
                                                                                                                 // 26
    Cookies.get = function (key) {                                                                               // 27
        if (Cookies._cachedDocumentCookie !== Cookies._document.cookie) {                                        // 28
            Cookies._renewCache();                                                                               // 29
        }                                                                                                        // 30
                                                                                                                 // 31
        return Cookies._cache[key];                                                                              // 32
    };                                                                                                           // 33
                                                                                                                 // 34
    Cookies.set = function (key, value, options) {                                                               // 35
        options = Cookies._getExtendedOptions(options);                                                          // 36
        options.expires = Cookies._getExpiresDate(value === undefined ? -1 : options.expires);                   // 37
                                                                                                                 // 38
        Cookies._document.cookie = Cookies._generateCookieString(key, value, options);                           // 39
                                                                                                                 // 40
        return Cookies;                                                                                          // 41
    };                                                                                                           // 42
                                                                                                                 // 43
    Cookies.expire = function (key, options) {                                                                   // 44
        return Cookies.set(key, undefined, options);                                                             // 45
    };                                                                                                           // 46
                                                                                                                 // 47
    Cookies._getExtendedOptions = function (options) {                                                           // 48
        return {                                                                                                 // 49
            path: options && options.path || Cookies.defaults.path,                                              // 50
            domain: options && options.domain || Cookies.defaults.domain,                                        // 51
            expires: options && options.expires || Cookies.defaults.expires,                                     // 52
            secure: options && options.secure !== undefined ?  options.secure : Cookies.defaults.secure          // 53
        };                                                                                                       // 54
    };                                                                                                           // 55
                                                                                                                 // 56
    Cookies._isValidDate = function (date) {                                                                     // 57
        return Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date.getTime());               // 58
    };                                                                                                           // 59
                                                                                                                 // 60
    Cookies._getExpiresDate = function (expires, now) {                                                          // 61
        now = now || new Date();                                                                                 // 62
        switch (typeof expires) {                                                                                // 63
            case 'number': expires = new Date(now.getTime() + expires * 1000); break;                            // 64
            case 'string': expires = new Date(expires); break;                                                   // 65
        }                                                                                                        // 66
                                                                                                                 // 67
        if (expires && !Cookies._isValidDate(expires)) {                                                         // 68
            throw new Error('`expires` parameter cannot be converted to a valid Date instance');                 // 69
        }                                                                                                        // 70
                                                                                                                 // 71
        return expires;                                                                                          // 72
    };                                                                                                           // 73
                                                                                                                 // 74
    Cookies._generateCookieString = function (key, value, options) {                                             // 75
        key = encodeURIComponent(key);                                                                           // 76
        value = (value + '').replace(/[^!#$&-+\--:<-\[\]-~]/g, encodeURIComponent);                              // 77
        options = options || {};                                                                                 // 78
                                                                                                                 // 79
        var cookieString = key + '=' + value;                                                                    // 80
        cookieString += options.path ? ';path=' + options.path : '';                                             // 81
        cookieString += options.domain ? ';domain=' + options.domain : '';                                       // 82
        cookieString += options.expires ? ';expires=' + options.expires.toUTCString() : '';                      // 83
        cookieString += options.secure ? ';secure' : '';                                                         // 84
                                                                                                                 // 85
        return cookieString;                                                                                     // 86
    };                                                                                                           // 87
                                                                                                                 // 88
    Cookies._getCookieObjectFromString = function (documentCookie) {                                             // 89
        var cookieObject = {};                                                                                   // 90
        var cookiesArray = documentCookie ? documentCookie.split('; ') : [];                                     // 91
                                                                                                                 // 92
        for (var i = 0; i < cookiesArray.length; i++) {                                                          // 93
            var cookieKvp = Cookies._getKeyValuePairFromCookieString(cookiesArray[i]);                           // 94
                                                                                                                 // 95
            if (cookieObject[cookieKvp.key] === undefined) {                                                     // 96
                cookieObject[cookieKvp.key] = cookieKvp.value;                                                   // 97
            }                                                                                                    // 98
        }                                                                                                        // 99
                                                                                                                 // 100
        return cookieObject;                                                                                     // 101
    };                                                                                                           // 102
                                                                                                                 // 103
    Cookies._getKeyValuePairFromCookieString = function (cookieString) {                                         // 104
        // "=" is a valid character in a cookie value according to RFC6265, so cannot `split('=')`               // 105
        var separatorIndex = cookieString.indexOf('=');                                                          // 106
                                                                                                                 // 107
        // IE omits the "=" when the cookie value is an empty string                                             // 108
        separatorIndex = separatorIndex < 0 ? cookieString.length : separatorIndex;                              // 109
                                                                                                                 // 110
        return {                                                                                                 // 111
            key: decodeURIComponent(cookieString.substr(0, separatorIndex)),                                     // 112
            value: decodeURIComponent(cookieString.substr(separatorIndex + 1))                                   // 113
        };                                                                                                       // 114
    };                                                                                                           // 115
                                                                                                                 // 116
    Cookies._renewCache = function () {                                                                          // 117
        Cookies._cache = Cookies._getCookieObjectFromString(Cookies._document.cookie);                           // 118
        Cookies._cachedDocumentCookie = Cookies._document.cookie;                                                // 119
    };                                                                                                           // 120
                                                                                                                 // 121
    Cookies._areEnabled = function () {                                                                          // 122
        return Cookies._navigator.cookieEnabled ||                                                               // 123
            Cookies.set('cookies.js', 1).get('cookies.js') === '1';                                              // 124
    };                                                                                                           // 125
                                                                                                                 // 126
    Cookies.enabled = Cookies._areEnabled();                                                                     // 127
                                                                                                                 // 128
    // AMD support                                                                                               // 129
    if (typeof define === 'function' && define.amd) {                                                            // 130
        define(function () { return Cookies; });                                                                 // 131
    // CommonJS and Node.js module support.                                                                      // 132
    } else if (typeof exports !== 'undefined') {                                                                 // 133
        // Support Node.js specific `module.exports` (which can be a function)                                   // 134
        if (typeof module !== 'undefined' && module.exports) {                                                   // 135
            exports = module.exports = Cookies;                                                                  // 136
        }                                                                                                        // 137
        // But always support CommonJS module 1.1.1 spec (`exports` cannot be a function)                        // 138
        exports.Cookies = Cookies;                                                                               // 139
    } else {                                                                                                     // 140
        window.Cookies = Cookies;                                                                                // 141
    }                                                                                                            // 142
})();                                                                                                            // 143
                                                                                                                 // 144
//clearning form the window                                                                                      // 145
Cookies = window.Cookies;                                                                                        // 146
delete window.Cookies;                                                                                           // 147
                                                                                                                 // 148
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/fast-render/lib/vendor/deepExtend.js                                                                 //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
// stolen from: http://stackoverflow.com/questions/9399365/deep-extend-like-jquerys-for-nodejs                   // 1
DeepExtend = deepExtend = function () {                                                                          // 2
  var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {},                                 // 3
      i = 1,                                                                                                     // 4
      length = arguments.length,                                                                                 // 5
      deep = false,                                                                                              // 6
      toString = Object.prototype.toString,                                                                      // 7
      hasOwn = Object.prototype.hasOwnProperty,                                                                  // 8
      push = Array.prototype.push,                                                                               // 9
      slice = Array.prototype.slice,                                                                             // 10
      trim = String.prototype.trim,                                                                              // 11
      indexOf = Array.prototype.indexOf,                                                                         // 12
      class2type = {                                                                                             // 13
        "[object Boolean]": "boolean",                                                                           // 14
        "[object Number]": "number",                                                                             // 15
        "[object String]": "string",                                                                             // 16
        "[object Function]": "function",                                                                         // 17
        "[object Array]": "array",                                                                               // 18
        "[object Date]": "date",                                                                                 // 19
        "[object RegExp]": "regexp",                                                                             // 20
        "[object Object]": "object"                                                                              // 21
      },                                                                                                         // 22
      jQuery = {                                                                                                 // 23
        isFunction: function (obj) {                                                                             // 24
          return jQuery.type(obj) === "function"                                                                 // 25
        },                                                                                                       // 26
        isArray: Array.isArray ||                                                                                // 27
        function (obj) {                                                                                         // 28
          return jQuery.type(obj) === "array"                                                                    // 29
        },                                                                                                       // 30
        isWindow: function (obj) {                                                                               // 31
          return obj != null && obj == obj.window                                                                // 32
        },                                                                                                       // 33
        isNumeric: function (obj) {                                                                              // 34
          return !isNaN(parseFloat(obj)) && isFinite(obj)                                                        // 35
        },                                                                                                       // 36
        type: function (obj) {                                                                                   // 37
          return obj == null ? String(obj) : class2type[toString.call(obj)] || "object"                          // 38
        },                                                                                                       // 39
        isPlainObject: function (obj) {                                                                          // 40
          if (!obj || jQuery.type(obj) !== "object" || obj.nodeType) {                                           // 41
            return false                                                                                         // 42
          }                                                                                                      // 43
          try {                                                                                                  // 44
            if (obj.constructor && !hasOwn.call(obj, "constructor") && !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
              return false                                                                                       // 46
            }                                                                                                    // 47
          } catch (e) {                                                                                          // 48
            return false                                                                                         // 49
          }                                                                                                      // 50
          var key;                                                                                               // 51
          for (key in obj) {}                                                                                    // 52
          return key === undefined || hasOwn.call(obj, key)                                                      // 53
        }                                                                                                        // 54
      };                                                                                                         // 55
    if (typeof target === "boolean") {                                                                           // 56
      deep = target;                                                                                             // 57
      target = arguments[1] || {};                                                                               // 58
      i = 2;                                                                                                     // 59
    }                                                                                                            // 60
    if (typeof target !== "object" && !jQuery.isFunction(target)) {                                              // 61
      target = {}                                                                                                // 62
    }                                                                                                            // 63
    if (length === i) {                                                                                          // 64
      target = this;                                                                                             // 65
      --i;                                                                                                       // 66
    }                                                                                                            // 67
    for (i; i < length; i++) {                                                                                   // 68
      if ((options = arguments[i]) != null) {                                                                    // 69
        for (name in options) {                                                                                  // 70
          src = target[name];                                                                                    // 71
          copy = options[name];                                                                                  // 72
          if (target === copy) {                                                                                 // 73
            continue                                                                                             // 74
          }                                                                                                      // 75
          if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {            // 76
            if (copyIsArray) {                                                                                   // 77
              copyIsArray = false;                                                                               // 78
              clone = src && jQuery.isArray(src) ? src : []                                                      // 79
            } else {                                                                                             // 80
              clone = src && jQuery.isPlainObject(src) ? src : {};                                               // 81
            }                                                                                                    // 82
            // WARNING: RECURSION                                                                                // 83
            target[name] = deepExtend(deep, clone, copy);                                                        // 84
          } else if (copy !== undefined) {                                                                       // 85
            target[name] = copy;                                                                                 // 86
          }                                                                                                      // 87
        }                                                                                                        // 88
      }                                                                                                          // 89
    }                                                                                                            // 90
    return target;                                                                                               // 91
  }                                                                                                              // 92
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/fast-render/lib/client/log.js                                                                        //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
Log = function function_name(message/*, args..*/) {                                                              // 1
  if(                                                                                                            // 2
    typeof console != 'undefined' &&                                                                             // 3
    typeof localStorage != 'undefined' &&                                                                        // 4
    localStorage.getItem('__frlog') == "1") {                                                                    // 5
    arguments[0] = arguments[0] + ":";                                                                           // 6
    console.log.apply(console, arguments);                                                                       // 7
  }                                                                                                              // 8
}                                                                                                                // 9
                                                                                                                 // 10
Log.enable = function() {                                                                                        // 11
  localStorage.setItem('__frlog', "1");                                                                          // 12
};                                                                                                               // 13
                                                                                                                 // 14
Log.disable = function() {                                                                                       // 15
  localStorage.removeItem('__frlog');                                                                            // 16
};                                                                                                               // 17
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/fast-render/lib/client/fast_render.js                                                                //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
FastRender = {};                                                                                                 // 1
                                                                                                                 // 2
FastRender.completeSubscriptions = function(subscriptions) {                                                     // 3
  if(typeof subscriptions == 'string') {                                                                         // 4
    subscriptions = [subscriptions];                                                                             // 5
  } else if(subscriptions.constructor != Array) {                                                                // 6
    throw new Error('subscriptions params should be either a string or array of strings');                       // 7
  }                                                                                                              // 8
                                                                                                                 // 9
  subscriptions.forEach(function(subscription) {                                                                 // 10
    __fast_render_config.subscriptions[subscription] = true;                                                     // 11
  });                                                                                                            // 12
};                                                                                                               // 13
                                                                                                                 // 14
FastRender.enabled = typeof __fast_render_config != 'undefined';                                                 // 15
FastRender.Log = Log;                                                                                            // 16
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/fast-render/lib/client/ddp_update.js                                                                 //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
if(typeof __fast_render_config == 'undefined') {                                                                 // 1
  Log('NO_FAST_RENDER');                                                                                         // 2
  return;                                                                                                        // 3
}                                                                                                                // 4
                                                                                                                 // 5
var revertedBackToOriginal = false;                                                                              // 6
                                                                                                                 // 7
var originalLivedataData = Meteor.default_connection._livedata_data;                                             // 8
Meteor.default_connection._livedata_data = function(msg) {                                                       // 9
  Log('DDP_RECIEVE', msg);                                                                                       // 10
                                                                                                                 // 11
  //if we've completed our tasks, no need of special handling                                                    // 12
  if(!revertedBackToOriginal) {                                                                                  // 13
    //we are inserting docs to a collection manually                                                             // 14
    //but when the data comes from the subscription, it will also try to insert                                  // 15
    //but since there are some exiting data, meteor throws an execption                                          // 16
    //  serverDoc check is to see, if this doc is releated to an simulation,                                     // 17
    //  if so it's better to ignore it                                                                           // 18
    var serverDoc = Meteor._get(this._serverDocuments, msg.collection, msg.id);                                  // 19
    if(!serverDoc && msg.msg == 'added') {                                                                       // 20
      var localCollection = Meteor.default_connection._mongo_livedata_collections[msg.collection];               // 21
      if(localCollection) {                                                                                      // 22
        var existingDoc = localCollection.findOne(msg.id);                                                       // 23
        if(existingDoc) {                                                                                        // 24
          msg.fields = DeepExtend(true, existingDoc, msg.fields);                                                // 25
          delete msg.fields._id;                                                                                 // 26
          msg.msg = "changed";                                                                                   // 27
        }                                                                                                        // 28
      }                                                                                                          // 29
    }                                                                                                            // 30
                                                                                                                 // 31
    //This will take care of cleaning special subscription handling                                              // 32
    //after the actual subscription comes out                                                                    // 33
    if(msg.msg == 'ready' && !msg.frGen && __fast_render_config.subscriptions) {                                 // 34
      msg.subs.forEach(function(subId) {                                                                         // 35
        var subscription = __fast_render_config.subscriptionIdMap[subId];                                        // 36
        if(subscription) {                                                                                       // 37
          Log('DELETING_SUBSCRIPTION', subscription, subId);                                                     // 38
          //we don't need to handle specially after this                                                         // 39
          delete __fast_render_config.subscriptions[subscription];                                               // 40
          delete __fast_render_config.subscriptionIdMap[subId];                                                  // 41
                                                                                                                 // 42
          //need to track the loaded subscription, specially for handling in the ironRouter                      // 43
          __fast_render_config.loadedSubscriptions[subscription] = true;                                         // 44
        }                                                                                                        // 45
      });                                                                                                        // 46
    }                                                                                                            // 47
                                                                                                                 // 48
    //if all the subscriptions have been processed, there is no need to keep hijacking                           // 49
    if(EJSON.equals(__fast_render_config.subscriptions, {})) {                                                   // 50
      Log('REVERTING_BACK_TO_ORIGINAL_DDP_HANDLING');                                                            // 51
      revertedBackToOriginal = true;                                                                             // 52
    }                                                                                                            // 53
  }                                                                                                              // 54
                                                                                                                 // 55
  return originalLivedataData.call(this, msg);                                                                   // 56
};                                                                                                               // 57
                                                                                                                 // 58
var originalSend = Meteor.default_connection._send;                                                              // 59
Meteor.default_connection._send = function(msg) {                                                                // 60
  Log("DDP_SEND", msg);                                                                                          // 61
                                                                                                                 // 62
  //if looking for connect again to the server, we must need to revert back to original                          // 63
  //to prevent some weird DDP issues                                                                             // 64
  //  normally it is already reverted, but user may added subscriptions in server,                               // 65
  //  which are not subscribed from the client                                                                   // 66
  if(msg.msg == 'connect' && msg.session != undefined) {                                                         // 67
    revertedBackToOriginal = true;                                                                               // 68
  }                                                                                                              // 69
                                                                                                                 // 70
  var self = this;                                                                                               // 71
                                                                                                                 // 72
  //if we've completed our tasks, no need of special handling                                                    // 73
  if(!revertedBackToOriginal) {                                                                                  // 74
    if(msg.msg == 'sub' && __fast_render_config.subscriptions && __fast_render_config.subscriptions[msg.name]) { // 75
      Log('FAKE_SUB_READY', msg.name);                                                                           // 76
      self._livedata_data({msg:"ready",subs:[msg.id], frGen: true});                                             // 77
      //add the messageId to be handled later                                                                    // 78
      __fast_render_config.subscriptionIdMap[msg.id] = msg.name;                                                 // 79
    }                                                                                                            // 80
  }                                                                                                              // 81
                                                                                                                 // 82
  return originalSend.call(this, msg);                                                                           // 83
};                                                                                                               // 84
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/fast-render/lib/client/data_handler.js                                                               //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
__init_fast_render = function(ejsonJson) {                                                                       // 1
  var initData = DecodeEJSON(ejsonJson);                                                                         // 2
                                                                                                                 // 3
  //loading data into the collection                                                                             // 4
  for(var collName in initData.collectionData) {                                                                 // 5
    var collData = initData.collectionData[collName];                                                            // 6
    collData.forEach(function(itemList) {                                                                        // 7
      itemList.forEach(function(item) {                                                                          // 8
        var localCollection = Meteor.default_connection._mongo_livedata_collections[collName];                   // 9
        if(localCollection) {                                                                                    // 10
          var exitingDoc = localCollection.findOne(item._id);                                                    // 11
          if(exitingDoc) {                                                                                       // 12
            DeepExtend(true, exitingDoc, item);                                                                  // 13
            localCollection.update(item._id, exitingDoc);                                                        // 14
          } else {                                                                                               // 15
            localCollection.insert(item);                                                                        // 16
          }                                                                                                      // 17
        } else {                                                                                                 // 18
          console.warn('fast-route data found, but no collection exists for: ' + collName);                      // 19
        }                                                                                                        // 20
      });                                                                                                        // 21
    });                                                                                                          // 22
  }                                                                                                              // 23
}                                                                                                                // 24
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/fast-render/lib/client/iron_router_support.js                                                        //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
if(!Package['iron-router']) return;                                                                              // 1
                                                                                                                 // 2
//track whether inside the ironRouter or not                                                                     // 3
//useful for identifying this inside the Meteor.subscribe                                                        // 4
var insideIronRouter = new Meteor.EnvironmentVariable();                                                         // 5
var RouteController = FastRender.RouteController = Package['iron-router'].RouteController;                       // 6
                                                                                                                 // 7
//IR 0.8 comes with method named `_run` instead of `run`                                                         // 8
var runMethodName = RouteController.prototype._run? "_run": "run";                                               // 9
var originalRun = RouteController.prototype[runMethodName];                                                      // 10
RouteController.prototype[runMethodName] = function() {                                                          // 11
  var self = this;                                                                                               // 12
  if(FastRender.enabled) {                                                                                       // 13
    insideIronRouter.withValue(true, function() {                                                                // 14
      originalRun.call(self);                                                                                    // 15
    });                                                                                                          // 16
  } else {                                                                                                       // 17
    originalRun.call(this);                                                                                      // 18
  }                                                                                                              // 19
};                                                                                                               // 20
                                                                                                                 // 21
var originalSubscribe = Meteor.subscribe;                                                                        // 22
Meteor.subscribe = function(subscription) {                                                                      // 23
  var condition =                                                                                                // 24
    FastRender.enabled &&                                                                                        // 25
    //need to inside the ironRouter                                                                              // 26
    insideIronRouter.get() &&                                                                                    // 27
    //path loaded from the server and the local Router path should be the same                                   // 28
    //We can't simply use Router.current().path, it will give some weird deps behaviour                          // 29
    //which will result subscriptions stop everytime even they are not meant to                                  // 30
    getPath() == __fast_render_config.serverRoutePath &&                                                         // 31
    //fast render have been registered to handle this subscription                                               // 32
    __fast_render_config.subscriptions[subscription] &&                                                          // 33
    //subscription not yet actually loaded (this may call multiple times)                                        // 34
    !__fast_render_config.loadedSubscriptions[subscription]                                                      // 35
                                                                                                                 // 36
  if(condition) {                                                                                                // 37
    Log('APPLY_IR_SUB_CORRECTIONS', subscription);                                                               // 38
    originalSubscribe.apply(this, arguments);                                                                    // 39
                                                                                                                 // 40
    //ironRouter call .ready() and and if it's true he think subscription is completed                           // 41
    return {                                                                                                     // 42
      ready: function() {                                                                                        // 43
        return true;                                                                                             // 44
      }                                                                                                          // 45
    }                                                                                                            // 46
  } else {                                                                                                       // 47
    return originalSubscribe.apply(this, arguments);                                                             // 48
  }                                                                                                              // 49
};                                                                                                               // 50
                                                                                                                 // 51
function getPath() {                                                                                             // 52
  var url = document.createElement('a');                                                                         // 53
  url.href = location.href;                                                                                      // 54
  return url.pathname;                                                                                           // 55
}                                                                                                                // 56
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/fast-render/lib/client/auth.js                                                                       //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
if(typeof Meteor.user == 'function') {                                                                           // 1
  Deps.autorun(function() {                                                                                      // 2
    var user = Meteor.user();                                                                                    // 3
    var status = Meteor.status();                                                                                // 4
                                                                                                                 // 5
    //we don't need to clean cookies if we've not connected yet                                                  // 6
    //this is very usefull when testing with connecting a bad ddp connection                                     // 7
    if(status.connected) {                                                                                       // 8
      if(user) {                                                                                                 // 9
        var loginToken = Meteor._localStorage.getItem('Meteor.loginToken');                                      // 10
        var loginTokenExpires = Meteor._localStorage.getItem('Meteor.loginTokenExpires');                        // 11
                                                                                                                 // 12
        Cookies.set('meteor_login_token', loginToken, {                                                          // 13
          path: '/',                                                                                             // 14
          expires: loginTokenExpires                                                                             // 15
        });                                                                                                      // 16
      } else {                                                                                                   // 17
        Cookies.expire('meteor_login_token');                                                                    // 18
      }                                                                                                          // 19
    }                                                                                                            // 20
  });                                                                                                            // 21
} else {                                                                                                         // 22
  //make sure cookie is deleted (if previously setted)                                                           // 23
  Cookies.expire('meteor_login_token');                                                                          // 24
}                                                                                                                // 25
                                                                                                                 // 26
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['fast-render'] = {
  FastRender: FastRender,
  __init_fast_render: __init_fast_render
};

})();

//# sourceMappingURL=5fe3881a8f4e4caeb3e6e0e0d87d91d867338d61.map
