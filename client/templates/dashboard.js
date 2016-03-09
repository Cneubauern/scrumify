Template.dashboard.onRendered(


    function(){

        var username = Meteor.user().username;

        if(typeof username === "undefined" ){

            console.log("undefined");

            $('#myModal').modal('show')

        } else {
            console.log(username)
        }

    });


