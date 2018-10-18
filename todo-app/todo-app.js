document.addEventListener('DOMContentLoaded', runTodoApp)

function runTodoApp() {
    const filters = {
        searchText: ''
    }
    
    let todos = getSavedTodos() // from local storage
    
    renderTodos(todos, filters)
    
    // filter todos
    document.querySelector('#filter-todos').addEventListener('input', e => {
        filters.searchText = e.target.value
        renderTodos(todos, filters)
    })
    
    // hide completed
    document.querySelector('#hide-completed').addEventListener('change', e => {
        filters.hideCompleted = e.target.checked
        renderTodos(todos, filters)
    })
    
    // add new todo
    document.querySelector('#new-todo').addEventListener('submit', e => {
        e.preventDefault()
        const todoText = e.target.elements.newTodoText.value
        if(todoText.length > 0) {
            todos.push({
                id: uuidv4(),
                text: todoText,
                completed: false
            })
            saveTodos(todos) // to local storage
            renderTodos(todos, filters)
            e.target.elements.newTodoText.value = '' // clear the input field newTodoText
        }
    })
    
    // todo checkbox checked/unchecked : todo marked as done/undone
    document.querySelector('#todos').addEventListener('change', e => {
        if(e.target.tagName === 'INPUT') { // act only if event is coming from checkbox
            const targetId = e.target.parentElement.getAttribute('id')
            const isChecked = e.target.checked
            toggleTodo(todos, targetId, isChecked)
            saveTodos(todos) // to local storage
            renderTodos(todos, filters)
        }
    })
    
    // removing a todo functionality
    document.querySelector('#todos').addEventListener('click', e => {
        if(e.target.tagName === 'BUTTON') { // act only if the click event is coming from the button itself
            const targetId = e.target.parentElement.getAttribute('id')
            removeTodo(todos, targetId)
            saveTodos(todos) // to local storage
            renderTodos(todos, filters)
        }
    })
    
    // local storage changed event
    window.addEventListener('storage', e => {
        if((e.key === 'todos') || (localStorage.getItem('todos') === null)) { // act only if todos item is changed in local storage
            todos = getSavedTodos()
            renderTodos(todos, filters)
        }
    })
}
