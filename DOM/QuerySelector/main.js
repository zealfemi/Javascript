document.querySelector('#sports').addEventListener('click', function(e){
    const target = e.target

    if (target.matches('li')) {
        if (target.style.backgroundColor == 'transparent') {
            target.style.backgroundColor = 'darkblue'
        } else {
            target.style.backgroundColor = 'transparent'
        }
    }
})