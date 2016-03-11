Tasks = new Mongo.Collection("tasks");

Tasks.attachSchema(Tasks.schema);

Tasks.schema = new SimpleSchema({

    sprintBacklogId: {type: String},
    complete: {type: Boolean},
    text: {type: String}
});

Tasks.helpers({

});


Meteor.methods({

    createTask: function(id, state, text){

        Tasks.insert({
            sprintBacklogId: id,
            complete: state,
            text: text
        })
    },

    deleteTask: function(taskId){
        Tasks.remove(taskId)
    }

});