Template.userProject.events({

    "click .startPlanning": function (event) {

        console.log(this.projectId);

        FlowRouter.go('project', {id: this.projectId})
    },

    "click .deleteBtn": function (event) {
    }
});

Template.userProject.helpers({

    projectname: function () {

        return Projects.findOne(this.projectId).name;

    }
});