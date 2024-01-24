const showMenu = document.querySelector('#show-menu')
const closeMenu = document.querySelector('#close-menu')
const sidebar = document.querySelector('.sidebar')

showMenu.addEventListener('click', () => {
    sidebar.classList.toggle('show-sidebar')
})

closeMenu.addEventListener('click', () => {
    sidebar.classList.remove('show-sidebar')
})