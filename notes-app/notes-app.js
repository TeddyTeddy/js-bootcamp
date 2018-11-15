'use strict'

document.addEventListener('DOMContentLoaded', runNotesApp)

function runNotesApp() {

    const filterByDOM = document.querySelector('#filter-by')
    let notes = Engine.getSavedNotes() // from local storage
    const filters = {
        searchText: '',
        sortBy: filterByDOM.value  // byEdited at default
    }
    
    Engine.renderNotes(notes, filters)
    
    // creating a new note functionality
    document.querySelector('#create-note').addEventListener('click', e => {
        const uuid = uuidv4()
        const now = moment().valueOf()
        notes.push({
            id: uuid,
            title: '',
            body: '',
            createdAt: now,
            updatedAt: now
        })
        Engine.saveNotes(notes) // to local storage
        location.assign(`edit.html#${uuid}`)
    })
    
    // search text filtering functionality
    document.querySelector('#search-text').addEventListener('input', e => {
        filters.searchText = e.target.value
        Engine.renderNotes(notes, filters)
    })
    
    // filter by sorting functionality
    document.querySelector('#filter-by').addEventListener('change', e => {
        // update filters.sortBy property with the value set in the #filter-by
        filters.sortBy = e.target.value
        Engine.renderNotes(notes, filters)
    })
    
    // remove note event handler utilizing the event bubling
    document.querySelector('#notes').addEventListener('click', e => {
        if(e.target.tagName === 'BUTTON') {
            // grab the parent div's id as uuid
            const targetID = e.target.parentElement.getAttribute('id')
            // Delete from the notes array the note with the uuid
            Engine.removeNote(notes, targetID)
            Engine.saveNotes(notes) // to local storage
            Engine.renderNotes(notes, filters)
        }
    })
    
    // local storage changed event
    window.addEventListener('storage', e => {
        if((e.key === 'notes') || (!localStorage.getItem('notes'))) { 
            // take action only if notes item in LocalStorage got changed/deleted
            notes = Engine.getSavedNotes() // from local storage
            Engine.renderNotes(notes, filters)
        }
    })
}

