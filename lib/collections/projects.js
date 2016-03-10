Projects = new Mongo.Collection("projects");

Projects.attachSchema(Projects.schema);

Projects.schema = new SimpleSchema({
    name: {type: String},
    incompleteCount: {type: Number, defaultValue: 0},
    userId: {type: String, regEx: SimpleSchema.RegEx.Id, optional: true},
    public: {type: Boolean}
});

Projects.helpers({

    Users(){
        return UserProjects.find({projectId: this.id})
    }

})

