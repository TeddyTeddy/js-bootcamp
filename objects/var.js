var firstName = 'Andrew'
firstName = 'Mike' // we can reessing var's value

// The first thing we can do with VAR that we cant do
// with CONST and LET is that we can redeclare a variable
// that is already created, this is not desired
// in programs that are significant with variables
var firstName = 'Jen'
console.log(firstName)

// The next reason why we want to avoid VAR
// VAR is function scoped not block scoped (like LET and CONST)
// That means like if statements that have code blocks
// do not create a new scope when using VAR
if(true) {
    var surName = 'Cuzdan' // we dont have a function, we dont have a new scope
    // so surName is created in global scope
}
console.log(surName)

// I prefer working with BLOCK SCOPED VARIABLES
// as opposed to FUNCTION SCOPED VARIABLES
// because I am able to main control over my scope.
// For example, if i am in an if statement and i want 
// to perform some private calculation inside if statement
// i use LET or CONST variables that are specific that
// local scope

// VAR based variable are function scoped
const setName = function() {
    var xName = 'Jen'
}

setName()
console.log(xName) // ReferenceError: xName is not defined

