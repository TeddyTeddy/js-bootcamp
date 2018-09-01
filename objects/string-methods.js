let name = '  Andrew Mead  ' // length = 11
// string length property
console.log(name.length)

// convert to upper case
console.log(name.toUpperCase())

// convert to lower case
console.log(name.toLowerCase())

// Includes method
let password = 'abc123password098'
console.log(password.includes('password'))

// Trim
console.log(name.trim())

// CHALLENGE AREA
let isValidPassword = function(password) {
    return password.length > 8 && !password.includes('password')
}

console.log('isValidPassword("asdfp")', isValidPassword('asdfp'))
console.log('isValidPassword("abc123!@#$%^&")', isValidPassword('abc123!@#$%^&'))
console.log('isValidPassword("asdfpasdfpoijpassword")', isValidPassword('asdfpasdfpoijpassword'))