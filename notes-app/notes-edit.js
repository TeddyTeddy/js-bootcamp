Sugar.extend(); // To use Sugar's Array functions on native objects (i.e. Array)

const noteTitleDOM = document.querySelector('#note-title')
const noteBodyDOM = document.querySelector('#note-body')
const removeButtonDOM = document.querySelector('#remove-note')

const noteId = location.hash.substring(1)
const notes = getSavedNotes()
const note = notes.find(function(note) {
    return note.id === noteId
})

// if note is not found, redirect to main page
if(!note) {
    location.assign('/index.html')
}

// note is found, show the note's contents in UI
noteTitleDOM.value = note.title
noteBodyDOM.value = note.body

// updating the note title functionality
noteTitleDOM.addEventListener('input', function(e) {
    // update the note.title with the value from ui
    note.title = e.target.value // note obj is a reference in notes array!
    saveNotes(notes) // to local storage
})

// updating the note body functionality
noteBodyDOM.addEventListener('input', function(e) {
    // update the note body with the value from ui
    note.body = e.target.value // note obj is a reference in notes array!
    saveNotes(notes) // to local storage
})

// removing the note functionality
removeButtonDOM.addEventListener('click', function(e) {
    // remove the note from notes array
    removeNote(notes, note.id)
    saveNotes(notes) // to local storage
    // redirect to home page
    location.assign('/index.html')
})
