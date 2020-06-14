//CAHPTER 9-11

//q1
var city = prompt("City name","enter the name of city here");
if(city=="karachi"){
    document.writeln("Welcome to city of lights<br><br>");

}
else{
    document.writeln("Welcome to "+city+"<br><br>");
}
//q2
var gender = prompt("Gender","enter your gender");
if(gender=="male"){
    document.writeln("Good morning Sir.<br><br>");

}
else if(gender=="female"){
    document.writeln("Good morning Ma'am<br><br>");
}
//q3
var color = prompt("Signal Color","enter the color of the traffic signal");
if(color=='red'){
    document.writeln("Must stop<br><br>");

}
else if(color=='yellow'){
    document.writeln("Ready to move<br><br>");
}
else if(color=='green'){
    document.writeln("Move now<br><br>");
}
//q4
var fuel = prompt("enter remaining fuel in car in litres");
if(fuel<0.25){
    document.writeln("Please refill the fuel in your car.<br><br>");
}
else{document.writeln("go on<br><br>");}
//q5
var a = 4;
if (++a === 5){ 
    alert("given condition for variable a is true");  
     //the condition will give alert because a is first incremented then being checked.
 }
 var b = 82;
 if (b++ === 83){ 
     alert("given condition for variable b is true"); }  
     //the condition will not give alert because b is first checked then incremented.

 var c = 12;
 if (c++ === 13){ 
     alert("condition 1 is true"); 
     //this if clause will not give alert because c=12 is first checked which is false.
     }
if (c === 13){ 
    alert("condition 2 is true");
    //this if clause will give alert because c will become 13 after the previous if ++ 
}
if (++c < 14){ 
    alert("condition 3 is true"); 
    //this if clause will not give the alert because c is 13 and after this if it will first
    //become 14 and then being checked which will become false.
}
if(c === 14){ 
    alert("condition 4 is true"); 
    //this if clause will give alert because c is 14 and it satisfies the condition. 
}

 var materialCost = 20000;
 var laborCost = 2000;
 var totalCost = materialCost + laborCost;
 if (totalCost === laborCost + materialCost){ 
     alert("The cost equals"); 
     //this will generate alert because the amount stored in the totalCost variable is the commulative sum of the both individual variables.
}

if (true){ 
     alert("True"); //this if clause generates the alert because the if statement only work if the conditiion is true.
}
if (false){ 
    alert("False"); //this if clause will not generate the alert because the if statement only work if the conditiion is true.
}

if("car" < "cat"){ 
     alert("car is smaller than cat"); 
     //this if statement compares both strings alphabetically
     //that's why the r is smaller than t
}
//q6
var sub1=+prompt("enter subject 1 marks");
var sub2=+prompt("enter subject 2 marks");
var sub3=+prompt("enter subject 3 marks");
total=300;
var omarks=(sub1+sub2+sub3);
per=omarks/total*100;
if(per>=80){
    document.writeln("<br><h1>Marks Sheet</h1><br><br>Total Marks: "+total+"<br>Marks Obtained: "+omarks+"<br>Percentage: "+per+"%<br>Grade: A-one<br>Remarks: Excellent<br><br>");
}
else if(per>=70){
    document.writeln("<br><h1>Marks Sheet</h1><br><br>Total Marks: "+total+"<br>Marks Obtained: "+omarks+"<br>Percentage: "+per+"%<br>Grade: A<br>Remarks: Good<br><br>");
}
else if(per>=60){
    document.writeln("<br><h1>Marks Sheet</h1><br><br>Total Marks: "+total+"<br>Marks Obtained: "+omarks+"<br>Percentage: "+per+"%<br>Grade: B<br>Remarks: You need to improve<br><br>");
}
else{
    document.writeln("<br><h1>Marks Sheet</h1><br><br>Total Marks: "+total+"<br>Marks Obtained: "+omarks+"<br>Percentage: "+per+"%<br>Grade: Fail<br>Remarks: Sorry<br><br>");
}
//q7
num = 9;
var guess=+prompt("Guess the secret number ");
if(num ===guess){document.writeln("Bingo! Correct answer<br><br>");}
else if(num===(guess+1)){document.writeln("Close enough to the correct answer<br><br>");}
//q8
var num = +prompt("enter number to check if divisible by 3?");
if(num%3==0){document.writeln("The number "+num+" you entered is divisible by 3<br><br>");}
else{document.writeln("The number "+num+" you entered is not divisible by 3<br><br>");}
//q9
num = +prompt("enter number");
if(num%2==0){document.writeln("Number is Even<br><br>");}
else{document.writeln("Number is Odd<br><br>");}
//q10
var temp= +prompt("Enter temperature");
if(temp>40){document.writeln("It is too hot outside.<br><br>");}
else if(temp>30){document.writeln("The weather today is Normal.<br><br>");}
else if(temp>20){document.writeln("Today's Weather is cool.<br><br>");}
else if(temp>10){document.writeln("OMG! Today's weather is so cool.<br><br>");}
//q11
var num1 = +prompt("Enter first number");
var num2 = +prompt("Enter second number");
var op = prompt("enter operation(+,-,*,/,%)");
if(op=="+"){document.writeln("The addition of both number is: "+num1+num2);}
else if(op=="-"){document.writeln("The subtraction of both number is: "+num1-num2+"<br><br>");}
else if(op=="*"){document.writeln("The Multiplication of the numbers is: "+num1*num2+"<br><br>");}
else if(op=="/"){document.writeln("The division is: "+num1/num2+"<br><br>");}
else if(op=="%"){document.writeln("The Modulus(remainder) is: "+num1%num2+"<br><br>");}
