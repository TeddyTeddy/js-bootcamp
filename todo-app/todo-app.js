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

// 1. create a div containing all todos
// 2. Render inside the div, not in the body
// 3. create renderTodos function, taking in notes and filters as args
// 4. call renderTodos
// 5. at input event, update the filter and renderTodos with the new filter

const filters = {
    searchText: ''
}

const renderTodos = function(todos, filters) {
    // get filtered todos, case insensitive filtering
    const filteredTodos = todos.filter(function(todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    // render 'You have 2 todos left'
    let count = 0
    filteredTodos.forEach(function(todo) {
        if(!todo.completed) {
            ++count
        }
    })

    // clear old summary
    document.querySelector('#todos').innerHTML = ''

    const summary = document.createElement('h2')
    summary.textContent = `You have ${count} todo(s) left`   
    document.querySelector('#todos').appendChild(summary)

    // Render filtered todos
    filteredTodos.forEach(function(todo) {
        const p = document.createElement('p')
        p.textContent = todo.text
        document.querySelector('#todos').appendChild(p)
    })    
}

renderTodos(todos, filters)

// listen for new todo creation
document.querySelector('#add-todo').addEventListener('click', function(e) {
    e.target.textContent = 'button clicked'
})

document.querySelector('#new-todo-text').addEventListener('input', function(e) {
    console.log(e.target.value)
})

// listen for keystorekes in #search-tex input element
document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})