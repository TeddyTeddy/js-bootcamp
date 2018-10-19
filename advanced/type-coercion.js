// Type coercion - the result of type coercion will be a string, a number or a boolean
console.log('5' + 5) // string '55'
console.log('5' - 5) // number 0

// == operator (loose equality operator) does not take type into account:
// that means 
console.log('5' == 5) // true, tries to coerce these two values into the same type
// === operator (strict equality operator) does take type into account
console.log('5' === 5) // types do not match, returns false

console.log(typeof 123) // number
console.log(typeof {})  // object

const value = true + 12
const type = typeof value
console.log(type) // number
console.log(value) // 13
