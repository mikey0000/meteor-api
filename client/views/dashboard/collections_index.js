Template.dashboardIndex.events({
	'click': function (e, template) {
		console.log("click")
		console.log($(e.target).html())
		Session.set('collectionName', $(e.target).html())
	}
});

Template.dashboardIndex.helpers({
	collection_actions: function () {
		return Session.get('collectionAction')
	},
});