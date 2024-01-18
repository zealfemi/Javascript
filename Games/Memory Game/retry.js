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

const cardGrid = document.querySelector('#grid')
const score = document.querySelector('#score')
let chosenCards = []
let chosenCardsId = []
let scores = 0

function createBoard() {

    for (let i = 0; i < cardsArray.length; i++) {

        const cardImg = document.createElement('img')
        // cardImg.setAttribute('src', 'images/blank.png')
        cardImg.src = 'images/blank.png'
        cardImg.setAttribute('data-id', i)
        cardImg.addEventListener('click', flipCard)

        cardGrid.append(cardImg)

    }
}

createBoard()

function flipCard() {
    const cardId = this.getAttribute('data-id')
    const cardName = cardsArray[cardId].name
    const cardImgUrl = cardsArray[cardId].url

    chosenCards.push(cardName)
    chosenCardsId.push(cardId)

    this.src = cardImgUrl
    // this.setAttribute('src', cardImgUrl)

    if (chosenCards.length == 2) {
        setTimeout(checkMatch, 500)
    }
}

function checkMatch() {
    const cards = document.querySelectorAll('img')

    if (chosenCards[0] == chosenCards[1]) {

        cards[chosenCardsId[0]].src = 'images/white.png'
        cards[chosenCardsId[1]].src = 'images/white.png'

        cards[chosenCardsId[0]].removeEventListener('click', flipCard)
        cards[chosenCardsId[1]].removeEventListener('click', flipCard)

        scores++
        score.innerText = scores
        if (scores == 6) {
            score.innerText = "Congratulations, you found them all!"

            setTimeout(restartGame, 3000)
        }

    } else {

        cards[chosenCardsId[0]].src = 'images/blank.png'
        cards[chosenCardsId[1]].src = 'images/blank.png'

    }

    chosenCards = []
    chosenCardsId = []
}

function restartGame() {
    const cards = document.querySelectorAll('img')
    cards.forEach(card => {
        cardGrid.removeChild(card)
    })

    cardsArray.sort(() => 0.5 - Math.random())

    scores = 0
    score.innerText = scores

    createBoard()
}
