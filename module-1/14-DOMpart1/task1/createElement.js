const bodyElement = document.querySelector('body')
const form = document.createElement('form')
form.className = 'create-user-form'
bodyElement.append(form)

const labelName = document.createElement('label')
labelName.textContent = 'Имя'
form.append(labelName)

const input = document.createElement('input')
input.type = 'text'
input.name = 'userName'
input.placeholder = 'введите ваше имя'
labelName.append(input)

const labelPassword = document.createElement('label')
labelPassword.textContent = 'Пароль'
form.append(labelPassword)

const inputPassword = document.createElement('input')
inputPassword.type = 'password'
inputPassword.name = 'password'
inputPassword.placeholder = 'Придумайте пароль'
labelPassword.append(inputPassword)

form.innerHTML += '<button type="submit" >Подтвердить</button>'

