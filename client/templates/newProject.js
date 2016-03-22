Template.newProject.events({

    "submit .newProject": function (event) {
        // Prevent default browser form submit
        event.preventDefault();

        console.log(event);

        // Get value from form element
        var project = event.target.projectName.value;


        // Insert a task into the collection
        Meteor.call("createProject", project, function (error, result) {

            var projectId = result;

            console.log(projectId);

            Meteor.call('registerUser', projectId,function(error, result){

                // Clear form

            });

        });

        event.target.projectName.value = "";

        $('#dashboardModal').modal('hide');

        //FlowRouter.go('project', {id: projectId});

    }
});

Template.newProject.helpers({

});