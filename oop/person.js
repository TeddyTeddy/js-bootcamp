const Person = function(firstName, lastName, age) { // construction function
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
}

const me = new Person('Andrew', 'Mead', 27) // returns a custom object type of person {}

// New operator does the following:
// 1. it generates a new empty object for this new instance
// 2. Then it gives us uses to that empty object in the constructor
//    function via THIS keyword
// 3. It returns the object pointed by this to the caller

console.log(me)

const person2 = new Person('Clancey', 'Turner', 51)
console.log(person2)