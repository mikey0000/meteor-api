(function(){Template.dashboardCreate.events({
	'submit form': function (e) {
		e.preventDefault();
		var collectionName = $(e.target).find('[name=collection]').val().toLowerCase();
		var collection = {
      collection: collectionName
    }

    Meteor.call('create_server_col', collectionName, function(err,result) {
    	if(!err) {
    		console.log(result);
            if(result) {
                //make sure name is safe
                eval(""+collectionName+" = new Meteor.Collection('"+collectionName+"')");
                alert("Collection made");
                console.log(err);
                console.log(result);
                console.log(collections);
                console.log(collectionName);
            } else {
                alert("This collection already exists");
            }
        }
        else
        {
            alert("Error see console");
            console.log(err);
        }

    });

	}
});

})();
