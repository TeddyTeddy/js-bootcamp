const data = {
    locations: [],
    get location() {
        return this._location
    },
    set location(value) { // validation or sanitization we might wanna do here
        this._location = value.trim()
        this.locations.push(this._location)
    }
}

// code that uses the data obj
data.location = '  New Jersey  '
data.location = ' New York '
console.log(data)