if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
  Meteor.methods({
  	'stopme': function(sender,bully){
  		return stop_requests.insert({
			sender: sender,
			bully: bully,
			time: new Date(),
			read: "list-group-item-info",
			notified: "no"
		})
  	},
  	'readme': function(id){
  		stop_requests.upsert({
  			_id: id
  		},
  		{
  			$set:
  			{
  				read: "read"
  			}
  		});
  	},
  	'notifyme': function(id){
  		stop_requests.upsert({
  			_id: id
  		},
  		{
  			$set:
  			{
  				notified: "yes"
  			}
  		})
  	}
  })
}
