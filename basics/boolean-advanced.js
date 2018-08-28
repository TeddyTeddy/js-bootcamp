let isAccountLocked = false
let userRole = 'admin'

if(isAccountLocked) { // code block 
    console.log('account is locked')
} else if(userRole === 'admin') { // code block 
    console.log('Wellcome Admin')
} else { // code block 
    console.log('Wellcome')
}

// CHALLENGE
let temp = 110
if( temp <= 32) {
    console.log('Its freezing outside')
} else if(temp >= 110) {
    console.log('Its hot outside')
} else {
    console.log('It is pretty nice')
}