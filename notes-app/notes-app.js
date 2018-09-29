// DOM - Document Object Model
// Document: The HTML document
// Object: JS object modeling the HTML document

// query and remove
// const p = document.querySelector('p')
// p.remove()

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
        p.textContent = note.title
        document.querySelector('#notes').appendChild(p)
    })
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function(e) {
    e.target.textContent = 'the button is clicked'
})

document.querySelector('#remove-all').addEventListener('click', function(e) {
    document.querySelectorAll('.note').forEach(function(note) {
        note.remove()
    })
})

document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})