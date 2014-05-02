(function(){
Template.__define__("footer", (function() {
  var self = this;
  var template = this;
  return [ HTML.Raw('<!-- Footer -->\n \n  <footer class="row">\n    <div class="large-12 columns">\n      <hr>\n      <div class="row">\n        <div class="large-5 columns">\n          <p>&copy; Copyright no one at all. Go to town.</p>\n        </div>\n        <div class="large-7 columns">\n          <ul class="inline-list right">\n            <li><a href="#">Section 1</a></li>\n            <li><a href="#">Section 2</a></li>\n            <li><a href="#">Section 3</a></li>\n            <li><a href="#">Section 4</a></li>\n            <li><a href="#">Section 5</a></li>\n            <li><a href="#">Section 6</a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </footer>\n  \n  '), HTML.SCRIPT({
    src: "//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min.js"
  }), "\n  ", HTML.SCRIPT({
    src: "//cdnjs.cloudflare.com/ajax/libs/foundation/4.1.6/js/foundation.min.js"
  }) ];
}));

})();
