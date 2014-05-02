(function(){//need to eventually read in from file what collections we are creating and publishing

Meteor.publish('currentUser', function() {
  var user = Meteor.users.find({_id: this.userId});
  return user;
});

Meteor.publish('apiList', function(){
	return Settings.find({type: "collection"});
});


Meteor.publish('api', function(collection) {
		return collections[collection].find();
});

})();
