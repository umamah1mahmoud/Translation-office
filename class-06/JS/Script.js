
// checking user age
// see what is the user coming for a fellow translator ar client

var secret="translation";
var userGuess=prompt("it's a robot check, please write our office proffession");
while (secret !=userGuess) {
  userGuess=prompt("not correct! please try again");
}
alert("You got it! Good to go");


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

function wordsCount(pages){
    var words=pages*500;
     alert ("Number of words is" +words);
 }
 var counter=0;
 var pages=0;
 while (counter>0);
  
 pages=prompt("Please type in the number of pages (single spaced)");
  
 console.log (wordsCount(pages));

 
var wordsNumber=prompt("how many words do you want to translate?");
if (wordsNumber <= 5000) {
    alert("We need 2-3 working days to finish your request.");
}
if (wordsNumber > 5000){
    alert("We need at least 5 days minimum to finish your work. Please reach to us if it's more than 10,000 words")
}

// the user rating of this interaction
var counter=0
var rating= prompt ("Please rate out interactive page from 0 to 5..");
for (i=0; i<=rating; i++){ 
    document.write('<img src="https://st2.depositphotos.com/1000868/5525/i/950/depositphotos_55257245-stock-photo-3d-yellow-star-isolated-on.jpg" />');
}
