// get saved todos from local storage
const getSavedTodos = function() {
    const todosJSON = localStorage.getItem('todos')
    if(todosJSON) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }
}

const saveTodos = function(todos) {
    localStorage.setItem('todos', JSON.stringify(todos))    
}

const getFilteredTodos = function(todos, filters) {
    const filteredTodos = todos.filter(function(todo) {
        const containsSearchText = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideTodo = filters.hideCompleted && todo.completed
        return containsSearchText && !hideTodo
    })
    return filteredTodos
}

const getIncompleteTodoCount = function(filteredTodos) {
    let count = 0
    filteredTodos.forEach(function(todo) {
        if(!todo.completed) {
            ++count
        }
    })
    return count
}

const generateSummaryDOM = function(count) {
    const summaryDOM = document.createElement('h2')
    summaryDOM.textContent = `You have ${count} todo(s) left`
    return summaryDOM
}

const generateTodoDOM = function(todo) {
    const todoDOM = document.createElement('div')
    // set id attribute as todo's id, this will be used later
    todoDOM.setAttribute('id', todo.id)
    // create & set the checkbox
    const checkboxDOM = document.createElement('input')
    checkboxDOM.setAttribute('type', 'checkbox')
    checkboxDOM.checked = todo.completed
    todoDOM.appendChild(checkboxDOM)

    // create & set a span for todo's content
    const spanDOM = document.createElement('span')
    spanDOM.textContent = todo.text
    todoDOM.appendChild(spanDOM)

    // create & set a delete button
    const deleteBtnDOM = document.createElement('button')
    deleteBtnDOM.textContent = 'x'
    todoDOM.appendChild(deleteBtnDOM)
    
    return todoDOM
}

// render todos
const renderTodos = function(todos, filters) {
    // get filtered todos, case insensitive filtering
    const filteredTodos = getFilteredTodos(todos, filters)
    // render 'You have 2 todos left'
    const count = getIncompleteTodoCount(filteredTodos)

    // clear old summary
    document.querySelector('#todos').innerHTML = ''
    const summaryDOM = generateSummaryDOM(count)
    document.querySelector('#todos').appendChild(summaryDOM)

    // Render filtered todos
    filteredTodos.forEach(function(todo) {
        const todoDOM = generateTodoDOM(todo)
        document.querySelector('#todos').appendChild(todoDOM)
    })    
}

const removeTodo = function(todos, id) {
    todos.remove(function(todo) {
        return todo.id === id
    })
}

const toggleTodo = function(todos, targetID) {
    todo = todos.find(function(todo) { // uses sugar library's find method!
        return todo.id === targetID
    }) // returns a reference from todos array, not a copy
    todo.completed = todo.completed ? false : true
}