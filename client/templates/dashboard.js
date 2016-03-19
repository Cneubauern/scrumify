
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

Meteor.subscribe("userProjects");

Template.dashboard.helpers({

    projectsCount: function () {

        return UserProjects.find({userId: Meteor.userId()}).count()

    },

    projects: function () {

        return UserProjects.find({userId: Meteor.userId()});

    },

    username: function(){

        return Meteor.user().username;

    },

    modalTemplate: function(){

        var template = FlowRouter.getParam('page');

        console.log(template);

        return template;
    }

});

Template.dashboard.events({

    "click #openModal": function(){

        console.log("click");

        FlowRouter.go('createproject',{page: "newProject"});

        $('#newProject').modal('show')



    }

});

Template.project.events({

    "click .startPlanning": function(event){

        console.log(this.projectId);

        FlowRouter.go('startplanning',{id: this.projectId})
    },

    "click .deleteBtn": function(event){

    }

});

Template.project.helpers({

    projectname: function(){

        return Projects.findOne(this.projectId).name;

    }

});