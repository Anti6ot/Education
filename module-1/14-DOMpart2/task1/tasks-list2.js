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

function taskAdd(taskId, taskTxt){

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
    button.dataset.dataDeleteTaskId = '5'
    taskItemMainContainer.append(button)

    taskItem.dataset.dataTaskId = taskId
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
    const createTaskValue = event.target.taskName.value
    console.log(createTaskValue)

    const newTask = {
        id: unicId,
        completed: false,
        text: createTaskValue,
    }

    tasks.push(newTask)

    const taskItem = taskAdd(newTask.id, newTask.text)
    tasksList.append(taskItem)
})

tasks.forEach( (value) => {

    taskAdd(value.id, value.text)
})
