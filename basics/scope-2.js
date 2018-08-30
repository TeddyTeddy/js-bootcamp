// REMEMBER: You can't define a variable twice
// in the SAME scope, but if the variable is in 
// different scope, that is ok (with const and let)

// VARIABLE SHADOWING: A variable in a local scope
// uses its value instead of variable with the same name in a parent's scope.

// Global (name=Andrew)
  // local (name=Mike)
    //local
  // local

let name = 'Andrew'
if(true) {
    let name = 'Mike'
    if(true) {
     name = 'Jen' // when you assign values to variables
     // it is important to take lexical scoping into considiration.
     console.log(name) // Jen showing up. Variable shadowing
    } 
}

if(true) {
    console.log(name) // Andrew
}

// Leaked Global Example!
// Always use 'let' when you declared a variable
// Global (surname = Jen)
  // local 
    //local
  // local

if(true) {
    if(true) {
     surname = 'Crawford' // when you assign values to variables
     // it is important to take lexical scoping into considiration.
     console.log(surname) // Jen showing up. Variable shadowing
    } 
}

if(true) {
    console.log(surname)
}
