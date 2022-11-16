function getDivisors(num) {
    if (!Number.isInteger(num) || num < 1) {
        alert('number должен быть целым числом и больше нуля!')
        return
    }
    let half = Math.floor(num / 2),
        count = 1;
    for (let i = 1; i <= half; i++) {
        if (!(num % i))
            ++count
    }
    return count
}

console.log(getDivisors(14))
console.log(getDivisors(30))
