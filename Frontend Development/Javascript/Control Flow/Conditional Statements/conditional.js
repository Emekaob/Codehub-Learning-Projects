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
let username = "Emeka";
let password = "";

if (username == "Emeka" && password == "random") {
  console.log("Admin logged in");
} else if (username === "") {
  console.log("Username required");
} else {
  console.log("Invalid credentials");
}

// Season Detector
// let month = 2;

// switch (month) {
//   case 1:
//     console.log("Winter");
//   case 2:
//     console.log("Winter");
//   case 3:
//     console.log("Spring");
//   case 4:
//     console.log("Spring");
//   case 5:
//     console.log("Spring");
//   case 6:
//     console.log("Summer");
//   case 7:
//     console.log("Summer");
//   case 8:
//     console.log("Summer");
//   case 9:
//     console.log("Fall");
//   case 10:
//     console.log("Fall");
//   case 11:
//     console.log("Fall");
//   case 12:
//     console.log("Winter");
// }

// Leap Year Checker
