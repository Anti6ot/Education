const getSumOfSequence = (num) => {
    let arr = []
    for(let i = 1; i <= num; i++){
        arr.push(i)
    }
    let sum = arr[0] + arr[arr.length -1]

    return `[${arr}] == ${sum}`
}

console.log(getSumOfSequence(10))