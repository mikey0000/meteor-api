(function(){Template.home.greeting = function () {
    return "Welcome to home.";
  };

  Template.home.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
  
  
  Template.user_loggedout.events({
      "click #login": function(e,tmpl) {
          Meteor.loginWithPassword({
              user: "mike",
              password: "pass"
              
          }, function(err){
              if (err) {
                  // error handling
              } else {
                  //show an alert
              }
          });   
      }
  });
  
  Template.user_loggedin.events({
      "click #logout": function (e, tmpl) {
          Meteor.logout(function (err){
             if (err) {
                // show err message 
             } else {
                 // show alert ath says logged out
             }
              
          });
      }
      
  })

})();
