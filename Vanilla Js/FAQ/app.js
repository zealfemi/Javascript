const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
    const showAnswerBtn = accordion.querySelector('#show-answer')

    showAnswerBtn.addEventListener('click', () => {
        
        accordions.forEach(item => {
            if (item !== accordion) {
                item.classList.add('hide-answer')
                const btn = item.querySelector('#show-answer')
                btn.innerHTML = '&plus;'
            }
        })
        
        accordion.classList.toggle('hide-answer')
        
        if (accordion.classList.contains('hide-answer')){
            showAnswerBtn.innerHTML = '&plus;'
        } else {
            showAnswerBtn.innerHTML = '&minus;'
        }
        
    })
})




// const showAnswers = document.querySelectorAll('#show-answer')

// showAnswers.forEach(answer => {
//     answer.addEventListener('click', () => {
//         answer.parentElement.parentElement.classList.toggle('hide-answer')

//         if (answer.parentElement.parentElement.classList.contains('hide-answer')) {
//             answer.innerHTML = '&plus;'
//         } else {
//             answer.innerHTML = '&minus;'
//         }
//     })
// })