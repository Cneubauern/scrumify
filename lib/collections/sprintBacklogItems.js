SprintBacklogItems = new Mongo.Collection("sprintBAcklogItems");

SprintBacklogItems.helpers({

    Tasks(){
        return Tasks.find({sprintBacklogId: this.id});
    }

});

Meteor.methods({

    createSprintBacklogItem: function(projectId, text, state){

        SprintBacklogItems.insert({
            projectId: projectId,
            text: text,
            complete: state,

        })

    },

    deleteSprintBacklogItem: function(itemId){

        SprintBacklogItems.remove(itemId);
    }

});