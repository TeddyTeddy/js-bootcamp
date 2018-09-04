const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

const findNote = function(notes, noteTitle) {
    return notes.find(function(note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase() // case insensitive search
    }) // if no match find() returns undefined
}

// const findNote = function(notes, noteTitle) {
//     const index = notes.findIndex(function(note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase() // case insensitive search
//     })
//     return notes[index] // if -1, returns undefined
// }

const note = findNote(notes, 'office modification') // case insensitive search
console.log(note)

// console.log(notes.length)
// console.log(notes)
// console.log('notes.indexOf({})', notes.indexOf({})) // -1, coz indexOf uses === operator
// console.log('notes.indexOf(notes[0])', notes.indexOf(notes[0])) // 0
// console.log('{} === {}', {} === {}) // false
// let someObject = {}
// let otherObject = someObject
// console.log('someObject === otherObject', someObject === otherObject) // true

// const index = notes.findIndex(function(note, index){
//     console.log(note)
//     return note.title === 'Habbits to work on'
// })
// console.log(index)

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


// console.log(notes.splice(1, 1)) // remove Note 2 and return ['Note 2']
// console.log(notes.splice(1, 0, 'This is the new second item')) // []
// console.log(notes)

// // replace note 3
// notes.splice(2,1, 'This is the new Note 3')
// console.log(notes)

// notes[1] = 'Note 2'
// notes[2] = 'Note 3'
// console.log(notes)


// notes.forEach(function( item, index ) {
//     console.log(index, item)
// })

// // Counting 1, 2, 3..
// // configuration details goes inside for paranthesis
// // the first is initializer
// // the second is a condition
// // the third is the final expression
// for(let count = 0; count < 3; ++count) { // count var is scoped locally!
//     console.log(`Counting ${count + 1}`)
// }

// for(let count = 2; count >= 0; --count) { // count var is scoped locally!
//     console.log(`Counting ${count + 1}`)
// }

// for(let count = 0; count < notes.length; ++count) {
//     console.log(notes[count])
// }

// for(let count = notes.length - 1; count >= 0; --count) {
//     console.log(notes[count])
// }

// console.log(notes.indexOf('Note 2')) // 1
// console.log(notes.indexOf('note 2')) // -1

