const groceries = {
    "73Wakv": {
        name: "Orange Juice",
        price: 1.5,
        discount: 10
    },
    "5L3db9": {
        name: "Chocolate",
        price: 2,
        discount: 0
    },
    "21kasp": {
        name: "Mac",
        price: 88.32,
        discount: 10
    },
    "5L55db9": {
        name: "Headphones",
        price: 4,
        discount: 0
    }
    // more items...
}

function getTotalPriceOfShoppingBag(shoppingBagArray){
    let priceIncludingDiscount = []
    let totalPrice = 0
    let countObj = 0
    for(let key in shoppingBagArray){
        countObj ++
        if(shoppingBagArray[key].discount > 0){
            let discount = shoppingBagArray[key].price * shoppingBagArray[key].discount / 100
            priceIncludingDiscount.push(+discount.toFixed(2))
            totalPrice += +discount.toFixed(2)
        } else {
            priceIncludingDiscount.push(shoppingBagArray[key].price)
            totalPrice += shoppingBagArray[key].price
        }
    }
    return(
        `Колличесто товаров ${countObj} Общая стоимость товаров составила ${totalPrice} $`
    )



}
console.log(getTotalPriceOfShoppingBag(groceries))