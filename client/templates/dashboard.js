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

        var count = UserProjects.find({userId: Meteor.userId()}).count();

        var bool = Boolean;

        if (count > 0){
            bool = true;
        }
        else{
            bool = false;
        }

        return bool;
    },

    projects: function () {
        return UserProjects.find({userId: Meteor.userId()});
    }

})

Template.project.events({

    "click .startPlanning": function(event){

        console.log(this.id)
        Session.set("projectId", this.id)
    },

    "click .deleteBtn": function(event){



    }

})