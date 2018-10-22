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
    })
    return puzzle
}

Hangman.prototype.makeGuess = function(guess) {
    // throw an error if guess is not a character
    if((typeof guess !== 'string') || (guess.length !== 1)) {
        throw Error('makeGuess methods expects a character')
    }

    // guess is a single character
    guess = guess.toLowerCase()
    // if the letter is already guessed, do nothing
    if(this.guessedLetters.includes(guess)) {
        return
    }
    // guess is unique, it has not been done before..
    // if the guess is incorrect, do reduce remainingGuesses by 1
    if(!this.word.includes(guess)) {
        this.remainingGuesses--
    }

    this.guessedLetters.push(guess)
}

const game1 = new Hangman('New Jersey', 3)

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    if (guess.match(/^[a-z0-9]$/i)){
        game1.makeGuess(guess)
        console.log('Puzzle: ', game1.getPuzzle())
        console.log('Remaining Guesses: ', game1.remainingGuesses)
    } 
   })