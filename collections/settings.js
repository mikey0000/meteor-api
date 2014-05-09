Settings = new Meteor.Collection('settings');


Meteor.methods({
	addProperty: function(settings){
		var property = cleanUp(settings.property), collectionId = settings.collectionId;

		if (!property)
			throw new Meteor.Error(600, i18n.t("property length zero"))
		if (!collectionId)
			throw new Meteor.Error(600, i18n.t("no collection"))

		
	Settings.update({_id: collectionId}, { $push:{properties: property}})
	},
	addValue: function(insertable){
		var property = cleanUp(insertable.property), value = cleanUp(insertable.value), collection = insertable.collection;

		if (!property)
			throw new Meteor.Error(600, i18n.t("property length zero"))
		if (!collection)
			throw new Meteor.Error(600, i18n.t("no collection"))

		
	// Settings.update({_id: collectionId}, { $push:{properties: property}})
	collections[collection].insert({type: value}, function(err){
				console.log(err)
			});
	},
	addBeacon: function(beacon){
		var property = cleanUp(beacon.type);

		if (!property)
			throw new Meteor.Error(600, i18n.t("property length zero"))
		// if (!collectionId)
		// 	throw new Meteor.Error(600, i18n.t("no collection"))
		if(Settings.findOne({name:"beacons"})) {
			collections["beacons"].insert({type: property}, function(err){
				console.log(err)
			});
		}
		
	// Settings.update({_id: collectionId}, { $push:{properties: property}})
	},

});