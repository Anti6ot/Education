const getMathResult = (array) => {
    const exp = []
    let result = ''
    if (array.length >= 4) {
        for (let i = 0; i < array.length; i++) {
            let num = +array[i]
            if (!isNaN(num) || array[i] === '>' || array[i] === '<' || array[i] === '=' || array[i] === '+' || array[i] === '-' || array[i] === '*' || array[i] === '/') {
                exp.push(array[i])
            }
        }
        return getMathResult(exp)

    }
    if(array.length === 3){
        switch(array[1]) {
            case '>':
                result = +array[0] > +array[2]
                break
            case '<':
                result = +array[0] < +array[2]
                break
            case '=':
                result = +array[0] === +array[2]
                break
            case '+':
                result = +array[0] + +array[2]
                break
            case '-':
                result = +array[0] - +array[2]

                break
            case '*':
                result = +array[0] * +array[2]

                break
            case '/':
                result = +array[0] / +array[2]

                break

            default:
                alert('error')
                result = 'error'
        }
    }
    return result
}
console.log(getMathResult(['asdasdas','200', '+', 'asd', 300, 'asda', 'asdas']))
console.log(getMathResult(['20', '-', '5'])); // 15
console.log(getMathResult([100, '/', 100])); // 1
console.log(getMathResult([2, '-', 2])); // 0
console.log(getMathResult(['5', '>', '10'])); // false
console.log(getMathResult(['1', '=', 1])); // true
console.log(getMathResult(['1', '**', 1])); // 'Ошибка'
console.log(getMathResult(['+', '100', 10])); // 'Ошибка'