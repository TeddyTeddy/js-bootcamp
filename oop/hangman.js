const Hangman = function(word, remainingGuesses) {
    this.word = word
    this.remainingGuesses = remainingGuesses
}

const game1 = new Hangman('Helsinki', 3)
const game2 = new Hangman('Cat', 2)

console.log(game1)
console.log(game2)