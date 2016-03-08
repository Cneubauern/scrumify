/**
 * Created by cneubauer on 03.02.16.
 */

BacklogItems = new Mongo.Collection("backlogItems");

ProductBacklogs = new Mongo.Collection("productBacklogs");

// Calculate a default name for a list in the form of 'List A'

ProductBacklogs.defaultName = function() {
    var nextLetter = '1', nextName = 'ProductBacklog ' + nextLetter;

    while (Lists.findOne({name: nextName})) {
        // not going to be too smart here, can go past Z
        nextLetter = String.fromCharCode(nextLetter.charCodeAt(0) + 1);
        nextName = 'ProductBacklog ' + nextLetter;
    }

    return nextName;
};

