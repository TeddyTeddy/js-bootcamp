Sugar.extend() // To use Sugar's Array functions on native objects (i.e. Array)
const todos = getSavedTodos()

const filters = {
    searchText: '',
    hideCompleted: false
}

renderTodos(todos, filters)

// listen for keystorekes in #search-tex input element
document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

// adding a new todo functionality
document.querySelector('#new-todo').addEventListener('submit', function(e) { 
    e.preventDefault()
    todos.push({
        id: uuidv4(),
        text: e.target.elements.newTodoInput.value,
        completed: false
    })
    saveTodos(todos) // to local storage
    renderTodos(todos, filters)
    e.target.elements.newTodoInput.value = ''
})

// hide completed todos functionality
document.querySelector('#hide-completed').addEventListener('change', function(e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})

// removing a todo functionality
document.querySelector('#todos').addEventListener('click', function(e) {
    if(e.target.tagName === 'BUTTON') { // check if the event is coming from delete button itself
        // get from parent div element the id of todo
        const targetID = e.target.parentElement.getAttribute('id')
        // remove the todo with the id from todos array
        removeTodo(todos, targetID)
        saveTodos(todos) // to local storage
        renderTodos(todos, filters)
    }
})

// mark todo as done/undone functionality
document.querySelector('#todos').addEventListener('change', function(e) {
    if(e.target.tagName === 'INPUT') { // act only if checkbox is checked or unchecked
        const targetID = e.target.parentElement.getAttribute('id')
        toggleTodo(todos, targetID)
        saveTodos(todos) // to local storage
    }
})
    

