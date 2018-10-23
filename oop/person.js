// myPerson --> Person.prototype --> Object.prototype --> null

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

// me --> Employee.prototype --> Person.prototype --> Object.prototype --> null
class Employee extends Person {
    constructor(firstName, lastName, age, position, likes) {
        super(firstName, lastName, age, likes)
        this.position = position
    }
    getBio() {
        // Andrew is a teacher
        return `${this.firstName} ${this.lastName} is a ${this.position}`
    }
    getYearsLeft() {
        return 65 - this.age
    }
}

// myStudent --> Student.prototype --> Person.prototype --> Object.Prototype --> null
class Student extends Person {
    constructor(firstName, lastName, age, likes, grade)  {
        if((typeof grade !== 'number') || (grade < 0) || (grade > 100)) {
            throw Error('"grade" argument must be a number between 0 and 100')
        }
        super(firstName, lastName, age, likes)
        this.grade = grade
    }
    getBio() {
        const status = (this.grade >= 70) ? 'passing' : 'failing'
        return `${this.firstName} is ${status} the course`
    }
    updateGrade(delta) {
        this.grade += delta
        if(this.grade < 0) {
            this.grade = 0
        } else if(this.grade > 100) {
            this.grade = 100
        }
    }
}

const myStudent = new Student('Andrew', 'Mead', 27, ['teaching'], 90)
console.log(myStudent.getBio())
myStudent.updateGrade(-40)
console.log(myStudent.getBio())