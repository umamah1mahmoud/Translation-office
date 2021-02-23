
// checking user age
// see what is the user coming for a fellow translator ar client



var UserAge=prompt("How old are you?");
if (UserAge < 18) {
   console.log("Sorry you're under the legal age! We cannot help you");
}

if (UserAge>=18) {
    console.log ("Welcome");
}

var userT= "translator"
var userC= "client"
var UserType=prompt("Why are you here? Are you a translator or a client?");
if (UserType===userT){
    console.log ("We will gladly contribute in promosing projects!");
}
if (UserType===userC){
    console.log ("Our team will try to help you as much as we can. Please contact us.");
}