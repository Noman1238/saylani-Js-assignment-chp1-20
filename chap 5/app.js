//CHAPTER 5
//q1
var num1 = parseInt(prompt("Enter First number (arithmetic operation)"));
var num2 = parseInt(prompt("Enter Second number (arithmetic operation)"));
var result = num1+num2;
document.writeln("Sum of "+num1+" and "+num2+" is "+result+"<br>");
//q2
var result = num1-num2;
document.writeln("Subtraction of "+num1+" and "+num2+" is "+result+"<br>");
var result = num1*num2;
document.writeln("Multiplication of "+num1+" and "+num2+" is "+result+"<br>");
var result = num1/num2;
document.writeln("Division of "+num1+" and "+num2+" is "+result+"<br>");
var result = num1%num2;
document.writeln("Modulus of "+num1+" and "+num2+" is "+result+"<br><br>");
//q3
var value;
document.writeln("Value after variable declaration is: "+value+"<br>");
value=5;
document.writeln("Initial value: "+value+"<br>");
value+=1;
document.writeln("Value after increment is: "+value+"<br>");
value+=7;
document.writeln("Value after addition is: "+value+"<br>");
value-=1;
document.writeln("Value after decrement is: "+value+"<br>");
value%=3;
document.writeln("The remainder is: "+value+"<br><br>");
//q4
var price=600;
document.writeln("Total cost to buy 5 tickets to a movie is "+price*5+"PKR"+"<br><br>");
//q5
var num=4;
document.writeln("<h1>Table of "+num+"<br></h1>")
for(var i=1;i<=10;i++){
    document.writeln(num+"*"+i+"="+num*i+"<br>")
}
document.writeln("<br>");
//q6
var celcius=25,farenheit=70;
tofaren = (celcius*9/5)+32;
tocelcius = (farenheit-32)*5/9;
document.writeln(celcius+"<sup>0</sup>C is "+tofaren+"<sup>0</sup>F"+"<br>");
document.writeln(farenheit+"<sup>0</sup>F is "+tocelcius+"<sup>0</sup>C"+"<br><br>");
//q7
var item1=650,item2=100,q1=3,q2=7,ship=100;
var total = (item1*q1)+(item2*q2)+ship;
document.writeln("<h1>Shopping Cart</h1><br>Price of item 1 is "+item1+"<br>Quantity of item 1 is "+q1+"<br>Price of item 2 is "+item2+"<br>Quantity of item 2 is "+q2+"<br>Shipping charges "+ship+"<br><br>Total cost of your order is "+total+"<br><br>");
//q8
var total=980,obtained=804;
per=(obtained/total)*100;
document.writeln("Total marks: "+total+"<br>Marks obtained: "+obtained+"<br>Percentage: "+per+"%<br><br>");
//q9
document.writeln("<h1>Curerncy in PKR</h1><br><br>Total Currency in PKR: "+((10*104.80)+(25*28))+"<br><br>");
//q10
var num=10;
num = ((num+5)*10)/2;
//q11
var current=2020,birth=1999;
document.writeln("<h1>Age Calculator</h1><br><br>Current Year: "+current+"<br>Birth Year: "+birth+"<br>"+"Your Age is: "+(current-birth)+"<br><br>");
//q12
var radius=20,pi=3.142;
document.writeln("<h1>The Geometrizer</h1><br><br>Radius of a circle: "+radius+"<br>The circumference is: "+(2*pi*radius)+"<br>The area is: "+(pi*radius**2)+"<br><br>");
//q13
var snack="chips",cage=20,eage=75,amount=4;
document.writeln("<h1>The Lifetime Supply Calculator</h1><br><br>Favourite snack: "+snack+"<br>current age: "+cage+"<br>Estimated maximum Age: "+eage+"<br>Amount of snack per day: "+amount+"<br>You will need "+((eage-cage)*amount)+" "+snack+" to last you untill the ripe old age of "+eage+"<br><br>");
