UserProjects = new Mongo.Collection("userProjects");

//UserProjects.attachSchema(UserProjects.schema);

//UserProjects.schema = new SimpleSchema({
//    userId: {type: String},
//    projectId: {type: String}
//});

UserProjects.helpers({

    Projects() {

        return Projects.find({_id: this.projectId});
    }

});


Meteor.methods({

    registerUser: function(userId, projectId){

        UserProjects.insert({
            userId: userId,
            projectId: projectId
        })

    },

    unregisterUser: function(userId, projectId){

        UserProjects.remove({userId:userId, projectId:project});

    }

})