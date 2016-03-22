/**
 * Created by cneubauer on 04.02.16.
 */

FlowRouter.triggers.enter([AccountsTemplates.ensureSignedIn]);

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
});

FlowRouter.route('/home', {
   triggersEnter:[function(){
       FlowRouter.go('/')
   }]
});

FlowRouter.route('/dashboard',{

    name:'dashboard',
    action() {
        BlazeLayout.render('App_body', {main: 'dashboard'});
    }
});

FlowRouter.route('/newProject',{
    name:'newProject',
    action() {
        BlazeLayout.render('App_body', {main: 'newProject'});
    }
});

FlowRouter.route('/dashboard/:page',{
    name:'createproject',
    action(param) {

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

FlowRouter.route('/productBacklog',{
    name:'productBacklog',
    action() {
        BlazeLayout.render('App_body', {main: 'productBacklog'});
    }
});

FlowRouter.route('/project/:id',{
    name:'project', action(){
        BlazeLayout.render('App_body', {main:'projectdashboard'})
    }
});

FlowRouter.route('/joinproject/:id',{

    name: 'joinproject',
    action(){
        BlazeLayout.render('App_body', {main: 'joinproject'})
    }
});



// Static Pages

// the App_notFound template is used for unknown routes and missing lists
FlowRouter.notFound = {
    action() {
        BlazeLayout.render('App_body', {main: 'App_notFound'});
    }
};

FlowRouter.route('/about',{

    name:'about',
    action() {
        BlazeLayout.render('App_body', {main: 'about'});
    }
});

FlowRouter.route('/agb',{

    name: 'agb', action(){
        BlazeLayout.render('App_body', {main: 'agb'})
    }
});

FlowRouter.route('/faq',{
    name: 'faq', action(){
        BlazeLayout.render('App_body', {main: 'faq'})
    }
});
FlowRouter.route('/impressum',{

    name: 'impressum', action(){
        BlazeLayout.render('App_body', {main: 'impressum'})
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