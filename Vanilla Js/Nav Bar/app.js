const showMenu = document.querySelector('#show-menu')
const menu = document.querySelector('#menu-links')

showMenu.addEventListener('click', () => {
    menu.classList.toggle('hidden')
    menu.classList.toggle('show-links')
})