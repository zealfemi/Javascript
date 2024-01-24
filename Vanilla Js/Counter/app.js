const count = document.querySelector('#count')
const buttons = document.querySelectorAll('.btn')

let currentCount = 0

buttons.forEach(button => {

    button.addEventListener('click', () => {

        if (button.classList.contains('decrease')) {
            currentCount--
        } else if (button.classList.contains('increase')) {
            currentCount++
        } else if (button.classList.contains('reset')) {
            currentCount = 0
        }

        if (currentCount > 0) {
            count.style.color = 'green'
        }
        if (currentCount < 0) {
            count.style.color = 'red'
        }
        if (currentCount == 0) {
            count.style.color = 'black'
        }
    
        count.innerText = currentCount
    })

})

