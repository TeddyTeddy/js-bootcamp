let todos = []
const todosJSON = localStorage.getItem('todos')
if(todosJSON) {
    todos = JSON.parse(todosJSON)
}

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
    localStorage.setItem('todos', JSON.stringify(todos))
    renderTodos(todos, filters)
    e.target.elements.newTodoInput.value = ''
})

document.querySelector('#hide-completed').addEventListener('change', function(e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})