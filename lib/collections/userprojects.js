UserProjects = new Mongo.Collection("userProjects");

//UserProjects.attachSchema(UserProjects.schema);

//UserProjects.schema = new SimpleSchema({
//    userId: {type: String},
//    projectId: {type: String}
//});

UserProjects.helpers({

});


Meteor.methods({

    registerUser: function(projectId){

        return UserProjects.insert({
            userId: this.userId,
            projectId: projectId
        })

    },

    unregisterUser: function( projectId){

        UserProjects.remove({userId: this.userId, projectId:project});

    }

})