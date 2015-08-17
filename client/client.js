if (Meteor.isClient) {
  Template.stop.events({
    'keyup #stoptarget': function(){
      var name = $('#stoptarget').val();
      var stopperson = Meteor.users.findOne({username: name});
      if(typeof stopperson == 'undefined'){
         Session.set('form-value','has-error')
      }
      else
      {
         Session.set('form-value','has-success')
      }
    }
  })
  Template.stop.helpers({
    'validation': function(){
      return Session.get('form-value');
    }
  })
  Template.requests.helpers({
    'req': function(){
      var user = Meteor.user().username;
      var newStops = stop_requests.find({notified: "no"});
      newStops.forEach(function (post) {
        Notification.requestPermission(function (permission) {       
        if (permission === "granted") {         
          var notification = new Notification(post.sender+" told you to stop.");
          var id = post._id;
          Meteor.call('notifyme',id);       
      } });
      });
      return stop_requests.find({sender: user},{sort: {time: -1}}).fetch();
    }
  })
  Template.requests.events({
    'click #stopmessage': function(){
      var id = this._id;
      Meteor.call('readme',id);
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
    },
    'click .stop-button': function(){
      var exists = Session.get('form-value');
      if(exists == "has-success")
      {
        var sender = Meteor.user().username;
        var bully = $('#stoptarget').val();
        Meteor.call('stopme',sender,bully);
      }
    }
  });
  // Changes the email field in the login to a username
  Accounts.ui.config({
   passwordSignupFields: 'USERNAME_ONLY'
});
}