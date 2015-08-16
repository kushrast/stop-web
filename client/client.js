if (Meteor.isClient) {
  // counter starts at 0
  Template.stop.events({
    'keyup .stopname': function(){
      var stopname = $(event.target).val();
      var stopperson = Meteor.users.find().fetch();
    }
  })
  Template.main.events({
    // Code to turn the static button images into a clickable "button"
    'mouseover .stop-button': function(){
      $('.stop-button').attr('src', 'assets/stophover.png');
    },
    'mousedown .stop-button': function(){
      $('.stop-button').attr('src', 'assets/stoppress.png');
    },
    'mouseup .stop-button': function(){
      $('.stop-button').attr('src', 'assets/stophover.png');
    },
    'mouseout .stop-button': function(){
      $('.stop-button').attr('src', 'assets/stop.png'); 
    }
  });
  // Changes the email field in the login to a username
  Accounts.ui.config({
   passwordSignupFields: 'USERNAME_ONLY'
});
}