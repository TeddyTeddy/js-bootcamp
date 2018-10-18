const add5 = function(a, b) {
    console.log(arguments) // arguments as local variable
    return arguments[0] + arguments[1]
}

const add6 = (a, b) => {
    // 'arguments' is not bound to arrow function
    console.log(arguments) // arguments as local variable does not exist
    return arguments[0] + arguments[1]
}

console.log(add5(11, 22, 33, 44))
// console.log(add6(11, 22, 33, 44))

const car = {
    color: 'red',
    getSummary : () => {
        console.log(this) // in the browser, it will print the window object
        return `The car is ${this.color}`
    }
}
console.log(car.getSummary())

const car2 = {
    color: 'red',
    getSummary() {
        return `The car 2 is ${this.color}`
    }
}

console.log(car2.getSummary())