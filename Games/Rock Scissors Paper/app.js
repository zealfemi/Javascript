const computer = document.querySelector('#computer-choice')
const user = document.querySelector('#user-choice')
const result = document.querySelector('#result')

const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice

possibleChoices.forEach(choice => choice.addEventListener('click', (e) => {
    userChoice = e.target.id
    user.innerText = userChoice

    getComputerChoice()
    generateResult()
}))

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * possibleChoices.length) + 1
    if (randomNum === 1) {
        computerChoice = "rock"
    }

    if (randomNum === 2) {
        computerChoice = "scissors"
    }

    if (randomNum === 3) {
        computerChoice = "paper"
    }

    computer.innerText = computerChoice
}

function generateResult() {
    if ((userChoice === "rock" && computerChoice === "scissors") || (userChoice === "scissors" && computerChoice === "paper") || (userChoice === "paper" && computerChoice === "rock")) {
        result.innerText = "you win!"
    } else if ((computerChoice === "rock" && userChoice === "scissors") || (computerChoice === "scissors" && userChoice === "paper") || (computerChoice === "paper" && userChoice === "rock")) {
        result.innerText = "computer win!"
    } else {
        result.innerText = "draw!"
    }
}
