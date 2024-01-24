const bodyColor = document.body
const color = document.querySelector('#color')
const changeSimple = document.querySelector('#change-simple')

const colors = ['whitesmoke', '#24f7e3', 'green', 'rgb(235, 80, 120)', '#5e5a7c', 'papayawhip']

changeSimple.addEventListener('click', () => {
    colors.sort(() => 0.5 - Math.random())

    let randomNumber = Math.floor(Math.random() * colors.length)
    bodyColor.style.backgroundColor = colors[randomNumber]

    color.innerText = colors[randomNumber]
})

