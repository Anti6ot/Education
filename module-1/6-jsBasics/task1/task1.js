const existingUserLogin = 'the_best_user'
const existingUserPassword = 12345678

const userLogin = prompt('Введите логин').trim()
const userPassword = +prompt('Введите пароль').trim()

if(userLogin === existingUserLogin && userPassword === existingUserPassword){
    alert(`Добро пожаловать, ${userLogin}!`)
} else {
    alert('Логин и (или) Пароль введены неверно!')
}