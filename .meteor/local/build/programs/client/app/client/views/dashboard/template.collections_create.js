(function(){
Template.__define__("dashboardCreate", (function() {
  var self = this;
  var template = this;
  return [ HTML.DIV("\n	", Spacebars.include(self.lookupTemplate("collectionSideNav")), "\n"), HTML.Raw('\n\n<p>here is where a form should be to create a new collection</p>\n\n<form class="main">\n<input name="collection" type="text" value="" placeholder="New collection">\n<input type="submit" value="Submit" class="btn btn-primary">\n\n</form>') ];
}));

})();
