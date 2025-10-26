// Basic AND Operator
let isMember = true;
let cartTotal = 60;

let canCheckout = isMember && cartTotal >= 50;

console.log(canCheckout);

// OR Operator
let paymentMethod = "cash";

let final = paymentMethod === "credit" || paymentMethod === "debit";

console.log(final); // Would be false cause paymentMethod is not strictly equal to "credit" and "debit" also
// So false || false gives false

// NOT Operator
let isLoggedIn = true;
let isnotLoggedIn = !isLoggedIn;

console.log(isnotLoggedIn);

// Combined Conditions
let age = 20;
let hasLicense = true;

let isPossible = hasLicense && age >= 18;

console.log(isPossible);

// Short-Circuit Evaluation
let username = "Cat"; // it's going to use defaultName sine username is empty
let defaultName = "Dog";

let displayName = username || defaultName;

console.log(displayName);

// Range Check
let temperature = 25;
let finalTemperature = temperature >= 20 && temperature <= 30;

console.log(finalTemperature);

// Truthy/Falsy Check
// let userInput;
// let finaluserInput = userInput === "" || userInput || userInput === "null";

// console.log(finaluserInput);

// Complex Logic
let isAdmin = true;
let accessLevel = 4;
let isBanned = false;

let userResult = (isAdmin || accessLevel > 3) && isBanned;

console.log(userResult);

// Operator Precedence
let a = true;
let b = false;
let c = true;

let result1 = (a || b) && c; // (a || b) gives true since one operand is true so final result will be true since both final operands are now true
let result2 = a || (b && c);
// (b && c) gives false bacause the two operands are not true so final result will be true cause one of the final operand is true

console.log(result1);
console.log(result2);

// Real-World Discount Rule
let isSeniorCitizen = true;
let isStudent = false;
let regularPrice = 90;

let customerQualifies = (isSeniorCitizen || isStudent) && regularPrice > 100;

console.log(customerQualifies);
