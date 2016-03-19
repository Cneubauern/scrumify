Meteor.subscribe("projects");

Template.selectproject.helpers({

    chooseprojects: function () {

        return Projects.find({});
    }
});

Template.selectproject.events({

    "submit .searchproject": function(event){



    },

    "click .selectProject": function(){

        console.log(this._id)

        FlowRouter.go('startplanning',{id: this._id})
    }
});

Template.chooseproject.helpers({



});