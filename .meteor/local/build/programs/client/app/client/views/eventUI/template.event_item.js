(function(){
Template.__define__("eventItem", (function() {
  var self = this;
  var template = this;
  return HTML.DIV({
    "class": "row eventPost"
  }, HTML.Raw('\n        <div class="large-2 columns small-3"><img src="http://placehold.it/80x80&amp;text=[img]"></div>\n        '), HTML.DIV({
    "class": "large-10 columns"
  }, "\n        ", HTML.H1(function() {
    return Spacebars.mustache(self.lookup("author"));
  }), "\n        ", HTML.H3(HTML.A({
    href: function() {
      return Spacebars.mustache(self.lookup("url"));
    }
  }, function() {
    return Spacebars.mustache(self.lookup("title"));
  }), " ", HTML.SPAN(function() {
    return Spacebars.mustache(self.lookup("domain"));
  })), HTML.Raw('\n          <p><strong>Some Person said:</strong> Bacon ipsum dolor sit amet nulla ham qui sint exercitation eiusmod commodo, chuck duis velit. Aute in reprehenderit, dolore aliqua non est magna in labore pig pork biltong.</p>\n          <ul class="inline-list">\n            <li><a href="">Reply</a></li>\n            <li><a href="">Share</a></li>\n          </ul>\n        ')), "\n      ");
}));

})();
