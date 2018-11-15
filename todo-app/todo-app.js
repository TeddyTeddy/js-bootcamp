document.addEventListener('DOMContentLoaded', runTodoApp)

function runTodoApp() {
    const filters = {
        searchText: ''
    }

    let todos = Engine.getSavedTodos() // from local storage
    
    Engine.renderTodos(todos, filters)
    
    // filter todos
    document.querySelector('#filter-todos').addEventListener('input', e => {
        filters.searchText = e.target.value
        Engine.renderTodos(todos, filters)
    })
    
    // hide completed
    document.querySelector('#hide-completed').addEventListener('change', e => {
        filters.hideCompleted = e.target.checked
        Engine.renderTodos(todos, filters)
    })
    
    // add new todo
    document.querySelector('#new-todo').addEventListener('submit', e => {
        e.preventDefault()
        const todoText = e.target.elements.newTodoText.value
        if(todoText.length) {
            todos.push({
                id: uuidv4(),
                text: todoText,
                completed: false
            })
            Engine.saveTodos(todos) // to local storage
            Engine.renderTodos(todos, filters)
            e.target.elements.newTodoText.value = '' // clear the input field newTodoText
        }
    })
    
    // todo checkbox checked/unchecked : todo marked as done/undone : utilizing the event bubling
    document.querySelector('#todos').addEventListener('change', e => {
        if(e.target.tagName === 'INPUT') { // act only if event is coming from checkbox
            const targetId = e.target.parentElement.getAttribute('id')
            const isChecked = e.target.checked
            Engine.toggleTodo(todos, targetId, isChecked)
            Engine.saveTodos(todos) // to local storage
            Engine.renderTodos(todos, filters)
        }
    })
    
    // removing a todo functionality utilizing event bubling
    document.querySelector('#todos').addEventListener('click', e => {
        if(e.target.tagName === 'BUTTON') { // act only if the click event is coming from the button itself
            const targetId = e.target.parentElement.getAttribute('id')
            Engine.removeTodo(todos, targetId)
            Engine.saveTodos(todos) // to local storage
            Engine.renderTodos(todos, filters)
        }
    })
    
    // local storage changed event
    window.addEventListener('storage', e => {
        if((e.key === 'todos') || (!localStorage.getItem('todos'))) { // act only if todos item is changed in local storage
            todos = Engine.getSavedTodos()
            Engine.renderTodos(todos, filters)
        }
    })
}
