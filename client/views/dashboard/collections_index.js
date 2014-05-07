

Template.dashboardIndex.events({
	'click': function (e, template) {
		console.log("click")
		console.log(e)
	}
});

Template.dashboardIndex.helpers({
	collection_actions: function () {
		return Session.get('collectionAction')
	}
});