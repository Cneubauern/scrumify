Template.createproject.events({

"submit .newProject": function(events){
    // Prevent default browser form submit
    event.preventDefault();

    console.log(event);
    // Get value from form element
    var name = event.target.name.value;

    // Insert a task into the collection
    Meteor.call("createProject", name,Meteor.userId())

    // Clear form
    event.target.name.value = "";

    FlowRouter.go('project')
}
});

Template.createproject.helpers({

});

