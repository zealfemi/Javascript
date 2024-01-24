// local reviews data
const reviews = [
  {
    id: 1,
    name: 'Mackie Femi',
    job: 'web developer',
    img: 'img/person-1.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar.",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'img/person-2.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'img/person-3.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'Susan Smith',
    job: 'ux designer',
    img: 'img/person-4.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

const personImg = document.querySelector('#person-img');
const authorName = document.querySelector('#author')
const job = document.querySelector('#job')
const info = document.querySelector('#info')
const buttons = document.querySelectorAll('button')

let currentItem = 0
let id = reviews[currentItem].id

window.addEventListener('DOMContentLoaded', function() {
  personImg.setAttribute('src', reviews[currentItem].img)
  authorName.innerText = reviews[currentItem].name
  job.innerText = reviews[currentItem].job
  info.innerText = reviews[currentItem].text
})

buttons.forEach(button => {
  button.addEventListener('click', ()=> {

    // PREVIOUS BUTTON
    if (button.classList.contains('prev-btn')) {
      currentItem--

      if (currentItem === -1) {
        currentItem = reviews.length - 1
      }

      displayDetails(currentItem)

    }

    // NEXT BUTTON
    else if (button.classList.contains('next-btn')) {
      currentItem++
  
      if (currentItem === reviews.length) {
        currentItem = 0
      }

      displayDetails(currentItem)
    }

    //RANDOM BUTTON 
    else if (button.classList.contains('random-btn')) {
      currentItem = Math.floor(Math.random() * reviews.length)

      displayDetails(currentItem)
    }

  })
})

function displayDetails(item) {
  // DISPLAY DETAILS
  personImg.setAttribute('src', reviews[item].img)
  authorName.innerText = reviews[item].name
  job.innerText = reviews[item].job
  info.innerText = reviews[item].text
}