(function(){
UI.body.contentParts.push(UI.Component.extend({render: (function() {
  var self = this;
  return function() {
    return Spacebars.mustache(self.lookup("renderPage"));
  };
})}));
Meteor.startup(function () { if (! UI.body.INSTANTIATED) { UI.body.INSTANTIATED = true; UI.DomRange.insert(UI.render(UI.body).dom, document.body); } });

Template.__define__("home", (function() {
  var self = this;
  var template = this;
  return [ HTML.NAV({
    "class": "top-bar"
  }, "\n  ", HTML.UL({
    "class": "title-area"
  }, "\n    ", HTML.LI({
    "class": "name"
  }, HTML.Raw('\n         <h1><a href="#">Top Bar Title </a></h1>\n          \n      '), UI.If(function() {
    return Spacebars.call(self.lookup("currentUser"));
  }, UI.block(function() {
    var self = this;
    return [ "\n        ", Spacebars.include(self.lookupTemplate("user_loggedin")), "\n      " ];
  }), UI.block(function() {
    var self = this;
    return [ "\n        ", Spacebars.include(self.lookupTemplate("user_loggedout")), "    \n      \n      " ];
  })), "\n          \n      \n    "), "\n  "), "\n"), HTML.Raw("\n  <h1>Tell The World <small>about your event</small></h1>\n  <div>\n     \n  </div>\n  "), function() {
    return Spacebars.mustache(self.lookup("greeting"));
  } ];
}));

Template.__define__("user_loggedin", (function() {
  var self = this;
  var template = this;
  return HTML.UL({
    "class": " left dropdown"
  }, "\n    ", UI.If(function() {
    return Spacebars.call(self.lookup("loggingIn"));
  }, UI.block(function() {
    var self = this;
    return [ "\n      ", HTML.LI(HTML.A("Logging in...")), "\n    " ];
  }), UI.block(function() {
    var self = this;
    return [ "\n      ", HTML.LI("\n          ", function() {
      return Spacebars.mustache(Spacebars.dot(self.lookup("currentUser"), "profile", "login"));
    }, "\n      "), "\n      ", HTML.LI(HTML.A({
      id: "logout"
    }, "Logout")), "\n      " ];
  })), "\n    ");
}));

Template.__define__("user_loggedout", (function() {
  var self = this;
  var template = this;
  return HTML.Raw('<ul class="left dropdown">\n    <li><input name="email" type="email" placeholder="email"></li>\n     <li><input name="password" type="password" placeholder="password"></li>\n    <li><a id="login">Login</a></li>\n  </ul>');
}));

})();
