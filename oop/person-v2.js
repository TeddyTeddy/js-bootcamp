// myPerson --> Person.prototype --> Object.prototype --> null
// class Person
function Person(firstName, lastName, age, likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
}

Person.prototype.getBio = function() {
    let bio = `${this.firstName} is ${this.age}.`
    this.likes.forEach((like) => { // arrow functions dont bind to THIS keyword
        bio += ` ${this.firstName} likes ${like}.`
    })
    return bio        
}

Person.prototype.setFullName = function(fullName) {
    const names = fullName.split(' ')
    this.firstName = names[0] // Clancey
    this.lastName = names[1]  // Turner      
}

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`
}

// me --> Employee.prototype --> Person.prototype --> Object.prototype --> null
// class Employee
function Employee(position, ...args) {
    Person.apply(this, args)
    this.position = position
}

Employee.prototype = Object.create(Person.prototype)

Employee.prototype.getBio = function() {
    // Andrew Mead is a teacher
    return `${this.getFullName()} is a ${this.position}`
}

Employee.prototype.getYearsLeft = function() {
    return 65 - this.age
}

// myStudent --> Student.prototype --> Person.prototype --> Object.Prototype --> null
function Student(grade, ...args )  {
    if((typeof grade !== 'number') || (grade < 0) || (grade > 100)) {
            throw Error('"grade" argument must be a number between 0 and 100')
    }
    Person.apply(this, args)
    this.grade = grade
}

Student.prototype = Object.create(Person.prototype)

Student.prototype.getBio = function() {
    // Andrew Mead has passed the course
    const status = (this.grade >= 70) ? 'passing' : 'failing'
    return `${this.getFullName()} is ${status} the course`
}
    
Student.prototype.updateGrade = function(delta) {
    this.grade += delta
    if(this.grade < 0) {
        this.grade = 0
    } else if(this.grade > 100) {
        this.grade = 100
    }
}

const me = new Employee('teacher', 'Andrew', 'Mead', 27, ['biking'])
me.setFullName('Clancey Turner')
console.log(me.getBio())

const myStudent = new Student(90, 'John', 'Johnson', 40, ['reading'])
console.log(myStudent.getBio())
myStudent.updateGrade(-40)
console.log(myStudent.getBio())