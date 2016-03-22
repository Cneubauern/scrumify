Template.joinProject.helpers({

    chooseprojects: function () {

        return UserProjects.find({userId: {$not: Meteor.userId()}});
    }


});

Template.joinProject.events({

    "submit .searchproject": function (event) {

    },

    "click .selectProject": function () {

        console.log(this.projectId);

        if (!UserProjects.findOne({userId: Meteor.userId(), projectId: this.projectId})) {

            Meteor.call('registerUser', this.projectId, function (error, result) {

            });
        }


$('#dashboardModal').modal('hide');

//FlowRouter.go('project', {id: this.projectId})
}
})
;

Template.joinProject.onDestroyed(
    function () {


    }
);

Template.chooseproject.helpers({

    projectname: function () {


        return Projects.findOne(this.projectId).name;

    }
});