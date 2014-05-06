(function(){
Template.__define__("dashboardIndex", (function() {
  var self = this;
  var template = this;
  return [ HTML.Raw("<h1>Index Page</h1>\n"), HTML.DIV("\n	", HTML.UL("\n", UI.Each(function() {
    return Spacebars.call(self.lookup("collectionList"));
  }, UI.block(function() {
    var self = this;
    return [ "\n", HTML.LI(HTML.A({
      href: [ "/dashboard/", function() {
        return Spacebars.mustache(self.lookup("name"));
      } ]
    }, function() {
      return Spacebars.mustache(self.lookup("name"));
    }), "\n", HTML.UL("\n	", HTML.LI(HTML.A({
      href: [ "/", function() {
        return Spacebars.mustache(self.lookup("name"));
      }, "/properties" ]
    }, "properties")), "\n	", HTML.LI(HTML.A({
      href: [ "/", function() {
        return Spacebars.mustache(self.lookup("name"));
      }, "/api" ]
    }, "api")), "\n"), "\n") ];
  })), "\n"), "\n"), HTML.Raw('\n<button><a href="/create">Create collection</a></button>\n'), Spacebars.TemplateWith(function() {
    return {
      name: Spacebars.call("dashboardCreate")
    };
  }, UI.block(function() {
    var self = this;
    return Spacebars.include(self.lookupTemplate("dynamicTemplate"));
  })) ];
}));

})();
