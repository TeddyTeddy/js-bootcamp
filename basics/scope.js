// The scope of variable defines where it is accessible in
// your program based off of where it was created

// JS uses Lexical Scoping (static scope)
// the idea is that a variable defined in one part of your 
// program might not be accessible everywhere else in the program
// The context in which the variable is defined
// and used comes into play

// A BROKEN EXAMPLE
// Global scope - Defined outside of all code blocks
// Local scope - Defined inside a code block

// RULE:
// In a scope you can access variable in that scope
// or in any parent/ancestor scope

// Global Scope (varOne)
  // Local Scope (varTwo)

let varOne = 'varOne' // global variable

if(true) { // code block
    console.log(varOne)
    let varTwo = 'varTwo' // a local variable
    console.log(varTwo)
}

console.log(varTwo)

// JS uses LEXICAL SCOPING, which limits the usage of a variable
// based on where the variable is defined.
// In order to understand the LEXICAL SCOPING in JS, we need to learn about
// CODE BLOCK -> LOCAL SCOPE -> GLOBAL SCOPE and SCOPE TREE
// A CODE BLOCK is created by {}, and it forms automatically a local scope,
// A LOCAL SCOPE is an area in the program designated by {}, in which
// we can define variables with const/let keywords. Variables defined in local scope are called
// LOCAL VARIABLEs.
// In the example above we have 'varTwo' as the local variable
// A GLOBAL SCOPE is an area in the program, which is defined outside of all
// CODE BLOCKS (i.e. LOCAL SCOPES)
// Variables defined in GLOBAL SCOPE are called GLOBAL VARIABLES
// GLOBAL SCOPE is the parent of all LOCAL SCOPES in your program
// And scopes form a SCOPE TREE. In the above example, we have the following
// scope tree:
// Global Scope (varOne : Global Variable)
//     Local Scope (varTwo : Local variable)
// Now, LEXICAL SCOPING (Sozcuk kapsami) states that
// in a scope, variables (with const/let) defined in that scope is accessible as well as 
// all the parent/ancestor scopes' variables
// That's why line 26 work (i.e. varTwo is accessible in the local scope only)
// and line 29 won't (i.e. line 29 is in global scope, which only has varOne )


// Global Scope (varOne)
  // Local Scope (varTwo)
    // Local Scope (varFour)
  // Local Scope (varThree)
let varOne = 'varOne' // global variable

if(true) { // code block
    console.log(varOne)
    let varTwo = 'varTwo' // a local variable
    console.log(varTwo)
    if(true) {
        let varFour = 'varFour'
    }
}

if(true) {
    let varThree = 'varThree'
}

console.log(varTwo)