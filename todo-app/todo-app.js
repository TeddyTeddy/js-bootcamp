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

// You have 2 todos left
let count = 0
todos.forEach(function(todo) {
    if(!todo.completed) {
        ++count
    }
})
const summary = document.createElement('h2')
summary.textContent = `You have ${count} todo(s) left`
document.querySelector('body').appendChild(summary)

// Add a p for each todo above (use text value)
todos.forEach(function(todo) {
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('body').appendChild(p)
})

// listen for new todo creation
document.querySelector('#add-todo').addEventListener('click', function(e) {
    e.target.textContent = 'button clicked'
})

// listen for keystorekes in #new-todo-text input element
document.querySelector('#new-todo-text').addEventListener('input', function(e) {
    console.log(e.target.value)
})