Template.newProject.events({

    "click #search":function(){

        FlowRouter.go('createproject',{page:'selectproject'})
    },

    "click #create":function(){

        FlowRouter.go('createproject',{page:'createproject'})
    }
});