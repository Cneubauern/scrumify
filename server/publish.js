/**
 * Created by cneubauer on 03.02.16.
 */
    // This code only runs on the server
    // Only publish tasks that are public or belong to the current user

// Subscriptions to Criteria

Meteor.publish('criteria', function(){
    return Criteria.find();
});

// Subscriptions to Tasks

Meteor.publish('tasks', function(){
    return Tasks.find();
});


// Subscriptions to SprintBacklogItems

Meteor.publish('sprintBacklogItem', function(){
    return SprintBacklogItems.find();
});

// Subscriptions to ProductBacklogItems

Meteor.publish('produktBacklogItem', function(){
    return ProductBacklogItems.find();
});

// Subscriptions to Projects

Meteor.publish('projects', function(){

    return Projects.find();
});


// Subscriptions To UserProjects
Meteor.publish('userprojects', function(){

    return UserProjects.find();

});

Meteor.publish('username', function(userId){

    return Meteor.users.find({},{fields:{username:1}})
});