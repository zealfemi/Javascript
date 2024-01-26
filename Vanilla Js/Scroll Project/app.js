const menuButton = document.querySelector('#menu-button');
const linksContainer = document.querySelector('.links-container')

menuButton.addEventListener('click', () => {
    linksContainer.classList.toggle('show-links')
})