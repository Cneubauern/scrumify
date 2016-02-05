/**
 * Created by cneubauer on 04.02.16.
 */

// the App_notFound template is used for unknown routes and missing lists
FlowRouter.notFound = {
    action() {
        BlazeLayout.render('App_body', {main: 'app_notFound'});
    }
};


FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('app_body', {main: 'start'});
    }
});

FlowRouter.route('/sprintbacklog',{
    name:'sprintbacklog',
    action() {
        BlazeLayout.render('app_body', {main: 'sprint-backlog'});
    }

});

FlowRouter.route('/productbacklog',{

    name:'productbacklog',
    action() {
        BlazeLayout.render('app_body', {main: 'product-backlog'});
    }

});

FlowRouter.route('/dashboard',{

    name:'dashboard',
    action() {
        BlazeLayout.render('app_body', {main: 'dashboard'});
    }

});