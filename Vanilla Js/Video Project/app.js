const switchBtn = document.querySelector('.switch-btn')
const video = document.querySelector('.video-container')

switchBtn.addEventListener('click', () => {
    if (switchBtn.classList.contains('slide')) {
        switchBtn.classList.remove('slide')
        video.play()
    } else {
        switchBtn.classList.add('slide')
        video.pause()
    }
})

const preloader = document.querySelector('.preloader')

window.addEventListener('load', () => {
    preloader.classList.add('hide-preloader')
})