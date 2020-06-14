//CHAP 17-20

//q1
const emptyMdArr = [
    [],
    [],
    [],
  ];
  
//q2
  const arr = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1],
  ];
  
  //q3
  for (let i = 1; i <= 10; i++) {
    document.write(`${i}<br>`);
  }
  
  //q4
  const num = +prompt('Enter number for table');
  const length = +prompt('Enter length of table');
  document.write('<br>');
  for (let i = 1; i <= length; i++) {
    document.write(`${num} * ${i} = ${num * i}<br>`);
  }
  
  //q5
  const fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry'];
  document.write('<br>');
  fruits.forEach((item) => {
    document.write(`${item}<br>`);
  });
  document.write('<br>');
  fruits.forEach((item, index) => {
    document.write(`Element at index ${index} is ${item}<br>`);
  });
  
  //q6
  document.write('<h2>Counting</h2>');
  for (let i = 1; i <= 15; i++) {
    document.write(`${i},`);
  }
  
  document.write('<h2>Reverse Counting</h2>');
  for (let i = 10; i >= 1; i--) {
    document.write(`${i},`);
  }
  
  document.write('<h2>Even</h2>');
  for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
      document.write(`${i},`);
    }
  }
  
  document.write('<h2>Odd</h2>');
  for (let i = 0; i <= 20; i++) {
    if (i % 2 !== 0) {
      document.write(`${i},`);
    }
  }
  
  document.write('<h2>Series</h2>');
  for (let i = 2; i <= 20; i++) {
    if (i % 2 === 0) {
      document.write(`${i}k,`);
    }
  }
  
  //q7
  const A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
  const enteredProduct = prompt(
    "Welcome to ABC Bakrey. What do you want to order sir/ma'am?"
  );
  const indexA = A.indexOf(enteredProduct);
  if (indexA !== -1) {
    alert(`${enteredProduct} is available at index ${indexA} in our bakrey`);
  } else {
    alert(`We are sorry. ${enteredProduct} is not available in our bakrey`);
  }
  
  //q8
  const a = [24, 53, 78, 91, 12];
  document.write(
    `<br><br>Array items: ${a}<br>The largest number is ${a.sort()[a.length - 1]}`
  );
  
  //q9
  const _a = [24, 53, 78, 91, 12];
  document.write(
    `<br><br>Array items: ${a}<br>The largest number is ${a.sort()[0]}`
  );
  
  //q10
  document.write('<br><br>');
  for (let i = 0; i <= 100; i++) {
    if (i % 5 === 0) {
      document.write(`${i},`);
    }
  }