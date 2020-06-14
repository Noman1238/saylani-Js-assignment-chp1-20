//CHAPTER 2

//q1
var username;
//q2
var myName = "Noman Ahmed";
//q3
var message;
message ="Hi There!!";
alert(message);
//q4
var name="Noman Ahmed", age=21, work="Certified Website & Mobile Application Development";
alert(name);
alert(age+" years old");
alert(work);
//q5
var displayFood='';
var food="Biryani";
for(let i =food.length; i>0 ; i--){
    displayFood += food.slice(0,i)+'\n';
}
alert(displayFood.slice(0,displayFood.length-1)); //to remove the last \n
//q6
var email="ahmednoman1238@yahoo.com";
alert("My email address is "+email);
//q7
var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the book " +book);
//q8
document.writeln("I learnt how to write HTML content through JavaScript<br>");
//q9
var icon="▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬";
alert(icon);