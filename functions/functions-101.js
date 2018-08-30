// function - input (arguments), code, output (return value)
let greetUser = function() {
    console.log('Wellcome user!')
}

greetUser()
greetUser()
greetUser()

let square = function(num) {
    let result = num * num
    return result
}

let value = square(3)
let otherValue = square(10)
console.log(value)
console.log(otherValue)

// CHALLENGE AREA
let convertFahrenheitToCelsius = function(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5/9
    return celsius
}

console.log(convertFahrenheitToCelsius(32))
console.log(convertFahrenheitToCelsius(68))