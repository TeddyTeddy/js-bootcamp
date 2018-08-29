let temp = 155

// Logical AND operator
if(temp >= 60 && temp <= 90) {
    console.log('It is pretty nice out')
} else if(temp <= 0 || temp >= 120) { // OR operator
    console.log('Dont go outside')
} else {
    console.log('Do what you want')
}

// Challange area
let isGuestOneVegan = false
let isGuestTwoVegan = false

if(isGuestOneVegan && isGuestTwoVegan) { // both vegan
    console.log('Offer only vegan dishes')
} else if(isGuestOneVegan || isGuestTwoVegan) {// only one vegan
    console.log('Offer vegan + non vegan dishes')
} else { // neither of are vegan
    console.log('Offer up anything on the menu')
}

