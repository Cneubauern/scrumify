Meteor.subscribe("backlogItems");

Template.createBacklog.events({

    "submit .newBacklogItem": function(event){
        // Prevent default browser form submit
        event.preventDefault();

        console.log(event);
        // Get value from form element
        var text = event.target.text.value;

        var points = event.target.points.value;

        var ready = event.target.isReady.checked;

        // Insert a task into the collection
       Meteor.call("addBacklogItem", text,points, ready)

        // Clear form
        event.target.text.value = "";
        event.target.points.value = "";
        event.target.isReady.checked = false;

    }


});