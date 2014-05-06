getCurrentTemplate = function() {
  return Router._currentController.template;
}
getCurrentRoute = function() {
  return Router._currentController.path;
}
scrollPageTo = function(selector){
  $('body').scrollTop($(selector).offset().top);  
}
goTo = function(url){
  Router.go(url);
}
getDomain = function(url){
  urlObject = Npm.require('url');
  return urlObject.parse(url).hostname;
}
cleanUp = function(s){
  return stripHTML(s);
}
stripHTML = function(s){
  return s.replace(/<(?:.|\n)*?>/gm, '');
}

// http://stackoverflow.com/questions/2631001/javascript-test-for-existence-of-nested-object-key
checkNested = function(obj /*, level1, level2, ... levelN*/) {
  var args = Array.prototype.slice.call(arguments),
      obj = args.shift();

  for (var i = 0; i < args.length; i++) {
    if (!obj.hasOwnProperty(args[i])) {
      return false;
    }
    obj = obj[args[i]];
  }
  return true;
}