// DOM - Document Object Model
// Document: The HTML document
// Object: JS object modeling the HTML document

// query and remove
// const p = document.querySelector('p')
// p.remove()

// check for notes data in local storage
let notes = []
const notesJSON = localStorage.getItem('notes')
if(notesJSON) {
    notes = JSON.parse(notesJSON)
}

const filters = {
    searchText: ''
}

const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function(note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    document.querySelector('#notes').innerHTML = ''
    filteredNotes.forEach(function(note) {
        const p = document.createElement('p')
        if(note.title.length > 0) {
            p.textContent = note.title
        } else {
            p.textContent = 'Unnamed note'
        }
        document.querySelector('#notes').appendChild(p)
    })
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function(e) {
    notes.push({
        title: '',
        body: ''
    })
    localStorage.setItem('notes', JSON.stringify(notes))
    renderNotes(notes, filters)
})

document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function(e) {
    console.log(e.target.value)
})