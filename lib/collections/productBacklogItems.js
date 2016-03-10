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

})