let ul = document.querySelector('ul')
let li = document.createElement('li')

li.innerText = 'X-Men'

li.setAttribute('class', 'list-items')

ul.append(li)

console.log(ul);