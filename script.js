let score = 0;
let timeLeft = 10;
let timer;
let isGameRunning = false;

const clickButton = document.getElementById('clickButton');
const restartButton = document.getElementById('restartButton');
const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time');

clickButton.addEventListener('click', () => {
    if (!isGameRunning) return;

    score++;
    scoreDisplay.textContent = score;
});

restartButton.addEventListener('click', startGame);

function startGame() {
    score = 0;
    timeLeft = 10;
    isGameRunning = true;
    scoreDisplay.textContent = score;
    timeDisplay.textContent = timeLeft;
    restartButton.style.display = 'none';

    timer = setInterval(() => {
        timeLeft--;
        timeDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            isGameRunning = false;
            restartButton.style.display = 'inline-block';
        }
    }, 1000);
}

// Start game on page load
window.onload = startGame;
