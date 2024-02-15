const contents = [
    {
        title: 'history',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos accusantium quod quaerat aperiam vitae error dolore voluptate, quae minima quibusdam sequi iste deserunt beatae ab in saepe, adipisci tempore quis? Quos accusantium quod quaerat aperiam vitae error dolore voluptate, quae minima quibusdam sequi iste deserunt beatae ab in saepe, adipisci tempore quis?'
    },
    {
        title: 'vision',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates recusandae beatae perspiciatis itaque, odit veritatis maxime porro esse hic ratione doloribus cum eum libero tenetur! Qui, praesentium. Iure, incidunt quas? Voluptates recusandae beatae perspiciatis itaque, odit veritatis maxime porro esse hic ratione doloribus cum eum libero tenetur! Qui, praesentium. Iure, incidunt quas?'
    },
    {
        title: 'goals',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime veritatis recusandae blanditiis, est quasi dicta aliquam, facere ducimus perferendis, quam amet quis magnam nihil at laboriosam inventore natus rerum harum. Maxime veritatis recusandae blanditiis, est quasi dicta aliquam, facere ducimus perferendis, quam amet quis magnam nihil at laboriosam inventore natus rerum harum.'
    }
]

const tabBtnsContainer = document.querySelector('.tab-btns-container') 

window.addEventListener('DOMContentLoaded', () => {
    const tabBtns = contents.map(content => {
        if (content.title == contents[0].title) {
            return `<button id="tab-btn" class="active-tab" data-id="${content.title}">${content.title}</button>`
        } else {
            return `<button id="tab-btn" data-id="${content.title}">${content.title}</button>`
        }
    }).join('')

    tabBtnsContainer.innerHTML = tabBtns
    
    const btns = document.querySelectorAll('#tab-btn')

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(btn => {
                btn.classList.remove('active-tab')
            })

            btn.classList.add('active-tab')

            const btnId = btn.getAttribute('data-id')

            const content = contents.map(content => {
                if (content.title == btnId) {
                    return `
                    <div id="tab-content">
                        <h4 id="content-title">${content.title}</h4>
                        <p id="content-text">
                            ${content.text}
                        </p>
                    </div>
                    `
                }
            }).join('')

            const tabContentsContainer = document.querySelector('.tab-contents')
            tabContentsContainer.innerHTML = content
        })
    })
})

