const clientsEstimations = []
const askClientToGiveEstimation = () => {
    let ques =  +prompt('Как вы оцениваете нашу кофейню от 1 до 10?').trim()

    if(ques >= 1 && ques <= 10){
        clientsEstimations.push(ques)
    }

}
for(let i = 0; i <= 5; i++){
    askClientToGiveEstimation()
}
const goodEstimations = clientsEstimations.filter(value => value > 5)
const notGoodEstimations = clientsEstimations.filter(value => value <= 5)
console.log(goodEstimations.length)
console.log(notGoodEstimations.length)




