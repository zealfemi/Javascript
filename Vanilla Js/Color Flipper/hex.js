const bodyColor = document.body
const color = document.querySelector('#color')
const changeHex = document.querySelector('#change-hex')

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

changeHex.addEventListener('click', () => {
    let colorHex = '#'

    for(let i = 0; i < 6; i++) {
        const randomNumberHex = Math.floor(Math.random() * hex.length)

        colorHex += (hex[randomNumberHex])
    }

    bodyColor.style.backgroundColor = colorHex
    color.innerText = colorHex
})