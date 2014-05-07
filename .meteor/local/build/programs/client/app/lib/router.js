(function(){var preloadSubscriptions = ['apiList','currentUser'];

Router.configure({
  layoutTemplate: 'layout',
  //loadingTemplate: 'loading',
  //notFoundTemplate: 'not_found',
  waitOn: function () {
    return _.map(preloadSubscriptions, function(sub){
      Meteor.subscribe(sub);
    });
  }
});

DashboardShowController = FastRender.RouteController.extend({
  template: 'dashboardShow',

  onBeforeAction: function () {
    // var collection = this.params.collection;
    // if(typeof collection === 'undefined') {
    //   eval(""+collection+" = new Meteor.Collection(\""+collection+"\")");
    // }
  },

  onAfterAction: function () {
  },

  waitOn: function () {
    
    var collection = this.params.collection;
     var collectionname = collection.charAt(0).toUpperCase()+ collection.slice(1);

    // if (Meteor.isClient) {
    //   Meteor.call('create_collection',collectionname, function(err,result) {

    //   });
    // }
     return [Meteor.subscribe('api',collection)];
  },

  data: function () {
    var collectionName = this.params.collection;
    // collections["settings"] = Settings;
    var collection = collections[collectionName].find()
    return { data:collection, properties:Settings.findOne({name: collectionName}).properties };
  },
    fastRender: true

  // action: function () {
  //    if we want to override default behavior 
  // }
});

DashboardCreateController = FastRender.RouteController.extend({
  template: 'dashboardCreate',

  onBeforeAction: function () {
  },

  onAfterAction: function () {
  },

  waitOn: function () {
    
  },

  data: function () {
    // return Posts.findOne({_id: this.params._id});
    return {collectionList:Settings.find({type:"collection"})}
  },

  // action: function () {
  //    if we want to override default behavior 
  // }
});

DashboardEditController = FastRender.RouteController.extend({
  template: 'dashboardEdit',

  onBeforeAction: function () {
  },

  onAfterAction: function () {
  },

  waitOn: function () {
    
  },

  data: function () {
     return { collectionList:Settings.find({type:"collection"}),
     collection:Settings.findOne({name: this.params.collection}) };
  },

  // action: function () {
  //    if we want to override default behavior 
  // }
});

DashboardIndexController = FastRender.RouteController.extend({
  template: 'dashboardIndex',

  onBeforeAction: function () {
    // if (Session.get('collectionAction') === undefined)
      Session.set('collectionAction', 'dashboardShow');
  },

  onAfterAction: function () {
  },

  waitOn: function () {


    return [
      
    ]
  },

  data: function () {
    return { collectionList:Settings.find({type:"collection"}),
    collection:Settings.findOne({})
    }
  },

  // action: function () {
  //    if we want to override default behavior 
  // }
});


Router.map(function() {

this.route('dashboardIndex', {
  path: '/dashboard',
    controller: DashboardIndexController
  });

this.route('dashboardCreate', {
  path: '/create',
    controller: DashboardCreateController
  });

this.route('dashboardShow', {
  path: '/dashboard/:collection',
    controller: DashboardShowController
  });

this.route('dashboardEdit', {
  path: '/:collection/properties',
    controller: DashboardEditController
  });

  });


// adding common subscriptions that's need to be loaded on all the routes
// notification does not included here since it is not much critical and 
// it might have considerable amount of docs
if(Meteor.isServer) {
  FastRender.onAllRoutes(function() {
    var router = this;
    _.each(preloadSubscriptions, function(sub){
      router.subscribe(sub);
    });
  });
}

})();
