let name  // undefined implicity set for name variable
name = 'Jen'
if(name === undefined) {
    console.log('Please provide a name')
} else {
    console.log(name)
}

// undefined for function arguments
// when an argument is not provided but it is named
// in the function definition, undefined is assigned
// as its value
let square = function(num) { 
    console.log(num)
}

// the default return value for a function
// that does not return anything is 'undefined'
let result = square() // num = undefined
console.log(result)   // undefined as function default return value

// When we see UNDEFINED, we know it is assigned by JS language
// itself, when we see NULL, we know it is assigned by
// the programmer himself
let age = 27
age = null // null assigned values
console.log(age)