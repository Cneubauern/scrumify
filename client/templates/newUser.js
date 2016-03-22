

Template.newUser.events({

    "submit .newname": function(event) {

        console.log("klick");

        console.log(event);

        var name = event.target.newname.value;

        console.log(name);

        if (name != ""){

            Meteor.call("setUsername", name);

            console.log(Meteor.user().username);

        }

        $('#myModal').modal('hide');
    }
});