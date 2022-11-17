const coffees = ['Latte', 'Cappuccino', 'Americano'];
const prices = [1.5, 1, 2];

const updatedPrices = prices.map(price => price + 0.5)

updatedPrices.forEach(function(value, index){
        alert(`Кофе ${coffees[index]} сейчас стоит ${value} евро`)
})
console.log(updatedPrices)