const todos = ['Order cat food', 'Clean kitchen', 'Buy food', 'Do work', 'Exercise']
console.log(`You have ${todos.length} todos`)
console.log(`Todo: ${todos[0]}`)  // 'Todo 1'
console.log(`Todo: ${todos[todos.length - 2]}`) // 'Todo 4'


// Delete the 3.rd item
todos.splice(2, 1)
// Add a new item onto the end
todos.push('Buy coffee')
// Remove the first item from the list
todos.shift()

console.log(`You have ${todos.length} todos`)
console.log(todos)