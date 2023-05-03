// Grabbing all the DOM elements
const p1Name = document.getElementById('p1Name')
const p1Score = document.getElementById('p1Score')
const p2Name = document.getElementById('p2Name')
const p2Score = document.getElementById('p2Score')
const gameMode = document.getElementById('modeSelect')
const resetbtn = document.getElementById('reset')
const board = document.getElementById('board')
const cells = Array.from(document.getElementsByClassName('cell'))

const play1 = 'X'
const play2 = 'O'
let currentPlayer = play1
let availableMove = [null, null, null,
                    null, null, null,
                    null, null, null]
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function gameStart() {
    cells.forEach(cell => cell.addEventListener('click', boxClicked))
}

function boxClicked(event) {
    const id = event.target.id

    if(availableMove[id] != id) {
        availableMove[id] = currentPlayer
        event.target.innerText = currentPlayer

        if(playerHasWon() !== false){
            alert('${currentPlayer} has won!')
        }
        
        currentPlayer = currentPlayer == play1 ? play2 : play1
    }
}

function playerHasWon() {
    for (const condition of winningCombos) {
        let [a, b, c] = condition

        if(availableMove[a] && (availableMove[a] == availableMove[b] && availableMove[a] == availableMove[c])) {
            return [a, b, c]
        }
    }
    return false
}

gameStart()


resetbtn.addEventListener('click', reset)
function reset() {
    availableMove = [null, null, null,
                    null, null, null,
                    null, null, null]
    currentPlayer = play1
    cells.forEach(cell => {
        cell.innerText = ''
    })
}