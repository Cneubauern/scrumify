Tasks = new Mongo.Collection("tasks");

Tasks.attachSchema(Tasks.schema);

Tasks.schema = new SimpleSchema({

    sprintBacklogId: {type: String},
    complete: {type: Boolean},
    text: {type: String}
});

Tasks.helpers({

})