Template.createproject.events({

"submit .newProject": function(event){
    // Prevent default browser form submit
    event.preventDefault();

    console.log(event);

    // Get value from form element
    var project = event.target.projectName.value;


    // Insert a task into the collection
     Meteor.call("createProject", project, Meteor.userId, function(error, result){
         var projectId = result;

         console.log(projectId)

         Meteor.call('registerUser',Meteor.userId(), projectId);

     });

    // Clear form
    event.target.projectName.value = "";

   // FlowRouter.go('project')
}
});

Template.createproject.helpers({

});

