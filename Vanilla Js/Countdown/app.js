const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway')
const countdownContainer = document.querySelector('.countdown-container')
const countdown = document.querySelectorAll('.countdown-container h1')

const futureDate = new Date(2024, 4, 26, 23, 59)

const year = futureDate.getFullYear()
const date = futureDate.getDate()
const weekday = weekdays[futureDate.getDay()]
const month = months[futureDate.getMonth()]
const hour = futureDate.getHours()
const minute = futureDate.getMinutes()

giveaway.innerText = `
  giveaway ends on ${weekday}, ${date} ${month} ${year} ${hour}:${minute}pm
  `
const futureDays = futureDate.getTime()

function getRemainingTime() {
  const today = new Date().getTime()
  
  let t = futureDays - today
  
  // time in milliseconds
  const oneSecond = 1000
  const oneMinute = 60 * 1000
  const oneHour = 60 * 60 * 1000
  const oneDay = 24 * 60 * 60 * 1000
  
  let days = Math.floor(t / oneDay)
  let hours = Math.floor((t % oneDay) / oneHour)
  let minutes = Math.floor((t % oneHour) / oneMinute)
  let seconds = Math.floor((t % oneMinute) / 1000)
  
  const values = [days, hours, minutes, seconds]

  function format(item) {
    if (item < 10) {
      return `0${item}`
    }
    return item
  }
  
  countdown.forEach((item, value)=> {
    item.innerText = format(values[value])
  })

  if (t < 0) {
    clearInterval(timer)
    countdownContainer.innerText = `sorry, this giveaway has expired`
  }

}

let timer = setInterval(getRemainingTime, 1000)

getRemainingTime()