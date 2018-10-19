const Hangman = function(word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.guessedLetters = []
    this.remainingGuesses = remainingGuesses
}

Hangman.prototype.getPuzzle = function() {
    let puzzle = ''
    this.word.forEach(letter => {
        if(letter === ' ' || this.guessedLetters.includes(letter)) {
            puzzle += letter
        } else {
            puzzle += '*'
        }
    });
    return puzzle
}

const game1 = new Hangman('New Jersey', 3)
game1.guessedLetters = ['e']
console.log(game1.getPuzzle()) // *e* *e**e*


const game2 = new Hangman('Cat', 2)
game2.guessedLetters = ['c', 't']
console.log(game2.getPuzzle()) // c*t