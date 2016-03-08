/**
 * Created by cneubauer on 03.02.16.
 */
    // This code only runs on the server
    // Only publish tasks that are public or belong to the current user

Meteor.publish('publicBacklogs', function() {
    return ProductBacklogs.find();
});

Meteor.publish('privateBacklogs', function() {
        return ProductBacklogs.find();
});

Meteor.publish('backlogItems', function(listId) {
    return BacklogItems.find();
});
