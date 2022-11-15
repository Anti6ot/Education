let getSumOfNumbers = (num, type = 'odd') => {
    let sum = 0
    if(typeof num === "string" || num === undefined || num === null){
        return  NaN
    } else {
        for(let i = 0; i <= num; i++){
            if(type === 'odd' && i % 2) {
                sum += i
            }
            if(type === 'even' && i % 2 == 0) {
                sum += i
            }
            if(type === ''){
                sum += i
            }
        }
    }

    return sum
}
console.log(getSumOfNumbers(10, ''))