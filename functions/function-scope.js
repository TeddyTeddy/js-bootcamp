// Global Scope (convertFahrenheitToCelsius, tempOne, tempTwo)
    // Local Scope(fahrenheit, celsius) --> Args of a function
    // also bound to that local scope
        // Local Scope (isFreezing)
let convertFahrenheitToCelsius = function(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5/9
    if(celsius <= 0) {
        let is Freezing = true
    }
    return celsius
}

let tempOne = convertFahrenheitToCelsius(32)
let tempTwo = convertFahrenheitToCelsius(68)

console.log(tempOne)
console.log(tempTwo)

// Functions create local scope much like if
// statements do
// Function arguments are bound to the newly
// created function scope