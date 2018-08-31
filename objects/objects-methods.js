// inside a method we have access to 'this'
// 'this' references to the object the method
// is defined on
// 'this' keyword is a way to access object
// properties inside of a method
let restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function(partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function(partySize) {
        this.guestCount = this.guestCount + partySize
    },
    removeParty: function(partySize) {
        this.guestCount = this.guestCount - partySize
    }
}

// CHALLENGE AREA
restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4)) // false
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4)) // true

