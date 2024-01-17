const quote = document.querySelector('.quote')
const person = document.querySelector('.person')
const newQuote = document.querySelector('#new-quote')

const quotes = [
    {
        quote: `"Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."`,
        person: "Mackie"
    },
    {
        quote: `"Incidunt architecto dolor, consequuntur dolorem debitis quam est, beatae. Consequuntur dolorem debitis quam est, beatae."`,
        person: "Zealot"
    },
    {
        quote: `"Vel aliquid veniam eligendi asperiores non minus iure cupiditate hic at nostrum sequi cum est dolor numquam."`,
        person: "Tan"
    },
    {
        quote: `"Voluptate tempore iure rerum nihil cum! Voluptate tempore iure rerum nihil cum!"`,
        person: "Akin"
    },
    {
        quote: `"Ipsam nesciunt deleniti neque eos repellendus quod omnis reprehenderit, aspernatur minus dolore corrupti."`,
        person: "Femi"
    },
    {
        quote: `"itaque quia amet dignissimos eum voluptatibus molestiae. Enim, id!"`,
        person: "Alex"
    },
]

newQuote.addEventListener('click', function() {
    let random = Math.floor(Math.random() * quotes.length)
    
    quote.innerText = quotes[random].quote
    person.innerText = quotes[random].person
})