Meteor.methods({

    setUsername: function(username){

        Accounts.setUsername(Meteor.userId(),username);

    }
})