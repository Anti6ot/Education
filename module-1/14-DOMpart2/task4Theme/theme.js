const tasks = [
    {
        id: '1138465078061',
        completed: false,
        text: 'Посмотреть новый урок по JavaScript',
    },
    {
        id: '1138465078062',
        completed: true,
        text: 'Выполнить тест после урока',
    },
    {
        id: '1138465078063',
        completed: false,
        text: 'Выполнить ДЗ после урока',
    },
]
const tasksList = document.querySelector('.tasks-list')

function taskAdd(taskId, taskTxt) {

    const taskItem = document.createElement('div')
    taskItem.className = 'task-item'

    const taskItemMainContainer = document.createElement('div')
    taskItemMainContainer.className = 'task-item__main-container'
    taskItem.append(taskItemMainContainer)

    const taskItemMainContent = document.createElement('div')
    taskItemMainContent.className = 'task-item__main-content'
    taskItemMainContainer.append(taskItemMainContent)

    const checkboxForm = document.createElement('form')
    checkboxForm.className = 'checkbox-form'
    taskItemMainContent.append(checkboxForm)


    const input = document.createElement('input')
    input.className = 'checkbox-form__checkbox'
    input.type = 'checkbox'

    const label = document.createElement('label')

    const span = document.createElement('span')
    span.textContent = ''
    span.className = 'task-item__text'
    taskItemMainContent.append(span)

    const button = document.createElement('button')
    button.className = 'task-item__delete-button default-button delete-button'
    button.textContent = 'Удалить'
    button.dataset.deleteTaskId = taskId
    taskItemMainContainer.append(button)

    taskItem.dataset.taskId = taskId
    tasksList.append(taskItem)

    input.id = taskId
    checkboxForm.append(input)

    label.htmlFor = taskId
    checkboxForm.append(label)

    span.textContent = taskTxt

    return taskItem
}

const createTaskBlock = document.querySelector('.create-task-block')

createTaskBlock.addEventListener('submit', (event) => {
    event.preventDefault()
    const unicId = '' + Date.now()

    // orig
    const createTaskValue = event.target.taskName.value
    let duplicate = false
    tasks.forEach((el) =>{
        if(createTaskValue === el.text){
            duplicate = true
        }
    })
        if(createTaskValue === '' || createTaskValue === 'undefined' || createTaskValue === null){
            const errorMessageBlock = document.createElement('div')
            errorMessageBlock.className = 'error-message-block'
            const spanError = document.createElement('span')
            spanError.textContent = 'Название задачи не должно быть пустым'
            createTaskBlock.append(errorMessageBlock)
            errorMessageBlock.append(spanError)
            setTimeout(() => errorMessageBlock.remove(), 1000)

        }else if(duplicate){
            const errorMessageBlock = document.createElement('div')
            errorMessageBlock.className = 'error-message-block'
            const spanError = document.createElement('span')
            spanError.textContent = 'Задача с таким названием уже существует.'
            createTaskBlock.append(errorMessageBlock)
            errorMessageBlock.append(spanError)

            setTimeout(() => errorMessageBlock.remove(), 1000)

        } else{
            const newTask = {
                id: unicId,
                completed: false,
                text: createTaskValue,
            }

            tasks.push(newTask)

            const taskItem = taskAdd(newTask.id, newTask.text)
            tasksList.append(taskItem)

        }

    })

tasksList.addEventListener('click', (event) => {
    const taskId = event.target.dataset.deleteTaskId
    const taskList = document.querySelector('.tasks-list')
    const taskItem = taskList.querySelectorAll('.task-item')
    if(taskId){
    const modalWindowDelete = document.querySelector('.modal-overlay')
        modalWindowDelete.classList.remove("modal-overlay_hidden")

        modalWindowDelete.addEventListener('click', (event) => {
            const deleteBtn = document.querySelector('.delete-modal__confirm-button')
            const cancelBtn = document.querySelector('.delete-modal__cancel-button')

            if(deleteBtn.className === event.target.className) {
                taskItem.forEach((el) => {
                    if(taskId === el.dataset.taskId){
                        el.remove()
                        delForTasks(taskId)

                    }
                })
               modalWindowDelete.classList.add("modal-overlay_hidden")
           } else if(cancelBtn.className === event.target.className){
                modalWindowDelete.classList.add("modal-overlay_hidden")
            }
        })
    }
})

function delForTasks (taskId){
    const index = tasks.findIndex(n => n.id === taskId)

    if (index !== -1) {
        tasks.splice(index, 1);
    }
}



for (let key in tasks) {
    taskAdd(tasks[key].id, tasks[key].text, key)
}


