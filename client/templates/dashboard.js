Meteor.subscribe('projects');
Meteor.subscribe('userprojects');

Template.dashboard.onRendered(

    function () {

        var username = Meteor.user().username;

        if (typeof username === "undefined") {

            console.log("undefined");

            $('#myModal').modal('show')

        } else {
            console.log(username)
        }
    }
);

Template.dashboard.helpers({

    projectsCount: function () {

        return UserProjects.find({userId: Meteor.userId()}).count()
    },

    projects: function () {

        return UserProjects.find({userId: Meteor.userId()});
    },

    username: function () {

        return Meteor.user().username;

    },

    modalTemplate: function () {

        var template = FlowRouter.getParam('page');

        console.log(template);

        return template;
    }

});

Template.dashboard.events({

    "click .openModal": function (event) {

        console.log(event);

        FlowRouter.go('createproject', {page: event.currentTarget.id});

        $('#dashboardModal').modal('show');


    }

});


