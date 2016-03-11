Criteria =  new Mongo.Collection("criteria");

Criteria.attachSchema(Criteria.schema);

Criteria.schema = new SimpleSchema({

    itemid: {type: String},
    text: {type: String}

});

Criteria.helpers({

});

Meteor.methods({

    createCriteria: function(id, text) {

        Criteria.insert({
            itemid: id,
            text: text
        })
    },

    deleteCriteria: function(id){

        Criteria.remove(id)
    }

});