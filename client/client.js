if (Meteor.isClient) {
  // counter starts at 0

  Template.main.events({
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
}