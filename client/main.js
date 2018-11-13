/*
    ELIZA Meteor Template Created by CHEN, Tsung-Ying
    for the NTHU course "Basic Web Linguistic Application Development"
    Last Updated on Oct 30, 2018
*/

Session.setDefault("currentPage", "frontPage");

var conversationLog = new ReactiveVar("ELIZA: How are you doing?");

var stupidResponse = function() {
  return "I beg your pardon?";
};

Template.body.onCreated(function() {

});

Template.body.onRendered(function() {

});

Template.body.helpers({
  checkCurrentPage: function(page) {
    return Session.equals("currentPage", page);
  }
});

Template.mainSection.helpers({
  getConversation: function()   {
    return conversationLog.get();
  }
});

Template.formSection.helpers({

});

Template.formSection.events({
  "click #submitMsg": function(event) {
    event.preventDefault();
    let myMsgObj = document.getElementById("myMsg");
    let myMsg = myMsgObj.value;
    let oldConversation = conversationLog.get();
    let newConversation = oldConversation+"\n"+"You: "+myMsg;
    let ELIZAResponse = stupidResponse();
    newConversation = newConversation+"\n"+"ELIZA: "+ELIZAResponse;
    conversationLog.set(newConversation);
    myMsgObj.value = "";
  },
  "click #resetMsg": function() {
    conversationLog.set("ELIZA: How are you doing?");
  }
});

Template.frontPage.events({
  "click #enterMain": function() {
    Session.set("currentPage", "home");
  }
});















