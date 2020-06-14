//CHAPTER 6-9

//q1
num = 10;
document.writeln("<h1>Result:</h1><br>The value of a is:10<br>--------------------------------<br><br>The value of ++a is: "+(++num)+"<br>Now the value of a is: "+num+"<br><br>The value of a++ is: "+(num++)+"<br>Now the value of a is: "+num+"<br><br>The value of --a is: "+(--num)+"<br>Now the value of a is: "+num+"<br><br>The value of a-- is: "+(num--)+"<br>Now the value of a is: "+num+"<br>-----------------------------------<br><br>");
//q2
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
/**
 * 1-0+1+1
 * in first step --a the value will first decrement and then supplied to other operation
 * same in the second step --b the value of b will decrement and then supplied
 *  in third step ++b the value will become 1 and supplied
 * in the last step b-- the value of b=1 will be added and then 1 is decremented.
 * answer should be 3
 */
document.writeln("<h1>result is: "+result+"</h1><br><br>");
//q3
document.writeln("<h1>Hello and Welcome "+ (prompt("please enter your name"))+"</h1><br><br>");
//q4
var table_num = +prompt("Please enter the number for multiplication table ");
if(table_num){
    for(var i=1;i<=10;i++){
        document.writeln(table_num+"*"+i+"="+table_num*i+"<br>")
    }
    document.writeln("<br><br>");
}

else{
    for(var i=1;i<=10;i++){
        document.writeln("5*"+i+"="+5*i+"<br>")
    }
}
document.writeln("<br><br>");