const goals = [8, 1, 1, 3, 2, -1, 5]
let min = Infinity
let max = -Infinity
let findIndx = 0
const notEffectiveMatch = []
const notEffectiveMatchIndex = []
let totalGoals = 0
let autofail = false
let answAutofail = 'нет'

for (let i = 0; i < goals.length; i++) {
    if (goals[i] < min && goals[i] !== -1) {
        min = goals[i];
    }
    if(goals[i] > max) {
        max = goals[i];
        findIndx = i
    }else if(goals[i] === min){
        notEffectiveMatch.push(goals[i])
        notEffectiveMatchIndex.push(i + 1)
    }

    if(goals[i] !== -1){
        totalGoals += goals[i]
    }else{
        autofail = true
    }
}
const ariphMean = Math.round(totalGoals / goals.length)

if (autofail){
    answAutofail = 'да'
}

const sortArr = Array.from(goals)
sortArr.sort((a, b) => {
    return a - b
})


alert(`Самый результативный матч был под номером ${findIndx + 1}. В нем было забито ${max} гол(ов).`)
alert(`Самые не результативные матчи были под номерами ${notEffectiveMatchIndex}. В каждом из них было забито по ${notEffectiveMatch} мячу(а).`)
alert(`Были автоматические поражения: ${answAutofail}`)
alert(`Общее количество голов за сезон равно ${totalGoals}`)
alert(`Среднее количество голов за матч равно ${ariphMean}`)

for(let prop of sortArr){
    alert(prop)
}

console.log(goals)


