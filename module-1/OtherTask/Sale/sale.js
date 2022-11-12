const clientName = prompt('Введите имя клиента').trim()
const clientSpentToday = +prompt('Сколько клиент потратил сегодня?').trim()
let clientSpentForAllTime = +prompt('Сколько клиент потратил за все время?').trim()
let sale = 0
if(isNaN(clientSpentToday) || isNaN(clientSpentForAllTime)){
    alert('Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть числом! Перезагрузи страницу, чтобы повторить попытку.')
}else {
    if (clientSpentForAllTime > 100) {
        sale += 10
    }
    if (clientSpentForAllTime > 300 ) {
        sale += 10
    }
    if (clientSpentForAllTime > 500) {
        sale += 10
    }
}
    let dis = clientSpentToday / 100 * sale
    let count = clientSpentToday - dis
    alert(`Вам предоставляется скидка в ${sale}%!`)
    clientSpentForAllTime += count
    alert(`Спасибо, ${clientName}! К оплате ${count}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`)

