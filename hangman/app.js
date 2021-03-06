document.addEventListener('DOMContentLoaded', runHangmanApp)

function runHangmanApp() {
    const game = new Hangman('New Jersey', 3)
    const puzzleDOM = document.querySelector('#puzzle')
    const remainingGuessesDOM = document.querySelector('#remaining-guesses')
    
    const showPuzzle = function(puzzle) {
        puzzleDOM.textContent = `Puzzle: ${puzzle}`
    }
    
    showPuzzle(game.puzzle)
    remainingGuessesDOM.textContent = game.statusMessage
    
    window.addEventListener('keypress', e => {
        const guess = String.fromCharCode(e.charCode)
        if (guess.match(/^[a-z0-9]$/i)){
            game.makeGuess(guess)
            showPuzzle(game.puzzle)
            remainingGuessesDOM.textContent = game.statusMessage
        }
    })
}
