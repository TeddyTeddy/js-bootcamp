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

// query all and remove
const ps = document.querySelectorAll('p')
ps.forEach(function(p) {
    p.textContent = '*****'
    //console.log(p.textContent)
    //p.remove()
})

// add a new element
const newParagraph = document.createElement('p')
newParagraph.textContent = 'This is a new element from JS'
document.querySelector('body').appendChild(newParagraph)