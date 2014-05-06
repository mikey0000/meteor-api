Settings = new Meteor.Collection('settings');


Meteor.methods({
	addProperty: function(settings){
		var property = cleanUp(settings.property), collectionId = settings.collectionId;

		if (!property)
			throw new Meteor.Error(600), i18n.t("property length zero"))
		if (!collectionId)
			throw new Meteor.Error(600), i18n.t("no collection"))

		var col = Settings.findOne({_id: collectionId})

		col.update({ $push:{properties: property}})
	},

});