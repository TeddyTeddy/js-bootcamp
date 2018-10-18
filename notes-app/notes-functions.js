// read existing notes from local storage
const getSavedNotes = () => {
    const notesJSON = localStorage.getItem('notes')
    return notesJSON ? JSON.parse(notesJSON) : []
}

// save the notes to local storage
const saveNotes = notes => localStorage.setItem('notes', JSON.stringify(notes))

// generate DOM structure for a note
const generateNoteDOM = note => {
    const noteEl = document.createElement('div')
    // set id of noteEl to note.uuid, this will be used in deleting the note
    noteEl.setAttribute('id', note.id)

    // setup the remove note button
    const buttonEl = document.createElement('button')
    buttonEl.textContent = 'x'

    const anchorEl = document.createElement('a')
    anchorEl.setAttribute('href', `/edit.html#${note.id}`)
    // setup the note title text
    anchorEl.textContent = (note.title.length > 0) ? note.title : 'Unnamed note'

    noteEl.appendChild(buttonEl)
    noteEl.appendChild(anchorEl)
    return noteEl    
}

// modifies directly the notes array passed based on filters
const sortNotes = (notes, sortBy) => {
    if(sortBy === 'byEdited') {
        // sort notes array according to the last edited : last edited comes first
        notes.sort(function(a, b){
            if(a.updatedAt > b.updatedAt) {
                return -1 // a comes first, a is more recent
            } else if(a.updatedAt < b.updatedAt) {
                return 1 // b comes first, b is more recent
            } else {
                // the updatedAt timestamps are equal
                return 0
            }
        })
    } else if(sortBy === 'byCreated') {
        // sort notes array acc.to the last created : last created comes first
        notes.sort(function(a, b) {
            if(a.createdAt > b.createdAt) {
                return -1 // a comes first, a is more recent
            } else if(a.createdAt < b.createdAt) {
                return 1 // b comes first, b is more recent
            } else {
                return 0 // the createdAt timestamps are equal
            }
        })
    } else if(sortBy === 'alphabetical') {
        // sort notes array alphabetically based on the title property
        notes.sort(function(a, b) {
            if(a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1 // b comes first
            } else if(b.title.toLowerCase() > a.title.toLowerCase()) {
                return -1 // a comes first
            } else {
                return 0 // a & b's titles match in order
            }
        })
    }
}

// render application notes
const renderNotes = (notes, filters) => {

    const filteredNotes = notes.filter( note => note.title.toLowerCase().includes(filters.searchText.toLowerCase()) )
    // sort filteredNotes : manipulating the filteredNotes itself
    sortNotes(filteredNotes, filters.sortBy)

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach( note => {
        const noteEl = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteEl)
    })
}

const removeNote = (notes, targetId) => {
    const index = notes.findIndex( note => note.id === targetId )
    if(index !== -1) {
        notes.splice(index, 1) // remove the note that matched targetId
    } else {
        console.log(`Warning: Target Id ${targetId} was not found in notes array`)
    }
}

// takes in the time stamp updatedAt
const generatedLastEditedText = updatedAt => `Last edited ${moment(updatedAt).fromNow()}`