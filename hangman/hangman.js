class Hangman {
    constructor(word, remainingGuesses) {
        if((typeof word !== 'string') || (word === '')) {
            throw Error('word must be a non-empty string')
        }
    
        if((typeof remainingGuesses !== 'number') || (remainingGuesses <= 0) ) {
            throw Error('remainingGuesses must be a positive number')
        }
    
        // word and remainingGuesses arguments are valid..
        this.word = word.toLowerCase().split('')
        this.guessedLetters = []
        this.remainingGuesses = remainingGuesses
        this.status = 'playing' // one of the following values: "playing", "failed", "finished"
    }
    get puzzle() {
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
    calculateStatus() {
        if(this.remainingGuesses === 0) {
            this.status = 'failed'
        } else if( (!this.puzzle.includes('*')) && (this.remainingGuesses > 0)) {
            this.status = 'finished'
        } else {
            this.status = 'playing'
        }
    }
    makeGuess(guess) {
        // throw an error if guess is not a character
        if((typeof guess !== 'string') || (guess.length !== 1)) {
            throw Error('makeGuess methods expects a character')
        }
    
        // guess is a single character..
        guess = guess.toLowerCase()
        // if the letter is already guessed, do nothing
        // if the status is 'failed' or 'finished' game is over, do nothing
        if(this.guessedLetters.includes(guess) || this.status !== 'playing') {
            return
        }
        // guess is unique; it has not been done before..
        // & the game is not over, continue processing the guess
        if(!this.word.includes(guess)) {
            this.remainingGuesses--     // if the guess is incorrect, do reduce remainingGuesses by 1
        }
        
        this.guessedLetters.push(guess) // do this so that calculateStatus() works properly
        
        // guess is processed, calculate the status
        this.calculateStatus()
    }
    get statusMessage() {
        let statusText = ''
        if(this.status === 'playing') {
            statusText = `Guesses left: ${this.remainingGuesses}`
        } else if(this.status === 'finished') {
            statusText = 'Great work! You guessed the word'
        } else if(this.status === 'failed') {
            statusText = `Nice try! The word was: ${this.word.join('')}`
        }
        return statusText
    }    
}
