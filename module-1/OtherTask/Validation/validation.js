const password = prompt('Введите пароль').trim()
const minChars = 3;
const maxChars = 30;
const regularExpression = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{3,30}$/

    if(password.length < minChars || password.length >= maxChars){
        alert('Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.')
    } else if(!regularExpression.test(password)){
        alert('попробуй ешё!')
    } else {
        alert('Пароль валидный. Добро пожаловать в аккаунт!')
    }
