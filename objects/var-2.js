var age
console.log(age) // undefined

// what happens if we try to access to a VAR variable
// before it is declared?
console.log(name)  // undefined
var name  = 'Hakan' // when we declare a variable via VAR keyword
// its DECLERATION (only) gets HOISTED to the top of the program
// so line 6 & 7 is translated to the following code by JS
// var name
// console.log(name)
// name = 'Hakan'

surname = 'Cuzdan'
console.log(surname) // Cuzdan
var surname