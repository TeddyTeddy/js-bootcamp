// here we explore multiple arguments
let add = function(a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

// Default arguments
let getScoreText = function(name = 'Anonymous', score = 0) {
   return `Name: ${name} - Score: ${score}`
    // return 'Name: ' + name + ' - Score: ' + score
}

let scoreText = getScoreText('Adrew')
console.log(scoreText)

scoreText = getScoreText(undefined, 99)
console.log(scoreText)

// CHALLANGE AREA
// A 25% tip on $40 would be $10
let getTip = function(total, tipPercent = .2) {
    return `A ${tipPercent * 100}% tip on $${total} would be $${total * tipPercent}`
}

console.log('getTip(100): ', getTip(100))
console.log('getTip(100, 0.1): ', getTip(100, 0.1))
console.log('getTip(100, 0.5): ', getTip(100, 0.5))

let name = 'Jen'
let age = 9
console.log(`Hey, my name is ${name}! I am ${age} years old`)
