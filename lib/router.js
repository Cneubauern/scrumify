/**
 * Created by cneubauer on 04.02.16.
 */



FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('App_body', {main: 'home'});
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

FlowRouter.route('/dashboard',{

    name:'dashboard',
    action() {
        BlazeLayout.render('App_body', {main: 'dashboard'});
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
