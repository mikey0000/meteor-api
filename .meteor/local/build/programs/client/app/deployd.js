(function(){

collections = {};


if (Meteor.isClient) {
  Meteor.startup(function() {

    Meteor.subscribe("apiList");
  });


  // Meteor.methods({
  //   'create_server_col' : function(collectionname) {
  //      if(!Settings.findOne({type:'collection', name: collectionname})) {
  //       var result = Settings.insert({type:'collection', name: collectionname});

  //       collections[collectionname] = new Meteor.Collection(collectionname);
  //       this[collectionname] = collections[collectionname];
  //       return result;
  //      }
  //      else
  //      {
  //       return false; //Collection already exists
  //      }
  //   }
  // });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    
  });

  Meteor.methods({
    'create_server_col' : function(collectionname) {
       if(!Settings.findOne({type:'collection', name: collectionname})) {
        var result = Settings.insert({type:'collection', name: collectionname});

        this[collectionname] = new Meteor.Collection(collectionname);
        collections[collectionname] = this[collectionname];
        return result;
       }
       else
       {
        return false; //Collection already exists
       }
    }
  });
}


 Meteor.startup(function () {
    // code to run on both at startup
    Collectionlist = Settings.find({type:'collection'});
    var startup = this;
    Collectionlist.forEach(function(doc) {
        startup[doc.name] = new Meteor.Collection(doc.name);
        collections[doc.name] = startup[doc.name];
    });
 });

})();
