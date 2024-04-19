let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const message = document.getElementById('message');
const popup = document.getElementById('popup');
const newGameButton = document.getElementById('newGameButton');
const cells = document.querySelectorAll('.cell');

function handleClick(index) {
  if (gameActive && board[index] === '') {
    board[index] = currentPlayer;
    cells[index].innerText = currentPlayer;
    checkResult();
    togglePlayer();
  }
}

function togglePlayer() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkResult() {
  for (let combo of winningCombos) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      message.innerText = `CONGO! ${currentPlayer} wins!😀`;
      gameActive = false;
      openPopup();
      return;
    }
  }
  if (!board.includes('')) {
    message.innerText = 'OOPS!It\'s a draw!😓';
    gameActive = false;
    openPopup();
    return;
  }
}

function openPopup() {
  popup.style.display = 'flex';
}

function restartGame() {
  currentPlayer = 'X';
  board = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;
  message.innerText = '';
  cells.forEach(cell => cell.innerText = '');
  popup.style.display = 'none';
}
