// === - equality operator
// !=== - not equality operator
// < - less than operator
// > - greater than operator
// <= - less then or equal to
// >= - greater than or equal to
let temp = 110
let isFreezing = (temp <= 32)
console.log(isFreezing)

// if: flow control
if(isFreezing){ // code block
    console.log('it is freezing outside')
}

if(temp >= 110) {
    console.log('it is way too hot outside')
}

// CHALLENGE
// under <= 7 & over >= 65 gets discount
let age = 40
let isChild = age <= 7
let isSenior = age >= 65
console.log('age', age)
console.log('isChild', isChild)
console.log('isSenior', isSenior)

// CHALLENGE
if(age <= 7) {
    console.log('Child discount 10%')
}

if(isSenior) {
    console.log('Senior discount %30')
}

