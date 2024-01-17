const timer = document.querySelector('#timer')
const startPause = document.querySelector('.startPause')
const reset = document.querySelector('.reset')

let seconds = 0
let doubleSeconds = 0
let minutes = 0
let doubleMinutes = 0
let hours = 0
let doubleHours = 0

let isWorking = false
let startInterval = null

function startWatch() {
    seconds++

    if (seconds/60 === 1) {
        seconds = 0
        minutes++

        if (minutes/60 ===1) {
            minutes = 0
            hours++
        }
    }

    if (seconds < 10) {
        doubleSeconds = 0 + seconds.toString()
    } else {
        doubleSeconds = seconds
    }

    if (minutes < 10) {
        doubleMinutes = 0 + minutes.toString()
    } else {
        doubleMinutes = minutes
    }

    if (hours < 10) {
        doubleHours = 0 + hours.toString()
    } else {
        doubleHours = hours
    }

    timer.innerText = doubleHours + ':' + doubleMinutes + ':' + doubleSeconds
}

startPause.addEventListener('click', function() {
    if (!isWorking) {
        startInterval = window.setInterval(startWatch, 1000)
        isWorking = true
        startPause.innerHTML = `<button id="pause">Pause</button>`
    } else {
        window.clearInterval(startInterval)
        isWorking = false
        startPause.innerHTML = `<button id="start">Continue</button>`
    }
})

reset.addEventListener('click', function() {
    window.clearInterval(startInterval)
    isWorking = false
    seconds = 0
    minutes = 0
    hours = 0

    timer.innerText = "00:00:00"
    startPause.innerHTML = `<button id="start">Start</button>`
})