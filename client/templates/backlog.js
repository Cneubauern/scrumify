Template.backlog.onCreated(

    function(){

        this.autorun(()=>{

            //this.subscribe('userProjects.projects')

        })
    }
);
Template.backlog.helpers({

    backlogItems: function(){
        return BacklogItems.find({})
    }
});