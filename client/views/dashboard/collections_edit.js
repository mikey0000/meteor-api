Template.dashboardEdit.events({
	'submit form': function (e) {
		e.preventDefault();
		var propertyName = $(e.target).find('[name=property]').val().toLowerCase();
		var id = $(e.target).find('[name=collection_id]').val()
		// var property = {
  //     name: propertyName
  //   }
    var settings = {
    	property: propertyName,
    	collectionId: id
    }

    Meteor.call('addProperty', settings, function (error, result) {
    	console.log(error)

    	console.log(result)
    });
},
});