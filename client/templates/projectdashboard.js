Meteor.subscribe('produktBacklogItem');
Meteor.subscribe('sprintBacklogItem');
Meteor.subscribe('username');


Template.projectdashboard.helpers({

    projectname: function(){

        return Projects.findOne({_id: FlowRouter.getParam('id')}).name;
    },

    users: function(){

        return UserProjects.find({projectId: FlowRouter.getParam('id')})

    },

    productBacklogCount:function(){

        return ProductBacklogItems.find({projectId: FlowRouter.getParam('id')}).count()

    },
    productBacklog:function(){

        return ProductBacklogItems.find({projectId: FlowRouter.getParam('id')})

    },

    sprintBacklogCount: function() {

        return SprintBacklogItems.find({projectId: FlowRouter.getParam('id')}).count()

    },

    sprintBacklog: function(){

        return SprintBacklogItems.find({projectId: FlowRouter.getParam('id')})

    }

});

Template.user.helpers({

    username: function(){

        var id = this.userId;
        return Meteor.users.findOne({_id: id}).username;
    }

});