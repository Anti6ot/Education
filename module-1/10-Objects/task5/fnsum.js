function sum(...arg) {
    let sum = 0
    for(let i = 0; i < arg.length; i++){
        sum += +arg[i]
    }
    return sum
}

console.log(sum(10, 15, 249, 653, 846))