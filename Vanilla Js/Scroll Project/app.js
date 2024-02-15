const year = document.querySelector('#year');
year.innerHTML = new Date().getFullYear()

// TOGGLE MENU

const menuButton = document.querySelector('#menu-button');
const linksContainer = document.querySelector('.links-container')
const links = document.querySelector('.links')

menuButton.addEventListener('click', () => {
    let containerHeight = linksContainer.getBoundingClientRect().height
    const linksHeight = links.getBoundingClientRect().height

    if (containerHeight == 0) {
        linksContainer.style.height = `${linksHeight}px`
    } else {
        linksContainer.style.height = 0
    }
})

// STICKY NAV

const navContainer = document.querySelector('#nav')
const backTop = document.querySelector('.back-top')

window.addEventListener('scroll', () => {
    const navHeight = navContainer.getBoundingClientRect().height + 10
    const scrollHeight = window.scrollY

    if (scrollHeight > navHeight) {
        navContainer.classList.add('fixed-nav')
    } else {
        navContainer.classList.remove('fixed-nav')
    }

    if (scrollHeight > 400) {
        backTop.classList.add('show-back-top')
    } else {
        backTop.classList.remove('show-back-top')
    }
})

// SMOOTH SCROLL LINKS

const scrollLinks = document.querySelectorAll('.scroll-link')

scrollLinks.forEach((scrollLink) => {
    scrollLink.addEventListener('click', (e) => {
        e.preventDefault()

        const id = scrollLink.getAttribute('href').slice(1)
        const element = document.getElementById(id)
        const navHeight = navContainer.getBoundingClientRect().height 
        const linksHeight = linksContainer.getBoundingClientRect().height
        const fixedNav = navContainer.classList.contains('fixed-nav')
        let position = element.offsetTop - navHeight
        
        if (!fixedNav) {
            position = position - navHeight
        }

        if (linksHeight > 50) {
            position = position + linksHeight
        }
        
        window.scrollTo({
            left: 0,
            top: position,
        })

        linksContainer.style.height = 0
    })
})