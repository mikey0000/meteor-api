(function(){
Template.__define__("dashboardIndex", (function() {
  var self = this;
  var template = this;
  return [ HTML.Raw("<h1>Index Page</h1>\n\n"), UI.Each(function() {
    return Spacebars.call(self.lookup("collectionList"));
  }, UI.block(function() {
    var self = this;
    return HTML.A({
      href: [ "/dashboard/", function() {
        return Spacebars.mustache(self.lookup("name"));
      } ]
    }, function() {
      return Spacebars.mustache(self.lookup("name"));
    });
  })), HTML.Raw("\n\n<button>Create collection</button>") ];
}));

})();
