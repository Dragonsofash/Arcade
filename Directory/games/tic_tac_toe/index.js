// Defining Variables and DOM elements
const board = document.getElementById('board');
const winningCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
const reset = document.getElementById('reset')
const player1 = 'X';
const player2 = 'O';
let currentPlayer = 'X';
let cells = document.querySelectorAll('td');

function storeName() {
    player1 = document.getElementById('1Player').value;
    player2 = document.getElementById('2Player').value;

    document.getElementById('players').style.display = 'none';
};

function swithPlayer() {
    if (currentPlayer === 'X') {
        currentPlayer = 'O';
    } else {
        currentPlayer = 'X';
    }
};

function checkWin() {
    
}

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', function() {
        if (board[i] === '') {
            board[i] = currentPlayer;
            cells[i].textContent = currentPlayer;
            checkWin();
            swithPlayer();
        }
    });
};

function restart() {
    reset.addEventListener('click', function () {
        board = ['','','',
                '','','',
                '','',''];
        currentPlayer = 'X';
        for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = '';
        }
    });
};

