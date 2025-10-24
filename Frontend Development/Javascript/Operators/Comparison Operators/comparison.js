// Loose Equality with Mixed Types
let x = 10
let y = "10"

console.log(x == y)

// Strict Equality with Strings and Numbers
let a = 5
let b = "5"

console.log(a === b)

// Null vs Undefined Comparison
let value1 = null
let value2;

console.log(value1 == value2)

// Boolean vs Numeric Equality
let isActive  = true
let statusCode = 1

console.log(isActive === statusCode)

// String Alphabetical Order
let fruit1  = "mango"
let fruit2 = "apple"

console.log(fruit1 > fruit2)

// Object Reference Check
let obj1 = {
    id: 1
}

let obj2 = {
    id: 1
}

console.log(obj1 === obj2)

// Array vs String Coercion
let list = [1, 2, 3]
let text = "1, 2, 3"

console.log(list == text)

// NaN Equality Test

// Mixed-Type Greater-Than Check
let price = "20"
let discount = 15

console.log(price >= discount)

// Not Equal Operator
let age = "25"
let years = 25

console.log(age != years)