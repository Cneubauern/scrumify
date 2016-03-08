/**
 * Created by cneubauer on 04.02.16.
 */

exposed = FlowRouter.group();


FlowRouter.route('/home', {
   triggersEnter:[function(){
       FlowRouter.go('/')
   }]
});

FlowRouter.route('/',{

    triggersEnter:[ function(){

        if (Meteor.loggingIn() || Meteor.userId()) {
            FlowRouter.go('/dashboard')
        }else {
            FlowRouter.go('/signin')
        }

    }],

    action(){
        BlazeLayout.render('App_body', {main: 'home'})
    }
})

FlowRouter.route('/dashboard',{

    name:'dashboard',
    action() {
        BlazeLayout.render('App_body', {main: 'dashboard'});
    }

});


FlowRouter.route('/createBacklog',{
    name:'createBacklog',
    action() {
        BlazeLayout.render('App_body', {main: 'createBacklog'});
    }

});

FlowRouter.route('/importBacklog',{
    name:'importBacklog',
    action() {
        BlazeLayout.render('App_body', {main: 'importBacklog'});
    }

});


FlowRouter.route('/about',{

    name:'about',
    action() {
        BlazeLayout.render('App_body', {main: 'about'});
    }

});

// Define these routes in a file loaded on both client and server
AccountsTemplates.configureRoute('signIn', {
    name: 'signin',
    path: '/signin'
});

AccountsTemplates.configureRoute('signUp', {
    name: 'join',
    path: '/join'
});

AccountsTemplates.configureRoute('forgotPwd');

AccountsTemplates.configureRoute('resetPwd', {
    name: 'resetPwd',
    path: '/reset-password'
});

var mySubmitFunc = function(error, state) {
    console.log("-- mySubmitFunc!");
    if (!error) {
        if (state === "signUp") {
            console.log("-- Successfully Registered!");
            // ...
        }
        if (state === "resendVerificationEmail" || state === "resendVerificationEmail") {
            console.log("-- Successfully verified!");
            // ...
        }
    }
};