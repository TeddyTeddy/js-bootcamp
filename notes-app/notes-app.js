// DOM - Document Object Model
// Document: The HTML document
// Object: JS object modeling the HTML document

// query and remove
// const p = document.querySelector('p')
// p.remove()

Sugar.extend(); // To use Sugar's Array functions on native objects (i.e. Array)

let notes = getSavedNotes() // from local storage
const filters = {
    searchText: ''
}

renderNotes(notes, filters)

// creating a new note functionality
document.querySelector('#create-note').addEventListener('click', function(e) {
    const uuid = uuidv4()
    notes.push({
        id: uuid,
        title: '',
        body: ''
    })
    saveNotes(notes) // to local storage
    location.assign(`/edit.html#${uuid}`)
})

// search text filtering functionality
document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function(e) {
    console.log(e.target.value)
})

// remove note event handler utilizing the event bubling
document.querySelector('#notes').addEventListener('click', function(e) {
    if(e.target.tagName === 'BUTTON') {
        // grab the parent div's id as uuid
        const targetID = e.target.parentElement.getAttribute('id')
        // Delete from the notes array the note with the uuid
        removeNote(notes, targetID)
        saveNotes(notes) // to local storage
        renderNotes(notes, filters)
    }
})

// local storage changed event
window.addEventListener('storage', function(e) {
    if(e.key === 'notes') { // take action only if notes item in LocalStorage change
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})