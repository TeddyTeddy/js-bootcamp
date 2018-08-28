// 1. U cant define a variable more than once
let petName = 'Mylo' 
// let petName = 'Spot' // invalid JS, you cant define a variable
// you already defined
petName = 'Spot'
console.log(petName)

// 2. There are rules regarding variable names
// variables start with letters a-z or _ or $
// variable names must only include a-z or _ or $
let test_ = 2
let $result = 3 + 4

// variable names cannot be reserved keywords (i.e. let, const etc)
// let let = 2 // invalid