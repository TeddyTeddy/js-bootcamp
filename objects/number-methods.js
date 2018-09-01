let num = 103.941

console.log(num.toFixed(2)) // 103.94

// The Math.round() function returns the value of a number rounded to the nearest integer.
console.log(Math.round(num)) // 104
// The Math.floor() function returns the largest integer less than or equal to a given number.
console.log(Math.floor(num)) // 103
// The Math.ceil() function returns the smallest integer greater than or equal to a given number.
console.log(Math.ceil(num)) // 104

// random number in the range 0–1 (inclusive of 0, but not 1) 
// with approximately uniform distribution over that range
console.log(Math.random())

// Generating a code that is in [min, max] range
let min = 10
let max = 20
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

// CHALLENGE AREA
let makeGuess = function(guess) {
    let min = 1
    let max = 5
    let randomGuess = Math.floor(Math.random() * (max - min + 1)) + min
    console.log('randomGuess', randomGuess)
    return guess === randomGuess
}
console.log(makeGuess(1))
