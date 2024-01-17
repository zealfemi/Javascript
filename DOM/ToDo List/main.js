const newToDo = document.querySelector('#todo-input')
const addToDo = document.querySelector('#add-button')
const toDos = document.querySelector('.todo-container')

addToDo.addEventListener('click', function() {
    let task = document.createElement('div')
    task.classList.add('todo-task')

    let li = document.createElement('li')
    li.innerText = `${newToDo.value}`
    task.appendChild(li)

    let tickBtn = document.createElement('button')
    tickBtn.classList.add('check-btn')
    tickBtn.innerHTML = "&check;"
    task.appendChild(tickBtn)
    
    let deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete-btn')
    deleteBtn.innerHTML = "&times;"
    task.appendChild(deleteBtn)

    if (newToDo.value === "") {
        alert("Please enter a task")
    } else {
        toDos.appendChild(task)
        newToDo.value = ""
    }

    tickBtn.addEventListener('click', function() {
        if (li.style.textDecoration == 'line-through') {
            li.style.textDecoration = 'none'
        } else {
            li.style.textDecoration = 'line-through'
        }
    })

    deleteBtn.addEventListener('click', function(e) {
        let target = e.target
        target.parentElement.remove()
    })
})