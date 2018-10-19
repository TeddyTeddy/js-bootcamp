// return todos from local storage if exist, if not, return an empty array
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos')
    try{
        return todosJSON ? JSON.parse(todosJSON) : []
    } catch(e) {
        // JSON.parse has thrown an exception because todos item is corrupted and 
        // not in JSON format anymore
        localStorage.setItem('todos', JSON.stringify([])) // fix the corrupted todos item in local storage
        return []
    }
}

// save todos to local storage
const saveTodos = todos => localStorage.setItem('todos', JSON.stringify(todos))


const generateTodoDOM = todo => {
    const divDOM = document.createElement('div')
    divDOM.setAttribute('id', todo.id)

    const checkboxDOM = document.createElement('input')
    checkboxDOM.setAttribute('type', 'checkbox')
    checkboxDOM.checked = todo.completed
    divDOM.appendChild(checkboxDOM)

    const spanDOM = document.createElement('span')
    spanDOM.textContent = todo.text
    divDOM.appendChild(spanDOM)

    const removeBtnDOM = document.createElement('button')
    removeBtnDOM.textContent = 'x'
    divDOM.appendChild(removeBtnDOM)

    return divDOM
}

const getIncompleTodosCount = todos => {
    let count = 0
    todos.forEach(todo => {
        if(!todo.completed) {
            ++count
        }
    })
    return count
}

const filterTodos = (todos, filters) => {
    return todos.filter( todo => {
        const includesSearchText = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideTodo = filters.hideCompleted && todo.completed
        return includesSearchText && !hideTodo
    })
}

const renderTodos = (todos, filters) => {
    const filteredTodos = filterTodos(todos, filters)

    const todosDOM = document.querySelector('#todos')
    todosDOM.innerHTML = ''

    // render 'You have x todos left' headline
    const h1DOM = document.createElement('h1')
    const count = getIncompleTodosCount(filteredTodos)
    h1DOM.textContent = `You have ${count} todo(s) left`
    todosDOM.appendChild(h1DOM)

    filteredTodos.forEach( todo => {
        const todoDOM = generateTodoDOM(todo)
        todosDOM.appendChild(todoDOM)
    })
}

// toggleTodo with target id with isChecked
const toggleTodo = (todos, targetId, isChecked) => {
    const todo = todos.find(todo => todo.id === targetId)
    if(todo) {
        todo.completed = isChecked
    } else {
        console.log(`Warning: todo with id ${targetId} is not found in todos array`)
    }
}

// removeTodo with targetId from todos array
const removeTodo = (todos, targetId) => {
    const index = todos.findIndex(todo => todo.id === targetId )
    if(index === -1) {
        console.log(`Warning: todo with id ${targetId} not found in todos array`)
    } else {
        todos.splice(index, 1) // remove the very todo which has a matching id from notes array
    }
}