ProductBacklogItems = new  Mongo.Collection("productBacklogItems");

ProductBacklogItems.helpers({

});

Meteor.methods({

    createProductBacklogItem: function(projectId, text, points, ready){

        ProductBacklogItems.insert({
            projectId: projectId,
            text: text,
            points: points,
            ready: ready,
            createdAt: new Date()
        })
    },

    removeProductBacklogItem: function(itemId){
        ProductBacklogItems.remove(itemId);
    }

});