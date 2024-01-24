const openModal = document.querySelector('#open-modal')
const closeModal = document.querySelector('#close-modal')
const modal = document.querySelector('.modal')

openModal.addEventListener('click', () => {
    modal.classList.add('show-modal')
})

closeModal.addEventListener('click', () => {
    modal.classList.remove('show-modal')
})