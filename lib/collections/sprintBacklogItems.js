SprintBacklogItems = new Mongo.Collection("sprintBAcklogItems");

SprintBacklogItems.attachSchema(SprintBacklogItems.schema);

SprintBacklogItems.schema = new SimpleSchema({
    projectId: {type: String},
    text: {type: String},
    complete: {type: Boolean},
    createdAt: {type: Date}
});

SprintBacklogItems.helpers({

    Tasks(){
        return Tasks.find({sprintBacklogId: this.id});
    }

})