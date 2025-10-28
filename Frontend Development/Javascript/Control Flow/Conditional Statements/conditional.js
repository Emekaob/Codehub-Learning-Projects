// if statement
let userAge = 19;

let isAdult = userAge > 18 ? "Access Granted" : "Access Denied";

console.log(isAdult);

// if-else statement
let isRaining = false;

if (isRaining === true) {
  console.log("Take an umbrella");
} else {
  console.log("Enjoy the sun");
}

//else if statement
let score = 71;

if (score >= 90 && score <= 100) {
  console.log("A");
} else if (score >= 80 && score <= 89) {
  console.log("B");
} else if (score >= 70 && score <= 79) {
  console.log("C");
} else if (score < 70) {
  console.log("Needs Improvement");
}

// switch Statement
let dayNumber = 3;

switch (dayNumber) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
}

// Password Strength Checker
let password1 = "password";

if (password1.length < 6) {
  console.log("Too weak");
} else if (password1.length >= 6) {
  console.log("Medium strength");
} else if (password1.length >= 8) {
  console.log("Strong");
}

// Ticket Price Calculator
let age = 20;
let isStudent = false;

if (age <= 12 || age > 65) {
  console.log("$5");
} else if (isStudent === true) {
  console.log("N8");
} else if (isStudent === false && age > 12 && age <= 65) {
  console.log("N12");
}

// Login System
let username = "";
let password = "";

if (username === "admin" && password === "admin123") {
  console.log("Admin logged in");
} else if (username === "") {
  console.log("Username required");
} else {
  console.log("Invalid credentials");
}

// Season Detector
let month = [];

for (i = 1; i <= 12; i++) {
  month.push(i);
}

// console.log(month);
const currentMonth = month[5];

switch (currentMonth) {
  case 12 || 1 || 2:
    console.log("Winter");
    break;
  case 3 || 4 || 5:
    console.log("Spring");
    break;
  case 6 || 7 || 8:
    console.log("Summer");
    break;
  case 9 || 10 || 11:
    console.log("Fall");
    break;
}

// Leap Year Checker
let newYear = 2028;

if (newYear % 4 == 0) {
  console.log("Leap year");
} else if (newYear % 100 !== 0) {
  console.log("Not a leap year");
} else if (newYear % 400 == 0) {
  console.log("Leap Year");
}
