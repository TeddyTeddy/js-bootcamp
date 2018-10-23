class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio() {
        let bio = `${this.firstName} is ${this.age}.`
        this.likes.forEach((like) => { // arrow functions dont bind to THIS keyword
            bio += ` ${this.firstName} likes ${like}.`
        })
        return bio        
    }
    setName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]        
    }
}

const me = new Person('Andrew', 'Mead', 27, ['Biking', 'Teaching']) // returns a custom object type of person {}
me.setName('Alexis Turner')
// New operator does the following:
// 1. it generates a new empty object for this new instance
// 2. Then it gives us access to that empty object in the constructor
//    function via THIS keyword
// 3. It returns the object pointed by this to the caller

console.log(me.getBio())
console.log(me.location)

const person2 = new Person('Clancey', 'Turner', 51)
console.log(person2.getBio())
console.log(person2.location)