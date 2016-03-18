Projects = new Mongo.Collection("projects");

Projects.attachSchema(Projects.schema);

Projects.schema = new SimpleSchema({
    name: {type: String},
    userId: {type: String, regEx: SimpleSchema.RegEx.Id, optional: true},
    createdAt: {type: Date}
});

Projects.helpers({

    Users(){
        return UserProjects.find({projectId: this.id})
    }

});

Meteor.methods({

    createProject: function(name, userId, puplic) {

        Projects.insert({
            name: name,
            userId: userId,
            createdAt: new Date()
        });

        var projectId = Projects.findOne({userId:userId},{createdAt: -1}).id;

        Meteor.call('registerUser', userId, projectId);
    },

    deleteProject: function(id){

        Projects.remove(id)
    }

});