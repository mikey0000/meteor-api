(function(){
Template.__define__("dashboardShow", (function() {
  var self = this;
  var template = this;
  return [ HTML.Raw('<div id="header">\n      <h1></h1>\n      <div class="seperator">&nbsp;</div>\n      <div class="btn-group" id="open-btn-group">\n        <a class="btn" href="#" id="open-btn" target="_blank"><i class="icon-eye-open"></i> Open</a>\n        <!-- <button class="btn dropdown-toggle"><span class="caret"></span></button> -->\n      </div>\n      <!-- <div class="btn-group" id="deploy-btn-group">\n        <button class="btn"><i class="icon-upload"></i> Deploy</button>\n        <button class="btn dropdown-toggle"><span class="caret"></span></button>\n      </div> -->\n    </div>\n    '), HTML.DIV({
    id: "body-container"
  }, HTML.Raw('\n      <div id="resource-sidebar-container"> \n        <div class="well ">\n          <div class="section-header">\n            <h3>Resources</h3>\n            <div class="btn-group">\n              <a class="btn btn-success dropdown-toggle" data-toggle="dropdown" href="#">\n                <i class="icon-white icon-plus"></i>\n                &nbsp;<span class="caret"></span>\n              </a>\n              <ul id="resource-types" class="dropdown-menu">\n              </ul>\n            </div>\n          </div>\n          <div id="resources-empty" class="alert alert-info ">Add a resource to get started</div>\n          <ul class="nav nav-stacked type-icons" id="resource-sidebar">\n          	<li>\n        <a href="/dashboard/checkins" class="pages-header">\n          <i class="icon-white icon-custom collection"></i>&nbsp;\n          <span>checkins</span>\n        </a>\n        <a href="#" class="options"><span class="caret"></span></a>\n        \n          <ul class="nav pages type-icons ">\n            \n              <li><a href="/dashboard/checkins/properties/"><i class="icon-white icon-custom properties"></i> Properties</a></li>\n            \n              <li><a href="/dashboard/checkins/data/"><i class="icon-white icon-custom data"></i> Data</a></li>\n            \n              <li><a href="/dashboard/checkins/events/"><i class="icon-white icon-custom events"></i> Events</a></li>\n            \n              <li><a href="/dashboard/checkins/api/"><i class="icon-white icon-custom api"></i> API</a></li>\n            \n          </ul>\n        \n      </li><li>\n        <a href="/dashboard/locations" class="pages-header">\n          <i class="icon-white icon-custom collection"></i>&nbsp;\n          <span>locations</span>\n        </a>\n        <a href="#" class="options"><span class="caret"></span></a>\n        \n          <ul class="nav pages type-icons ">\n            \n              <li><a href="/dashboard/locations/properties/"><i class="icon-white icon-custom properties"></i> Properties</a></li>\n            \n              <li><a href="/dashboard/locations/data/"><i class="icon-white icon-custom data"></i> Data</a></li>\n            \n              <li><a href="/dashboard/locations/events/"><i class="icon-white icon-custom events"></i> Events</a></li>\n            \n              <li><a href="/dashboard/locations/api/"><i class="icon-white icon-custom api"></i> API</a></li>\n            \n          </ul>\n        \n      </li>\n          </ul>\n        </div>\n      </div>\n      '), HTML.DIV({
    id: "main-container"
  }, "\n        ", Spacebars.TemplateWith(function() {
    return {
      collection: Spacebars.call(self.lookup("data")),
      settings: Spacebars.call(self.lookup("settings"))
    };
  }, UI.block(function() {
    var self = this;
    return Spacebars.include(self.lookupTemplate("reactiveTable"));
  })), "\n      "), "\n    ") ];
}));

})();
