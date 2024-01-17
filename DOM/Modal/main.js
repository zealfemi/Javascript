const modal = document.querySelector('.modal-container')
const showModal = document.querySelector('#show-modal')
const closeModal = document.querySelector('#close-modal')

showModal.addEventListener('click', function() {
    modal.style.display = "block"
})

closeModal.addEventListener('click', function() {
    modal.style.display = "none"
})

window.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.style.display = "none"
    }
})