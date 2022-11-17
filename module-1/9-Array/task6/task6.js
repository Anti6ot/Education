const numbers = [10, 4, 100, -5, 54, 2];
let sum = 0

//for
/*for (let i = 0; i < numbers.length; i++){
    sum += numbers[i] ** 3
}*/

//for of
/*for(prop of numbers){
        sum += prop ** 3
}*/

//forEach
// numbers.forEach(val => sum += val ** 3)

//Reduce
/*const sum2 = numbers.reduce((previousValue, currentValue) => {
     return previousValue + currentValue ** 3
},0 )
console.log(sum2)*/

console.log(sum)
console.log(numbers)