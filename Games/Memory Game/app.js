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
let chosenCard = []
let chosenCardId = []
let cardsWon = 0

function createBoard() {
    for(let i = 0; i < cardsArray.length; i++) {
        const cardImg = document.createElement('img')
        cardImg.setAttribute('data-id', i)
        cardImg.setAttribute('src', 'images/blank.png')
        cardImg.classList.add('card')

        cardImg.addEventListener('click', flipCard)

        cardsGrid.appendChild(cardImg)
    }
}

createBoard()

function flipCard() {
    const cardId = this.getAttribute('data-id')
    const cardName = cardsArray[cardId].name
    const cardImgUrl = cardsArray[cardId].url

    chosenCard.push(cardName)
    chosenCardId.push(cardId)

    this.setAttribute('src', cardImgUrl)

    if(chosenCardId.length === 2) {
        setTimeout(checkMatch, 500)
    }

}

function checkMatch() {
    const cards = document.querySelectorAll('img')
    const score = document.querySelector('#score')
    let optionOneId = chosenCardId[0]
    let optionTwoId = chosenCardId[1]

    if (chosenCard[0] == chosenCard[1]) {
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon++
        score.innerText = cardsWon

        if(cardsWon == 6) {
            score.innerText = "Congratulation, you have found all!"
        }
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
    }

    chosenCard = []
    chosenCardId = []
}