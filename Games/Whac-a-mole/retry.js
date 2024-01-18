const squares = document.querySelectorAll('.square')
const score = document.querySelector('#score')
const time = document.querySelector('#time')
const startBtn = document.querySelector('#startBtn')

let changeMoleSquareTimer = null
let countDownTimer = null
let gameStart = false

let moleId
let currentScore = 0
let currentTime = 30

function getRandomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    let randomSquareId = Math.floor(Math.random() * 9)
    squares[randomSquareId].classList.add('mole')

    moleId = randomSquareId
}

squares.forEach(square => {
    square.addEventListener('click', () => {
        if(moleId == square.id && gameStart) {
            currentScore++
            score.innerText = currentScore
        }
    })
})

function countDown() {
    currentTime--
    time.innerText = currentTime

    if (currentTime == 0) {
        clearInterval(changeMoleSquareTimer)
        clearInterval(countDownTimer)
        alert("GAME OVER! \nYour score is: " + currentScore)
        gameStart = false

        currentScore = 0
        currentTime = 30
        score.innerText = currentScore
        time.innerText = currentTime
        startBtn.innerText = "Start"
    }
}

function startGame() {
    if(!gameStart) {
        gameStart = true
        startBtn.innerText = "Pause"        
        
        changeMoleSquareTimer = setInterval(getRandomSquare, 500)
        countDownTimer = setInterval(countDown, 1000)
    } else {
        gameStart = false
        clearInterval(changeMoleSquareTimer)
        clearInterval(countDownTimer)
        startBtn.innerText = "Start"
    }

}