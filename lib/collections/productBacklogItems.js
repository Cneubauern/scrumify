ProductBacklogItems = new  Mongo.Collection("productBacklogItems");

ProductBacklogItems.attachSchema(ProductBacklogItems.schema);

ProductBacklogItems.schema = new SimpleSchema({
    projectId: {type: String},
    text: {type: String},
    points: {type: Number},
    ready: {type: Boolean},
    createdAt: {type: Date}
});

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