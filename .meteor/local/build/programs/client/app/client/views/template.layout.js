(function(){
Template.__define__("layout", (function() {
  var self = this;
  var template = this;
  return HTML.DIV("\n    ", Spacebars.include(self.lookupTemplate("yield")), "\n  ");
}));

})();
