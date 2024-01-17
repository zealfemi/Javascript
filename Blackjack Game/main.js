let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let sumEl = document.getElementById('sumEl')
let cardsEl = document.getElementById('cardsEl')
let messageEl = document.getElementById('messageEl')

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1

    if (randomNumber === 1) {
        return 11
    } else if (randomNumber > 10) {
        return 10
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    renderGame()
}

function renderGame() {
    cardsEl.textContent = ""
    sumEl.textContent = sum

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    if (sum <= 20) {
        message = "Do you wan to draw a new card?"
    } else if (sum === 21) {
        message = "You've won Jackpot!"
        hasBlackJack = true
    } else {
        message = "You are out of the game!"
        isAlive = false
    }

    messageEl.textContent = message
}

function newCard() {
    if (isAlive && !hasBlackJack) {
        let card = getRandomCard()
        sum += card
    
        cards.push(card)
    
        renderGame()
    }
}


// let sum = 0
// let isAlive = false

// let cardsEl = document.getElementById('cardsEl')
// let sumEl = document.getElementById('sumEl')
// let messageEl = document.getElementById('messageEl')

// function startGame() {
//     isAlive = true
//     let firstCard = Math.floor((Math.random() * (12 - 2)) + 2)
//     let secondCard = Math.floor((Math.random() * (12 - 2)) + 2)
//     let cards = [firstCard, secondCard]

//     sum = firstCard + secondCard

//     if (isAlive) {
//         cardsEl.textContent = firstCard + ", " + secondCard
//         sumEl.textContent = sum 
        
//         if (sum === 21) {
//             messageEl.textContent = "You've got Blackjack!"
//             sum = 0
//             isAlive = false
//         } else if (sum < 21) {
//             messageEl.textContent = "Do you want to draw another card?"
//         } else {
//             messageEl.textContent = "You are out of the game!"
//             sum = 0
//             isAlive = false 
//         }
//     }
// }

// function newCard() {
//     let thirdCard = Math.floor((Math.random() * (12 - 2)) + 2)
//     sum += thirdCard

//     if (isAlive) {
//         cardsEl.textContent += ", " + thirdCard
//         sumEl.textContent = sum

//         if (sum === 21) {
//             messageEl.textContent = "You've got Blackjack!"
//             sum = 0
//             isAlive = false
//         } else if (sum < 21) {
//             messageEl.textContent = "Do you want to draw another card?"
//         } else {
//             messageEl.textContent = "You are out of the game!"
//             sum = 0
//             isAlive = false
//         }
//     }
// }