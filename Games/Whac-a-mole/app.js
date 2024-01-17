const score = document.querySelector('#score')
const time = document.querySelector('#time')
const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')

let startGameTime = null
let timer = null
let randomSquareId = null
currentScore = 0
currentTime = 30

function startGame() {
    clearInterval(timer)
    clearInterval(startGameTime)
    
    startGameTime = setInterval(getRandomSquare, 500)
    startTime()

    currentScore = 0
    currentTime = 30
    score.innerText = currentScore
    time.innerText = currentTime
}

function getRandomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    const randomId = Math.floor(Math.random() * 9)
    squares[randomId].classList.add('mole')
    randomSquareId = randomId
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        console.log(square.id, randomSquareId);
        if (square.id == randomSquareId) {
            currentScore++
            score.innerText = currentScore
        }
    })
})

/* In Game Time */

function startTime() {
    timer = setInterval(gameTime, 1000)
}

function gameTime() {
    currentTime--
    time.innerText = currentTime

    if (currentTime == 0) {
        clearInterval(timer)
        clearInterval(startGameTime)
        alert("Game Over, your score is " + currentScore)

        squares.forEach(square => {
            square.classList.remove('mole')
        })
    }
}