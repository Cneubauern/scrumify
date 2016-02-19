/**
 * Created by cneubauer on 04.02.16.
 */

exposed = FlowRouter.group();


FlowRouter.route('/home', {
    name: 'home',
    action() {
        BlazeLayout.render('App_body', {main: 'home'});
    }
});

FlowRouter.route('/',{

    triggersEnter:[ function(){

        if (Meteor.loggingIn() || Meteor.userId()){
            FlowRouter.go('/dashboard')
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

FlowRouter.route('/sprintbacklog',{
    name:'sprintbacklog',
    action() {
        BlazeLayout.render('App_body', {main: 'sprint-backlog'});
    }

});

FlowRouter.route('/productbacklog',{

    name:'productbacklog',
    action() {
        BlazeLayout.render('App_body', {main: 'product-backlog'});
    }

});


FlowRouter.route('/taskboard',{

    name:'taskboard',
    action() {
        BlazeLayout.render('App_body', {main: 'taskboard'});
    }

});

FlowRouter.route('/planning',{

    name:'sprintplanning',
    action() {
        BlazeLayout.render('App_body', {main: 'sprintplanning'});
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