const coffees = ['Latte', 'Cappuccino', 'Americano']

let coffeeName = prompt('Поиск кофе по названию:')
coffees.findIndex(function (el, ind){
    if(coffeeName.toLowerCase() === el.toLowerCase()){
        alert(`Держите ваш любимый кофе ${el}. Он ${ind + 1}-й по популярности в нашей кофейне`)
    }
})



