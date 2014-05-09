(function(){Template.dashboardShow.helpers({
    settings: function () {
    	mappedFields = this.properties
        return {
            rowsPerPage: 10,
            showFilter: true,
            fields: mappedFields//['_id','type']
        };
    }
});

Template.dashboardShow.events({
	'submit form': function (e) {
		e.preventDefault();
		var propertyName = $(e.target).find('[name=property]').val().toLowerCase();
		var value = $(e.target).find('[name=value]').val()
		// var property = {
  //     name: propertyName
  //   }
    var insertable = {
    	collection: this.collectionName,
    	property: propertyName,
    	value: value
    }

    Meteor.call('addValue', insertable, function (error, result) {
    	console.log(error)

    	console.log(result)
    });
},
});

})();
