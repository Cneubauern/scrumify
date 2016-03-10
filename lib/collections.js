/**
 * Created by cneubauer on 03.02.16.
 */

BacklogItems = new Mongo.Collection("backlogItems");

Meteor.methods({

    addBacklogItem: function(text, points, ready){

        // Make sure the user is logged in before inserting a task
        if (! Meteor.userId()) {
            throw new Meteor.Error("not-authorized");
        }

        BacklogItems.insert({
            text: text,
            points: points,
            ready: ready,
            createdAt: new Date(),
            owner: Meteor.userId(),
            username: Meteor.user().username
        });
    },
    deleteBacklogItem: function (taskId) {
        BacklogItems.remove(taskId);
    }
});