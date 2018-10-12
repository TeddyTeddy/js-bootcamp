// read existing notes from local storage
const getSavedNotes = function() {
    const notesJSON = localStorage.getItem('notes')
    if(notesJSON) {
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}

// save the notes to local storage
const saveNotes = function(notes) {
    localStorage.setItem('notes', JSON.stringify(notes))
}
// generate DOM structure for a note
const generateNoteDOM = function(note) {
    const noteEl = document.createElement('div')
    // set id of noteEl to note.uuid, this will be used in deleting the note
    noteEl.setAttribute('id', note.id)

    // setup the remove note button
    const buttonEl = document.createElement('button')
    buttonEl.textContent = 'x'

    const anchorEl = document.createElement('a')
    anchorEl.setAttribute('href', `/edit.html#${note.id}`)
    // setup the note title text
    if(note.title.length > 0) {
        anchorEl.textContent = note.title
    } else {
        anchorEl.textContent = 'Unnamed note'
    }

    noteEl.appendChild(buttonEl)
    noteEl.appendChild(anchorEl)
    return noteEl    
}

// render application notes
const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function(note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    document.querySelector('#notes').innerHTML = ''
    filteredNotes.forEach(function(note) {
        const noteEl = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteEl)
    })
}

const removeNote = function(notes, id) {
    // sugar.js, remove the object from notes array of objects matching the uuid
    notes.remove(function(note) { 
        return note.id === id 
    });
}