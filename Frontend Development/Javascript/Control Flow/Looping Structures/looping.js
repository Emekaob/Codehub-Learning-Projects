// For Loop

// Number Printer
for (let i = 1; i < 11; i++) {
  console.log(i);
}

// Sum Calculator
let number = 0;
for (let i = 1; i < 101; i++) {
  number += i;
}
console.log(number);

// Multiplication Table
for (let i = 1; i < 11; i++) {
  let num = 5;
  let mul = num * i;
  console.log(`${num}*${i}=${mul}`);
}

// Array Iterator
let items = ["apple", "banana", "cherry", "i", "me"];
for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}

// let string = "hello";
// // console.log(string[-1]);

// While Loop

// Countdown Timer
let h = 10;
while (h === 0 && h < 10) {
  console.log(h);
  h++;
}

let i = 2;
while (i < 5) {
  console.log("Iteration", i);
  i++;
}
