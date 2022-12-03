const todaysWinner = {
    prize: '10 000$',
}

const winnerApplicants = {
    '001': {
        name: 'Максим',
        age: 25,
    },
    '201': {
        name: 'Светлана',
        age: 20,
    },
    '304': {
        name: 'Екатерина',
        age: 35,
    },
}
function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min)) + min ;
}

const getWinner = (aplicants, winnerObject) => {
    let arrNumWinnerApp = Object.keys(aplicants)
    const randomNum = getRandomNumberInRange(0, arrNumWinnerApp.length)
    let win = undefined
    const userWinner = {}
    arrNumWinnerApp.forEach((item, index) => {
        if(randomNum === index){
          win = item
        }
    })

    for (let key in aplicants){
        if(win === key){
            userWinner.prize = winnerObject.prize
            userWinner.name = aplicants[key].name
            userWinner.age = aplicants[key].age
        }
    }
    return userWinner

}

const resultWinner = getWinner(winnerApplicants, todaysWinner);
console.log('resultWinner', resultWinner);
// { prize: '10 000$', name: 'Максим', age: 25 }