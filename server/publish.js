/**
 * Created by cneubauer on 03.02.16.
 */
    // This code only runs on the server
    // Only publish tasks that are public or belong to the current user

Meteor.publish("tasks", function () {
    return Tasks.find({
        $or: [
            { private: {$ne: true} },
            { owner: this.userId }
        ]
    });
});

