Template.home.events({
	'click': function (e) {
		e.preventDefault();
		var email = $(e.target).parent().parent().find('[name=email]').val().toLowerCase();
		var pass = $(e.target).parent().parent().find('[name=password]').val().toLowerCase();
		Meteor.loginWithPassword(email, pass, function (error) {
			console.log(error)
		});
	}
});