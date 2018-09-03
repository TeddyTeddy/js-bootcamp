const notes = ['Note 1', 'Note 2', 'Note 3']

// console.log(notes.length)
// console.log(notes[0]) // 'Note 1'
// console.log(notes[2]) // 'Note 3'
// console.log(notes[34]) // undefined
// console.log(notes[notes.length-1]) // 'Note 3'

// notes.push('My new note') // adds a new item to the end
// console.log(notes.length)
// console.log(notes) // [ 'Note 1', 'Note 2', 'Note 3', 'My new note' ]

// console.log(notes.pop())  // removes an item from the end
// console.log(notes) // [ 'Note 1', 'Note 2', 'Note 3' ]

// console.log(notes.shift()) // removes the first item from the array and returns it
// console.log(notes) // [ 'Note 2', 'Note 3' ]

// notes.unshift('My first note')
// console.log(notes) // [ 'My first note', 'Note 2', 'Note 3' ]


console.log(notes.splice(1, 1)) // remove Note 2 and return ['Note 2']
console.log(notes.splice(1, 0, 'This is the new second item')) // []
console.log(notes)

// replace note 3
notes.splice(2,1, 'This is the new Note 3')
console.log(notes)

notes[1] = 'Note 2'
notes[2] = 'Note 3'
console.log(notes)


notes.forEach(function( item, index ) {
    console.log(index, item)
})

// Counting 1, 2, 3..
// configuration details goes inside for paranthesis
// the first is initializer
// the second is a condition
// the third is the final expression
for(let count = 0; count < 3; ++count) { // count var is scoped locally!
    console.log(`Counting ${count + 1}`)
}

for(let count = 2; count >= 0; --count) { // count var is scoped locally!
    console.log(`Counting ${count + 1}`)
}

for(let count = 0; count < notes.length; ++count) {
    console.log(notes[count])
}

for(let count = notes.length - 1; count >= 0; --count) {
    console.log(notes[count])
}