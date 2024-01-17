cardsArray = [
    {
        name: "cheeseburger",
        url: "images/cheeseburger.png"
    },
    {
        name: "fries",
        url: "images/fries.png"
    },
    {
        name: "hotdog",
        url: "images/hotdog.png"
    },
    {
        name: "ice-cream",
        url: "images/ice-cream.png"
    },
    {
        name: "milkshake",
        url: "images/milkshake.png"
    },
    {
        name: "pizza",
        url: "images/pizza.png"
    },
    {
        name: "cheeseburger",
        url: "images/cheeseburger.png"
    },
    {
        name: "fries",
        url: "images/fries.png"
    },
    {
        name: "hotdog",
        url: "images/hotdog.png"
    },
    {
        name: "ice-cream",
        url: "images/ice-cream.png"
    },
    {
        name: "milkshake",
        url: "images/milkshake.png"
    },
    {
        name: "pizza",
        url: "images/pizza.png"
    }
]

cardsArray.sort(() => 0.5 - Math.random())

const cardsGrid = document.querySelector('#grid')
let chosenCards = []
let chosenCardsId = []
let cardsWon = 0

function createBoard() {
    for (let i = 0; i < cardsArray.length; i++) {
        const cardImg = document.createElement('img')
        cardImg.setAttribute('src', 'images/blank.png')
        cardImg.setAttribute('data-id', i)
        cardImg.addEventListener('click', flipCard)

        cardsGrid.append(cardImg)
    }
}

createBoard()

function flipCard() {
    const cardId = this.getAttribute('data-id')
    const cardName = cardsArray[cardId].name
    const imgUrl = cardsArray[cardId].url

    chosenCards.push(cardName)
    chosenCardsId.push(cardId)
    this.setAttribute('src', imgUrl)

    if (chosenCardsId.length === 2) {
        setTimeout(checkMatch, 500)
    }
}

function checkMatch() {
    const cards = document.querySelectorAll('img')
    const score = document.querySelector('#score')

    const optionOneId = chosenCardsId[0]
    const optionTwoId = chosenCardsId[1]

    if (chosenCards[0] == chosenCards[1]) {
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)

        cardsWon++
        score.innerText = cardsWon
        if (cardsWon == 6) {
            score.innerText = "Congratulations, you found them all! Refresh to start again."
        }
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
    }

    chosenCards = []
    chosenCardsId = []
}