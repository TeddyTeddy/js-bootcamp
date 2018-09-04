const todos = [{
    text: 'Order cat food',
    completed: true
}, {
    text: 'Clean kitchen',
    completed: false
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}]

const sortTodos = function(todos) {
    todos.sort(function(a, b) {
        if(!a.completed && b.completed) {
            return -1 // a < b
        } else if(!b.completed && a.completed) {
            return 1 // b < a
        } else {
            return 0 // a === b
        }
    })
}

sortTodos(todos)
console.log(todos)


const deleteTodo = function(todos, todoText) {
    const index = todos.findIndex(function(todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })
    if(index !== -1) {
        todos.splice(index, 1) // remove the note that matches the todoText
    }
}

const getThingsTodo = function(todos) {
    return todos.filter(function(todo) {
        return !todo.completed
    })
}

console.log(getThingsTodo(todos))

// deleteTodo(todos, 'buy food!')
// console.log(todos)


// const todos = ['Order cat food', 'Clean kitchen', 'Buy food', 'Do work', 'Exercise']

// console.log(`You have ${todos.length} todos`)
// console.log(`Todo: ${todos[0]}`)  // 'Todo 1'
// console.log(`Todo: ${todos[todos.length - 2]}`) // 'Todo 4'


// // Delete the 3.rd item
// todos.splice(2, 1)
// // Add a new item onto the end
// todos.push('Buy coffee')
// // Remove the first item from the list
// todos.shift()

// console.log(`You have ${todos.length} todos`)
// console.log(todos)

// // CHALLENGE AREA
// todos.forEach(function(todo, index) {
//     console.log(`${index+1}. ${todo}`)
// })

// // CHALLANGE AREA
// for(let index = 0; index < todos.length; ++index) {
//     console.log(`${index+1}. ${todos[index]}`)
// }