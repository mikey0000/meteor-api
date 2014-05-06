Template.dashboardEdit.events({
	'submit form': function (e) {
		e.preventDefault();
		var collectionName = $(e.target).find('[name=collection]').val().toLowerCase();
		var collection = {
      collection: collectionName
    }
});