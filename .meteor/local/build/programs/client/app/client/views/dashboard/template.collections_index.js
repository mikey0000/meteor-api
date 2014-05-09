(function(){
Template.__define__("dashboardIndex", (function() {
  var self = this;
  var template = this;
  return [ HTML.Raw("<h1>Index Page</h1>\n"), HTML.DIV("\n	", Spacebars.include(self.lookupTemplate("collectionSideNav")), " \n"), HTML.Raw('\n<div>\n</div>\n\n<button><a href="/create">Create collection</a></button>\n'), Spacebars.TemplateWith(function() {
    return {
      name: Spacebars.call("dashboardCreate")
    };
  }, UI.block(function() {
    var self = this;
    return Spacebars.include(self.lookupTemplate("dynamicTemplate"));
  })) ];
}));

})();
