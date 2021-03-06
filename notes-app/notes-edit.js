'use strict'

document.addEventListener('DOMContentLoaded', runNotesEdit)

function runNotesEdit() {
    const noteTitleDOM = document.querySelector('#note-title')
    const noteBodyDOM = document.querySelector('#note-body')
    const removeButtonDOM = document.querySelector('#remove-note')
    const lastEditedDOM = document.querySelector('#last-edited')
    
    let noteId, notes, note
    
    const init = function() {
        noteId = location.hash.substring(1)
        notes = Engine.getSavedNotes()
        note = notes.find( note => note.id === noteId )
        
        // if note is not found, redirect to main page
        if(!note) {
            location.assign('index.html')
        }
        
        // note is found, show the note's contents in UI
        noteTitleDOM.value = note.title
        noteBodyDOM.value = note.body
        // update the last edited text in ui
        lastEditedDOM.textContent = Engine.generatedLastEditedText(note.updatedAt)
    }
    
    init()
    
    // updating the note title functionality
    noteTitleDOM.addEventListener('input', e => {
        // update the note.title with the value from ui
        note.title = e.target.value // note obj is a reference in notes array!
        // update the updatedAt property for the note
        note.updatedAt = moment().valueOf()
        // update the last edited text in ui    
        lastEditedDOM.textContent = Engine.generatedLastEditedText(note.updatedAt)
        Engine.saveNotes(notes) // to local storage
    })
    
    // updating the note body functionality
    noteBodyDOM.addEventListener('input', e => {
        // update the note body with the value from ui
        note.body = e.target.value // note obj is a reference in notes array!
        // update the updatedAt property for the note
        note.updatedAt = moment().valueOf()
        // update the last edited text in ui
        lastEditedDOM.textContent = Engine.generatedLastEditedText(note.updatedAt)
        Engine.saveNotes(notes) // to local storage
    })
    
    // removing the note functionality
    removeButtonDOM.addEventListener('click', e => {
        // remove the note from notes array
        Engine.removeNote(notes, note.id)
        Engine.saveNotes(notes) // to local storage
        // redirect to home page
        location.assign('index.html')
    })
    
    // listen for changes in local storage
    window.addEventListener('storage', e => {
        if((e.key === 'notes') || (!localStorage.getItem('notes'))) { 
            // act only if notes item is modified/deleted in localStorage
            init()
        } 
    })    
}
