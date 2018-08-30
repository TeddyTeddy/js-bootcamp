// here we explore multiple arguments
let add = function(a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

// Default arguments
let getScoreText = function(name = 'Anonymous', score = 0) {
    return 'Name: ' + name + ' - Score: ' + score
}

let scoreText = getScoreText('Adrew')
console.log(scoreText)

scoreText = getScoreText(undefined, 99)
console.log(scoreText)

// CHALLANGE AREA
let getTip = function(total, tipPercent = .2) {
    return total * tipPercent
}

console.log('getTip(100): ', getTip(100))
console.log('getTip(100, 0.1): ', getTip(100, 0.1))
console.log('getTip(100, 0.5): ', getTip(100, 0.5))


