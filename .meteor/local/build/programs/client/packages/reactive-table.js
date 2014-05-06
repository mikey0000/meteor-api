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
var Template = Package.templating.Template;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var _ = Package.underscore._;
var i18n = Package['just-i18n'].i18n;
var UI = Package.ui.UI;
var Handlebars = Package.ui.Handlebars;
var HTML = Package.htmljs.HTML;

(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/reactive-table/lib/template.reactive_table.js                                                          //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
                                                                                                                   // 1
Template.__define__("reactiveTable", (function() {                                                                 // 2
  var self = this;                                                                                                 // 3
  var template = this;                                                                                             // 4
  return Spacebars.With(function() {                                                                               // 5
    return Spacebars.call(self.lookup("generateSettings"));                                                        // 6
  }, UI.block(function() {                                                                                         // 7
    var self = this;                                                                                               // 8
    return [ "\n    ", UI.If(function() {                                                                          // 9
      return Spacebars.call(self.lookup("showFilter"));                                                            // 10
    }, UI.block(function() {                                                                                       // 11
      var self = this;                                                                                             // 12
      return [ "\n      ", HTML.DIV({                                                                              // 13
        "class": "reactive-table-filter",                                                                          // 14
        "reactive-table-group": function() {                                                                       // 15
          return Spacebars.mustache(self.lookup("group"));                                                         // 16
        }                                                                                                          // 17
      }, "\n        ", HTML.DIV({                                                                                  // 18
        "class": "input-group col-sm-4 col-sm-offset-8"                                                            // 19
      }, "\n          ", HTML.SPAN({                                                                               // 20
        "class": "input-group-addon"                                                                               // 21
      }, "\n            ", UI.If(function() {                                                                      // 22
        return Spacebars.call(self.lookup("useFontAwesome"));                                                      // 23
      }, UI.block(function() {                                                                                     // 24
        var self = this;                                                                                           // 25
        return [ "\n              ", HTML.I({                                                                      // 26
          "class": "fa fa-filter"                                                                                  // 27
        }), "\n            " ];                                                                                    // 28
      }), UI.block(function() {                                                                                    // 29
        var self = this;                                                                                           // 30
        return [ "\n              ", function() {                                                                  // 31
          return Spacebars.mustache(self.lookup("i18n"), "reactiveTable.filter");                                  // 32
        }, "\n            " ];                                                                                     // 33
      })), "\n          "), "\n          ", UI.If(function() {                                                     // 34
        return Spacebars.call(self.lookup("useFontAwesome"));                                                      // 35
      }, UI.block(function() {                                                                                     // 36
        var self = this;                                                                                           // 37
        return [ "\n	        ", HTML.INPUT({                                                                       // 38
          "class": "form-control",                                                                                 // 39
          type: "text",                                                                                            // 40
          value: function() {                                                                                      // 41
            return Spacebars.mustache(self.lookup("filter"));                                                      // 42
          },                                                                                                       // 43
          placeholder: function() {                                                                                // 44
            return Spacebars.mustache(self.lookup("i18n"), "reactiveTable.filter");                                // 45
          }                                                                                                        // 46
        }), "\n          " ];                                                                                      // 47
      }), UI.block(function() {                                                                                    // 48
        var self = this;                                                                                           // 49
        return [ "\n	        ", HTML.INPUT({                                                                       // 50
          "class": "form-control",                                                                                 // 51
          type: "text",                                                                                            // 52
          value: function() {                                                                                      // 53
            return Spacebars.mustache(self.lookup("filter"));                                                      // 54
          }                                                                                                        // 55
        }), "\n          " ];                                                                                      // 56
      })), "\n        "), "\n      "), "\n    " ];                                                                 // 57
    })), "\n    ", HTML.TABLE({                                                                                    // 58
      "class": "table table-striped table-hover reactive-table",                                                   // 59
      "reactive-table-group": function() {                                                                         // 60
        return Spacebars.mustache(self.lookup("group"));                                                           // 61
      }                                                                                                            // 62
    }, "\n      ", HTML.THEAD("\n        ", HTML.TR("\n          ", UI.Each(function() {                           // 63
      return Spacebars.call(self.lookup("fields"));                                                                // 64
    }, UI.block(function() {                                                                                       // 65
      var self = this;                                                                                             // 66
      return [ "\n            ", UI.If(function() {                                                                // 67
        return Spacebars.dataMustache(self.lookup("isSortKey"), self.lookup("."), Spacebars.dot(self.lookup(".."), "group"), Spacebars.dot(self.lookup(".."), "fields"));
      }, UI.block(function() {                                                                                     // 69
        var self = this;                                                                                           // 70
        return [ "\n              ", HTML.TH({                                                                     // 71
          "class": [ function() {                                                                                  // 72
            return Spacebars.mustache(self.lookup("getKey"));                                                      // 73
          }, " sortable" ],                                                                                        // 74
          index: function() {                                                                                      // 75
            return Spacebars.mustache(self.lookup("getFieldIndex"), Spacebars.dot(self.lookup(".."), "fields"));   // 76
          }                                                                                                        // 77
        }, "\n                ", function() {                                                                      // 78
          return Spacebars.mustache(self.lookup("getLabel"));                                                      // 79
        }, HTML.CharRef({                                                                                          // 80
          html: "&nbsp;",                                                                                          // 81
          str: " "                                                                                                 // 82
        }), HTML.CharRef({                                                                                         // 83
          html: "&nbsp;",                                                                                          // 84
          str: " "                                                                                                 // 85
        }), "\n                ", UI.If(function() {                                                               // 86
          return Spacebars.dataMustache(self.lookup("isAscending"), Spacebars.dot(self.lookup(".."), "group"));    // 87
        }, UI.block(function() {                                                                                   // 88
          var self = this;                                                                                         // 89
          return [ "\n                  ", UI.If(function() {                                                      // 90
            return Spacebars.call(Spacebars.dot(self.lookup(".."), "useFontAwesome"));                             // 91
          }, UI.block(function() {                                                                                 // 92
            var self = this;                                                                                       // 93
            return [ "\n                    ", HTML.I({                                                            // 94
              "class": "fa fa-sort-asc"                                                                            // 95
            }), "\n                  " ];                                                                          // 96
          }), UI.block(function() {                                                                                // 97
            var self = this;                                                                                       // 98
            return [ "\n                    ", HTML.CharRef({                                                      // 99
              html: "&#x25BC;",                                                                                    // 100
              str: "▼"                                                                                             // 101
            }), "\n                  " ];                                                                          // 102
          })), "\n                " ];                                                                             // 103
        }), UI.block(function() {                                                                                  // 104
          var self = this;                                                                                         // 105
          return [ "\n                  ", UI.If(function() {                                                      // 106
            return Spacebars.call(Spacebars.dot(self.lookup(".."), "useFontAwesome"));                             // 107
          }, UI.block(function() {                                                                                 // 108
            var self = this;                                                                                       // 109
            return [ "\n                    ", HTML.I({                                                            // 110
              "class": "fa fa-sort-desc"                                                                           // 111
            }), "\n                  " ];                                                                          // 112
          }), UI.block(function() {                                                                                // 113
            var self = this;                                                                                       // 114
            return [ "\n                    ", HTML.CharRef({                                                      // 115
              html: "&#x25B2;",                                                                                    // 116
              str: "▲"                                                                                             // 117
            }), "\n                  " ];                                                                          // 118
          })), "\n                " ];                                                                             // 119
        })), "\n              "), "\n            " ];                                                              // 120
      }), UI.block(function() {                                                                                    // 121
        var self = this;                                                                                           // 122
        return [ "\n              ", UI.If(function() {                                                            // 123
          return Spacebars.call(self.lookup("isSortable"));                                                        // 124
        }, UI.block(function() {                                                                                   // 125
          var self = this;                                                                                         // 126
          return [ "\n                ", HTML.TH({                                                                 // 127
            "class": [ function() {                                                                                // 128
              return Spacebars.mustache(self.lookup("getKey"));                                                    // 129
            }, " sortable" ],                                                                                      // 130
            index: function() {                                                                                    // 131
              return Spacebars.mustache(self.lookup("getFieldIndex"), Spacebars.dot(self.lookup(".."), "fields")); // 132
            }                                                                                                      // 133
          }, function() {                                                                                          // 134
            return Spacebars.mustache(self.lookup("getLabel"));                                                    // 135
          }), "\n              " ];                                                                                // 136
        }), UI.block(function() {                                                                                  // 137
          var self = this;                                                                                         // 138
          return [ "\n                ", HTML.TH({                                                                 // 139
            "class": function() {                                                                                  // 140
              return Spacebars.mustache(self.lookup("getKey"));                                                    // 141
            },                                                                                                     // 142
            index: function() {                                                                                    // 143
              return Spacebars.mustache(self.lookup("getFieldIndex"), Spacebars.dot(self.lookup(".."), "fields")); // 144
            }                                                                                                      // 145
          }, function() {                                                                                          // 146
            return Spacebars.mustache(self.lookup("getLabel"));                                                    // 147
          }), "\n              " ];                                                                                // 148
        })), "\n            " ];                                                                                   // 149
      })), "\n          " ];                                                                                       // 150
    })), "\n        "), "\n      "), "\n      ", HTML.TBODY("\n        ", UI.Each(function() {                     // 151
      return Spacebars.call(self.lookup("sortedRows"));                                                            // 152
    }, UI.block(function() {                                                                                       // 153
      var self = this;                                                                                             // 154
      return [ "\n          ", HTML.TR("\n            ", UI.Each(function() {                                      // 155
        return Spacebars.call(Spacebars.dot(self.lookup(".."), "fields"));                                         // 156
      }, UI.block(function() {                                                                                     // 157
        var self = this;                                                                                           // 158
        return [ "\n              ", HTML.TD({                                                                     // 159
          "class": function() {                                                                                    // 160
            return Spacebars.mustache(self.lookup("key"));                                                         // 161
          }                                                                                                        // 162
        }, UI.If(function() {                                                                                      // 163
          return Spacebars.call(self.lookup("tmpl"));                                                              // 164
        }, UI.block(function() {                                                                                   // 165
          var self = this;                                                                                         // 166
          return Spacebars.With(function() {                                                                       // 167
            return Spacebars.call(self.lookup(".."));                                                              // 168
          }, UI.block(function() {                                                                                 // 169
            var self = this;                                                                                       // 170
            return Spacebars.include(function() {                                                                  // 171
              return Spacebars.dot(self.lookup(".."), "tmpl");                                                     // 172
            });                                                                                                    // 173
          }));                                                                                                     // 174
        }), UI.block(function() {                                                                                  // 175
          var self = this;                                                                                         // 176
          return function() {                                                                                      // 177
            return Spacebars.mustache(self.lookup("getField"), self.lookup(".."));                                 // 178
          };                                                                                                       // 179
        }))), "\n            " ];                                                                                  // 180
      })), "\n          "), "\n        " ];                                                                        // 181
    })), "\n      "), "\n    "), "\n    ", UI.If(function() {                                                      // 182
      return Spacebars.call(self.lookup("showNavigation"));                                                        // 183
    }, UI.block(function() {                                                                                       // 184
      var self = this;                                                                                             // 185
      return [ "\n      ", HTML.DIV({                                                                              // 186
        "class": "reactive-table-navigation",                                                                      // 187
        "reactive-table-group": function() {                                                                       // 188
          return Spacebars.mustache(self.lookup("group"));                                                         // 189
        }                                                                                                          // 190
      }, "\n        ", HTML.DIV({                                                                                  // 191
        "class": "form-inline form-group rows-per-page"                                                            // 192
      }, "\n          ", HTML.LABEL(function() {                                                                   // 193
        return Spacebars.mustache(self.lookup("i18n"), "reactiveTable.show");                                      // 194
      }, HTML.CharRef({                                                                                            // 195
        html: "&nbsp;",                                                                                            // 196
        str: " "                                                                                                   // 197
      }), HTML.INPUT({                                                                                             // 198
        "class": "form-control",                                                                                   // 199
        type: "text",                                                                                              // 200
        value: function() {                                                                                        // 201
          return Spacebars.mustache(self.lookup("getRowsPerPage"));                                                // 202
        }                                                                                                          // 203
      }), HTML.CharRef({                                                                                           // 204
        html: "&nbsp;",                                                                                            // 205
        str: " "                                                                                                   // 206
      }), function() {                                                                                             // 207
        return Spacebars.mustache(self.lookup("i18n"), "reactiveTable.rowsPerPage");                               // 208
      }), "\n        "), "\n        ", HTML.DIV({                                                                  // 209
        "class": "form-inline form-group page-number"                                                              // 210
      }, "\n          ", UI.If(function() {                                                                        // 211
        return Spacebars.call(self.lookup("isntFirstPage"));                                                       // 212
      }, UI.block(function() {                                                                                     // 213
        var self = this;                                                                                           // 214
        return [ "\n            ", HTML.LABEL({                                                                    // 215
          "class": "previous-page"                                                                                 // 216
        }, HTML.CharRef({                                                                                          // 217
          html: "&lt;",                                                                                            // 218
          str: "<"                                                                                                 // 219
        })), HTML.CharRef({                                                                                        // 220
          html: "&nbsp;",                                                                                          // 221
          str: " "                                                                                                 // 222
        }), HTML.CharRef({                                                                                         // 223
          html: "&nbsp;",                                                                                          // 224
          str: " "                                                                                                 // 225
        }), "\n          " ];                                                                                      // 226
      })), "\n          ", HTML.LABEL(function() {                                                                 // 227
        return Spacebars.mustache(self.lookup("i18n"), "reactiveTable.page");                                      // 228
      }, HTML.CharRef({                                                                                            // 229
        html: "&nbsp;",                                                                                            // 230
        str: " "                                                                                                   // 231
      }), HTML.INPUT({                                                                                             // 232
        "class": "form-control",                                                                                   // 233
        type: "text",                                                                                              // 234
        value: function() {                                                                                        // 235
          return Spacebars.mustache(self.lookup("getCurrentPage"));                                                // 236
        }                                                                                                          // 237
      }), HTML.CharRef({                                                                                           // 238
        html: "&nbsp;",                                                                                            // 239
        str: " "                                                                                                   // 240
      }), function() {                                                                                             // 241
        return Spacebars.mustache(self.lookup("i18n"), "reactiveTable.of");                                        // 242
      }, " ", function() {                                                                                         // 243
        return Spacebars.mustache(self.lookup("getPageCount"));                                                    // 244
      }), "\n          ", UI.If(function() {                                                                       // 245
        return Spacebars.call(self.lookup("isntLastPage"));                                                        // 246
      }, UI.block(function() {                                                                                     // 247
        var self = this;                                                                                           // 248
        return [ "\n            ", HTML.LABEL({                                                                    // 249
          "class": "next-page"                                                                                     // 250
        }, HTML.CharRef({                                                                                          // 251
          html: "&nbsp;",                                                                                          // 252
          str: " "                                                                                                 // 253
        }), HTML.CharRef({                                                                                         // 254
          html: "&nbsp;",                                                                                          // 255
          str: " "                                                                                                 // 256
        }), HTML.CharRef({                                                                                         // 257
          html: "&gt;",                                                                                            // 258
          str: ">"                                                                                                 // 259
        })), "\n          " ];                                                                                     // 260
      })), "\n        "), "\n      "), "\n    " ];                                                                 // 261
    })), "\n  " ];                                                                                                 // 262
  }));                                                                                                             // 263
}));                                                                                                               // 264
                                                                                                                   // 265
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/reactive-table/lib/reactive_table_i18n.js                                                              //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
i18n.map('en', {                                                                                                   // 1
    reactiveTable: {                                                                                               // 2
        filter: 'Filter',                                                                                          // 3
        show: 'Show',                                                                                              // 4
        rowsPerPage: 'rows per page',                                                                              // 5
        page: 'Page',                                                                                              // 6
        of: 'of'                                                                                                   // 7
    }                                                                                                              // 8
});                                                                                                                // 9
                                                                                                                   // 10
i18n.map('fr', {                                                                                                   // 11
    reactiveTable: {                                                                                               // 12
        filter: 'Filtre',                                                                                          // 13
        show: 'Voir',                                                                                              // 14
        rowsPerPage: 'lignes par page',                                                                            // 15
        page: 'page',                                                                                              // 16
        of: 'sur'                                                                                                  // 17
    }                                                                                                              // 18
});                                                                                                                // 19
                                                                                                                   // 20
i18n.map('ru', {                                                                                                   // 21
    reactiveTable: {                                                                                               // 22
        filter: 'Фильтр',                                                                                          // 23
        show: 'Показать',                                                                                          // 24
        rowsPerPage: 'линий на странице',                                                                          // 25
        page: 'Страница',                                                                                          // 26
        of: 'из'                                                                                                   // 27
    }                                                                                                              // 28
});                                                                                                                // 29
                                                                                                                   // 30
i18n.map('es', {                                                                                                   // 31
    reactiveTable: {                                                                                               // 32
        filter: 'Filtro',                                                                                          // 33
        show:   'Mostrar',                                                                                         // 34
        rowsPerPage: 'filas por página',                                                                           // 35
        page: 'Página',                                                                                            // 36
        of: 'de'                                                                                                   // 37
    }                                                                                                              // 38
});                                                                                                                // 39
                                                                                                                   // 40
i18n.map('nl', {                                                                                                   // 41
    reactiveTable: {                                                                                               // 42
        filter: 'Filter',                                                                                          // 43
        show:   'Toon',                                                                                            // 44
        rowsPerPage: 'regels per pagina',                                                                          // 45
        page: 'Pagina',                                                                                            // 46
        of: 'van'                                                                                                  // 47
    }                                                                                                              // 48
});                                                                                                                // 49
                                                                                                                   // 50
i18n.map('pt-br', {                                                                                                // 51
    reactiveTable: {                                                                                               // 52
        filter: 'Filtro',                                                                                          // 53
        show: 'Mostrar',                                                                                           // 54
        rowsPerPage: 'linhas por página',                                                                          // 55
        page: 'Página',                                                                                            // 56
        of: 'de'                                                                                                   // 57
    }                                                                                                              // 58
});                                                                                                                // 59
                                                                                                                   // 60
i18n.map('it', {                                                                                                   // 61
    reactiveTable: {                                                                                               // 62
        filter: 'Filtra',                                                                                          // 63
        show: 'Mostra',                                                                                            // 64
        rowsPerPage: 'righe per pagina',                                                                           // 65
        page: 'Pagina',                                                                                            // 66
        of: 'di'                                                                                                   // 67
    }                                                                                                              // 68
});                                                                                                                // 69
                                                                                                                   // 70
i18n.map('sv', {                                                                                                   // 71
    reactiveTable: {                                                                                               // 72
        filter: 'Filter',                                                                                          // 73
        show: 'Visa',                                                                                              // 74
        rowsPerPage: 'rader per sida',                                                                             // 75
        page: 'Sida',                                                                                              // 76
        of: 'av'                                                                                                   // 77
    }                                                                                                              // 78
});                                                                                                                // 79
                                                                                                                   // 80
i18n.map('ua', {                                                                                                   // 81
    reactiveTable: {                                                                                               // 82
        filter: 'Фільтр',                                                                                          // 83
        show: 'Показати',                                                                                          // 84
        rowsPerPage: 'линій на страниці',                                                                          // 85
        page: 'Страниця',                                                                                          // 86
        of: 'з'                                                                                                    // 87
    }                                                                                                              // 88
});                                                                                                                // 89
                                                                                                                   // 90
i18n.map('tr', {                                                                                                   // 91
    reactiveTable: {                                                                                               // 92
        filter: 'Filtrele',                                                                                        // 93
        show: 'Göster',                                                                                            // 94
        rowsPerPage: 'sayfa başı',                                                                                 // 95
        page: 'Sayfa',                                                                                             // 96
        of: ' / '                                                                                                  // 97
    }                                                                                                              // 98
});                                                                                                                // 99
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/reactive-table/lib/reactive_table.js                                                                   //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var getSessionSortKey = function (group) {                                                                         // 1
    return group + '-reactive-table-sort';                                                                         // 2
};                                                                                                                 // 3
                                                                                                                   // 4
var getSessionSortDirectionKey = function (group) {                                                                // 5
    return group + '-reactive-table-sort-direction';                                                               // 6
};                                                                                                                 // 7
                                                                                                                   // 8
var getSessionRowsPerPageKey = function (group) {                                                                  // 9
    return group + '-reactive-table-rows-per-page';                                                                // 10
};                                                                                                                 // 11
                                                                                                                   // 12
var getSessionCurrentPageKey = function (group) {                                                                  // 13
    return group + '-reactive-table-current-page';                                                                 // 14
};                                                                                                                 // 15
                                                                                                                   // 16
var getSessionFilterKey = function (group) {                                                                       // 17
    return group + '-reactive-table-filter';                                                                       // 18
};                                                                                                                 // 19
                                                                                                                   // 20
var getSessionShowNavigationKey = function (group) {                                                               // 21
    return group + '-reactive-table-show-navigation';                                                              // 22
};                                                                                                                 // 23
                                                                                                                   // 24
                                                                                                                   // 25
                                                                                                                   // 26
var generateSettings =  function () {                                                                              // 27
    var collection = this.collection || this;                                                                      // 28
    var settings = this.settings || {};                                                                            // 29
    var group = settings.group || 'reactive-table';                                                                // 30
    if (!(collection instanceof Meteor.Collection)) {                                                              // 31
        if (_.isArray(collection)) {                                                                               // 32
            // collection is an array                                                                              // 33
            // create a new collection from the data                                                               // 34
            var data = collection;                                                                                 // 35
            collection = new Meteor.Collection(null);                                                              // 36
            _.each(data, function (doc) {                                                                          // 37
                collection.insert(doc);                                                                            // 38
            });                                                                                                    // 39
        } else if (_.isFunction(collection.fetch)) {                                                               // 40
            // collection is a cursor                                                                              // 41
            // create a new collection that will reactively update                                                 // 42
            var cursor = collection;                                                                               // 43
            collection = new Meteor.Collection(null);                                                              // 44
            var addedCallback = function (doc) {                                                                   // 45
                collection.insert(doc);                                                                            // 46
            };                                                                                                     // 47
            var changedCallback = function (doc, oldDoc) {                                                         // 48
                collection.update(oldDoc._id, doc);                                                                // 49
            };                                                                                                     // 50
            var removedCallback = function (oldDoc) {                                                              // 51
                collection.remove(oldDoc._id);                                                                     // 52
            };                                                                                                     // 53
            cursor.observe({added: addedCallback, changed: changedCallback, removed: removedCallback});            // 54
        } else {                                                                                                   // 55
            console.log("reactiveTable error: argument is not an instance of Meteor.Collection, a cursor, or an array");
            collection = new Meteor.Collection(null);                                                              // 57
        }                                                                                                          // 58
    }                                                                                                              // 59
                                                                                                                   // 60
    var fields = settings.fields || {};                                                                            // 61
    if (_.keys(fields).length < 1 ||                                                                               // 62
        (_.keys(fields).length === 1 &&                                                                            // 63
         _.keys(fields)[0] === 'hash')) {                                                                          // 64
        fields = _.without(_.keys(collection.findOne() || {}), '_id');                                             // 65
    }                                                                                                              // 66
                                                                                                                   // 67
    var normalizeField = function (field) {                                                                        // 68
        if (typeof field === 'string') {                                                                           // 69
            return {key: field, label: field};                                                                     // 70
        } else {                                                                                                   // 71
            return field;                                                                                          // 72
        }                                                                                                          // 73
    };                                                                                                             // 74
    fields = _.map(fields, normalizeField);                                                                        // 75
                                                                                                                   // 76
    Session.setDefault(getSessionSortKey(group), 0);                                                               // 77
    Session.setDefault(getSessionSortDirectionKey(group), 1);                                                      // 78
    Session.setDefault(getSessionRowsPerPageKey(group), settings.rowsPerPage || 10);                               // 79
    Session.setDefault(getSessionCurrentPageKey(group), 0);                                                        // 80
    Session.setDefault(getSessionShowNavigationKey(group), settings.showNavigation || 'always');                   // 81
    Session.setDefault(getSessionFilterKey(group), null);                                                          // 82
    var showFilter = (typeof settings.showFilter === "undefined" ? true : settings.showFilter);                    // 83
                                                                                                                   // 84
    return {                                                                                                       // 85
        group: group,                                                                                              // 86
        collection: collection,                                                                                    // 87
        settings: settings,                                                                                        // 88
        fields: fields,                                                                                            // 89
        useFontAwesome: settings.useFontAwesome,                                                                   // 90
        showFilter: showFilter                                                                                     // 91
    };                                                                                                             // 92
};                                                                                                                 // 93
                                                                                                                   // 94
var parseFilterString = function (filterString) {                                                                  // 95
    var startQuoteRegExp = /^[\'\"]/;                                                                              // 96
    var endQuoteRegExp = /[\'\"]$/;                                                                                // 97
    var filters = [];                                                                                              // 98
    var words = filterString.split(' ');                                                                           // 99
                                                                                                                   // 100
    var inQuote = false;                                                                                           // 101
    var quotedWord = '';                                                                                           // 102
    _.each(words, function (word) {                                                                                // 103
        if (inQuote) {                                                                                             // 104
            if (endQuoteRegExp.test(word)) {                                                                       // 105
                filters.push(quotedWord + ' ' + word.slice(0, word.length - 1));                                   // 106
                inQuote = false;                                                                                   // 107
                quotedWord = '';                                                                                   // 108
            } else {                                                                                               // 109
                quotedWord = quotedWord + ' ' + word;                                                              // 110
            }                                                                                                      // 111
        } else if (startQuoteRegExp.test(word)) {                                                                  // 112
            if (endQuoteRegExp.test(word)) {                                                                       // 113
                filters.push(word.slice(1, word.length - 1));                                                      // 114
            } else {                                                                                               // 115
                inQuote = true;                                                                                    // 116
                quotedWord = word.slice(1, word.length);                                                           // 117
            }                                                                                                      // 118
        } else {                                                                                                   // 119
            filters.push(word);                                                                                    // 120
        }                                                                                                          // 121
    });                                                                                                            // 122
    return filters;                                                                                                // 123
};                                                                                                                 // 124
                                                                                                                   // 125
var getFilterQuery = function (group, fields) {                                                                    // 126
    var filter = Session.get(getSessionFilterKey(group));                                                          // 127
    var queryList = [];                                                                                            // 128
    if (filter) {                                                                                                  // 129
        var filters = parseFilterString(filter);                                                                   // 130
        _.each(filters, function (filterWord) {                                                                    // 131
            var filterQueryList = [];                                                                              // 132
            _.each(fields, function (field) {                                                                      // 133
                var filterRegExp = new RegExp(filterWord, 'i');                                                    // 134
                var query = {};                                                                                    // 135
                query[field.key || field] = filterRegExp;                                                          // 136
                filterQueryList.push(query);                                                                       // 137
            });                                                                                                    // 138
            if (filterQueryList.length) {                                                                          // 139
                var filterQuery = {'$or': filterQueryList};                                                        // 140
                queryList.push(filterQuery);                                                                       // 141
            }                                                                                                      // 142
        });                                                                                                        // 143
    }                                                                                                              // 144
    return queryList.length ? {'$and': queryList} : {};                                                            // 145
};                                                                                                                 // 146
                                                                                                                   // 147
                                                                                                                   // 148
Template.reactiveTable.getPageCount = function () {                                                                // 149
    var rowsPerPage = Session.get(getSessionRowsPerPageKey(this.group));                                           // 150
    var filterQuery = getFilterQuery(this.group, this.fields);                                                     // 151
    var count = this.collection.find(filterQuery).count();                                                         // 152
    return Math.ceil(count / rowsPerPage);                                                                         // 153
};                                                                                                                 // 154
                                                                                                                   // 155
Template.reactiveTable.helpers({                                                                                   // 156
    'generateSettings': generateSettings,                                                                          // 157
                                                                                                                   // 158
    'getField': function (object) {                                                                                // 159
        var fn = this.fn || function (value) { return value; };                                                    // 160
        var key = this.key || this;                                                                                // 161
        var keys = key.split('.');                                                                                 // 162
        var value = object;                                                                                        // 163
        _.each(keys, function (key) {                                                                              // 164
            if (!_.isUndefined(value) && !_.isUndefined(value[key])) {                                             // 165
                value = value[key];                                                                                // 166
            } else {                                                                                               // 167
                value = null;                                                                                      // 168
            }                                                                                                      // 169
        });                                                                                                        // 170
        return fn(value, object);                                                                                  // 171
    },                                                                                                             // 172
                                                                                                                   // 173
    'getFieldIndex': function (fields) {                                                                           // 174
        return _.indexOf(fields, this);                                                                            // 175
    },                                                                                                             // 176
                                                                                                                   // 177
    'getKey': function () {                                                                                        // 178
        return this.key || this;                                                                                   // 179
    },                                                                                                             // 180
                                                                                                                   // 181
    'getLabel': function () {                                                                                      // 182
        return this.label || this;                                                                                 // 183
    },                                                                                                             // 184
                                                                                                                   // 185
    'isSortKey': function (field, group, fields) {                                                                 // 186
        return Session.equals(getSessionSortKey(group), _.indexOf(fields, field));                                 // 187
    },                                                                                                             // 188
                                                                                                                   // 189
    'isSortable': function () {                                                                                    // 190
        return true;                                                                                               // 191
    },                                                                                                             // 192
                                                                                                                   // 193
    'isAscending' : function (group) {                                                                             // 194
        var sortDirection = Session.get(getSessionSortDirectionKey(group));                                        // 195
        return (sortDirection === 1);                                                                              // 196
    },                                                                                                             // 197
                                                                                                                   // 198
    'sortedRows': function () {                                                                                    // 199
        var sortDirection = Session.get(getSessionSortDirectionKey(this.group));                                   // 200
        var sortKeyIndex = Session.get(getSessionSortKey(this.group));                                             // 201
        var sortKeyField = this.fields[sortKeyIndex] || {};                                                        // 202
                                                                                                                   // 203
        var limit = Session.get(getSessionRowsPerPageKey(this.group));                                             // 204
        var currentPage = Session.get(getSessionCurrentPageKey(this.group));                                       // 205
        var skip = currentPage * limit;                                                                            // 206
        var filterQuery = getFilterQuery(this.group, this.fields);                                                 // 207
                                                                                                                   // 208
        if (sortKeyField.fn) {                                                                                     // 209
            var data = this.collection.find(filterQuery).fetch();                                                  // 210
            var sorted =_.sortBy(data, function (object) {                                                         // 211
                return sortKeyField.fn(object[sortKeyField.key], object);                                          // 212
            });                                                                                                    // 213
            if (sortDirection === -1) {                                                                            // 214
                sorted = sorted.reverse();                                                                         // 215
            }                                                                                                      // 216
            return sorted.slice(skip, skip + limit);                                                               // 217
        } else {                                                                                                   // 218
            var sortKey = sortKeyField.key || sortKeyField;                                                        // 219
            var sortQuery = {};                                                                                    // 220
            sortQuery[sortKey] = sortDirection;                                                                    // 221
                                                                                                                   // 222
            return this.collection.find(filterQuery, {                                                             // 223
                sort: sortQuery,                                                                                   // 224
                skip: skip,                                                                                        // 225
                limit: limit                                                                                       // 226
            });                                                                                                    // 227
        }                                                                                                          // 228
    },                                                                                                             // 229
                                                                                                                   // 230
    'filter' : function () {                                                                                       // 231
        return Session.get(getSessionFilterKey(this.group)) || '';                                                 // 232
    },                                                                                                             // 233
                                                                                                                   // 234
    'getRowsPerPage' : function () {                                                                               // 235
        return Session.get(getSessionRowsPerPageKey(this.group));                                                  // 236
    },                                                                                                             // 237
                                                                                                                   // 238
    'getCurrentPage' : function () {                                                                               // 239
        return 1 + Session.get(getSessionCurrentPageKey(this.group));                                              // 240
    },                                                                                                             // 241
                                                                                                                   // 242
    'isntFirstPage' : function () {                                                                                // 243
        return Session.get(getSessionCurrentPageKey(this.group)) > 0;                                              // 244
    },                                                                                                             // 245
                                                                                                                   // 246
    'isntLastPage' : function () {                                                                                 // 247
        var currentPage = 1 + Session.get(getSessionCurrentPageKey(this.group));                                   // 248
        var rowsPerPage = Session.get(getSessionRowsPerPageKey(this.group));                                       // 249
        var filterQuery = getFilterQuery(this.group, this.fields);                                                 // 250
        var count = this.collection.find(filterQuery).count();                                                     // 251
        return currentPage < Math.ceil(count / rowsPerPage);                                                       // 252
    },                                                                                                             // 253
                                                                                                                   // 254
    'showNavigation' : function () {                                                                               // 255
        if (Session.get(getSessionShowNavigationKey(this.group)) === 'always') return true;                        // 256
        if (Session.get(getSessionShowNavigationKey(this.group)) === 'never') return false;                        // 257
        return Template.reactiveTable.getPageCount.call(this) > 1;                                                 // 258
    }                                                                                                              // 259
});                                                                                                                // 260
                                                                                                                   // 261
Template.reactiveTable.events({                                                                                    // 262
    'click .reactive-table .sortable': function (event) {                                                          // 263
        var target = $(event.target).is('i') ? $(event.target).parent() : $(event.target);                         // 264
        var sortIndex = parseInt(target.attr('index'), 10);                                                        // 265
        var group = target.parents('.reactive-table').attr('reactive-table-group');                                // 266
        var currentSortIndex = Session.get(getSessionSortKey(group));                                              // 267
        if (currentSortIndex === sortIndex) {                                                                      // 268
            var sortDirection = -1 * Session.get(getSessionSortDirectionKey(group));                               // 269
            Session.set(getSessionSortDirectionKey(group), sortDirection);                                         // 270
        } else {                                                                                                   // 271
            Session.set(getSessionSortKey(group), sortIndex);                                                      // 272
        }                                                                                                          // 273
    },                                                                                                             // 274
                                                                                                                   // 275
    'keyup .reactive-table-filter input': function (event) {                                                       // 276
        var filterText = $(event.target).val();                                                                    // 277
        var group = $(event.target).parents('.reactive-table-filter').attr('reactive-table-group');                // 278
        Session.set(getSessionFilterKey(group), filterText);                                                       // 279
        Session.set(getSessionCurrentPageKey(this.group), 0);                                                      // 280
    },                                                                                                             // 281
                                                                                                                   // 282
    'change .reactive-table-navigation .rows-per-page input': function (event) {                                   // 283
        try {                                                                                                      // 284
            var rowsPerPage = parseInt($(event.target).val(), 10);                                                 // 285
            var group = $(event.target).parents('.reactive-table-navigation').attr('reactive-table-group');        // 286
            Session.set(getSessionRowsPerPageKey(group), rowsPerPage);                                             // 287
        } catch (e) {                                                                                              // 288
            console.log('rows per page must be an integer');                                                       // 289
        }                                                                                                          // 290
    },                                                                                                             // 291
                                                                                                                   // 292
    'change .reactive-table-navigation .page-number input': function (event) {                                     // 293
        try {                                                                                                      // 294
            var currentPage = parseInt($(event.target).val(), 10) - 1;                                             // 295
            var group = $(event.target).parents('.reactive-table-navigation').attr('reactive-table-group');        // 296
            Session.set(getSessionCurrentPageKey(group), currentPage);                                             // 297
        } catch (e) {                                                                                              // 298
            console.log('current page must be an integer');                                                        // 299
        }                                                                                                          // 300
    },                                                                                                             // 301
                                                                                                                   // 302
    'click .reactive-table-navigation .previous-page': function (event) {                                          // 303
        var group = $(event.target).parents('.reactive-table-navigation').attr('reactive-table-group');            // 304
        var currentPageKey = getSessionCurrentPageKey(group);                                                      // 305
        var currentPage = Session.get(currentPageKey);                                                             // 306
        Session.set(currentPageKey, currentPage - 1);                                                              // 307
    },                                                                                                             // 308
                                                                                                                   // 309
    'click .reactive-table-navigation .next-page': function (event) {                                              // 310
        var group = $(event.target).parents('.reactive-table-navigation').attr('reactive-table-group');            // 311
        var currentPageKey = getSessionCurrentPageKey(group);                                                      // 312
        var currentPage = Session.get(currentPageKey);                                                             // 313
        Session.set(currentPageKey, currentPage + 1);                                                              // 314
    }                                                                                                              // 315
});                                                                                                                // 316
                                                                                                                   // 317
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['reactive-table'] = {};

})();

//# sourceMappingURL=c2e55d944faceb7631f9cef7410962d357dc3d80.map
