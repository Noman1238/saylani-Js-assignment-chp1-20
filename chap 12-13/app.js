//CHAP 12-13

//q1
var asciiCode = +prompt("Enter a character ").charCodeAt();
if (asciiCode >= 48 && asciiCode <= 57) {
    alert('Number');
  } else if (asciiCode >= 65 && asciiCode <= 90) {
    alert('Uppercase Letter');
  } else if (asciiCode >= 97 && asciiCode <= 122) {
    alert('Lowercase Letter');
  } else {
    alert('Special Character');
  }

//q2
const num1 = +(prompt('Enter first integer'));
const num2 = +(prompt('Enter second integer'));
if (num1 === num2) {
  alert('Both integers are equal');
} else if (num1 > num2) {
  alert(`${num1} is greater than ${num2}`);
} else {
  alert(`${num2} is greater than ${num1}`);
}

//q3
const num = +(prompt('Enter a number'));
if (num > 0) {
  alert('Number is positive');
} else if (num < 0) {
  alert('Number is negative');
} else {
  alert('Number is zero');
}

//q4
const char = prompt('Enter string of length 1 character').toLowerCase();
if(char==='a'||char==='e'||char==='i'||char==='o'||char==='u'){alert('Vowel');}
//if ('aeiou'.includes(char)) {
 // alert('True');} 
else {
  alert('False');
}

//q5
const correctPass = 'helloworld';
const enteredPass = prompt('Enter Password');
if (enteredPass === '') {
  alert('Please enter your password');
} else if (enteredPass === correctPass) {
  alert('Correct! The password you entered matches the original password');
} else {
  alert('Incorrect password');
}

//q6
var greeting;
var hour = 13;
if (hour < 18) {
  greeting = 'Good day';
}
else {
  greeting = 'Good evening';
}

//q7
const time = +(prompt("Enter time in 24 formate (Don't use : character)"));
if (time >= 0000 && time < 1200) {
  alert('Good Morning!');
} else if (time >= 1200 && time < 1700) {
  alert('Good Afternoon!');
} else if (time >= 1700 && time < 2100) {
  alert('Good Evening!');
} else if (time >= 2100 && time < 2359) {
  alert('Good Night');
}