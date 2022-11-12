const clientName = prompt('Введите имя клиента').trim()
const clientSpentToday = +prompt('Сколько клиент потратил сегодня?').trim()
let clientSpentForAllTime = +prompt('Сколько клиент потратил за все время?').trim()
let sale = 0
if(isNaN(clientSpentToday) || isNaN(clientSpentForAllTime)){
    alert('Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть числом! Перезагрузи страницу, чтобы повторить попытку.')
}else{
    clientSpentForAllTime += clientSpentToday
    if(clientSpentForAllTime > 3000){
        sale += 2
    }
    if(clientSpentForAllTime > 7000) {
        sale += 3
    }
}
console.log(`Скидка мистера/миссис ${clientName} составляет ${sale}%`)
