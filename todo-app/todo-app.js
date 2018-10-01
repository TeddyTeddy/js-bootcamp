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
    searchText: '',
    hideCompleted: false
}

const renderTodos = function(todos, filters) {
    // get filtered todos, case insensitive filtering
    const filteredTodos = todos.filter(function(todo) {
        const containsSearchText = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideTodo = filters.hideCompleted && todo.completed 
        return containsSearchText && !hideTodo
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

// listen for keystorekes in #search-tex input element
document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#new-todo').addEventListener('submit', function(e) { 
    e.preventDefault()
    todos.push({
        text: e.target.elements.newTodoInput.value,
        completed: false
    })
    renderTodos(todos, filters)
    e.target.elements.newTodoInput.value = ''
})

// 1. Add a checkbox with Hide Completed, the default value false
// 2. Add filters.hideCompleted as default value false
// 3. Listen for the checkbox change event
//     - Update filters.hideCompleted with the value from the checkbox
//     - call RenderTodos() with the updated filters
// 4. Update renderTodos function to use filters.hideCompleted
document.querySelector('#hide-completed').addEventListener('change', function(e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})