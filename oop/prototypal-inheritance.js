// Primitive Value : Non object (does not have properties) : 
// string, number, boolean, null, undefined
// null and undefined are truly primitive, no prototype chain for them
// nor they have properties or methods
// String, number and boolean

// String : myString --> String.protoype --> Object.prototype --> null
// Number : myNumber --> Number.protoype --> Object.prototype --> null
// Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null
const product2 = 'Computer'
console.log(product2.split(''))

const otherProduct = new String('Phone')
console.log(otherProduct)


// myObject --> Object.prototype --> null
const product = {
    name: 'Influence'
}

// hasOwnProperty
console.log(product.hasOwnProperty('hasOwnProperty'))

// Array : myArray --> Array.prototype --> Object.prototype --> null
const team = ['Luke', 'Maddison']
console.log(team.hasOwnProperty('filter')) // false

// Function : myFunc --> Function.prototype --> Object.prototype --> null
const getScore = () => 1
console.log(getScore)