const attacker = {
    archer: 30,
    footSoldier: 55,
    cavalry: 10,
    artillery: 3,
}
const defender = {
    archer: 33,
    footSoldier: 50,
    cavalry: 40,
    artillery: 10,
}
//этот кейс для дробей
/*attacker.checkChancesToWin = function (defenderObject){
    let chance = 0
    let amount = Object.keys(defenderObject).length
    for (let key in defenderObject){
        if(defenderObject[key] <= this[key]){
            chance ++
        }
    }
    return [chance, amount]
}*/

attacker.checkChancesToWin = function (defenderObject) {
    let chance = 0
    let amount = Object.keys(defenderObject).length
    for (let key in defenderObject) {
        if (defenderObject[key] <= this[key]) {
            chance++
        }
    }
    let percentage = (chance / amount) * 100
    return percentage
}

attacker.improveArmy = function (){
    for (let key in this){
        if(typeof this[key] === 'number'){
            this[key] += 5
        }
    }
}
//этот кейс с дробями (он неудобен тем что нельзя повышать статы до бесконечности или можно но это очень много кода)
/*attacker.attack = function (defenderObject){
    let resultStats = attacker.checkChancesToWin(defenderObject)
    console.log(resultStats)
    resultStats[0] === resultStats[1] - 1
        ? alert(`Мы усилились! Мы несомненно победим! Наши шансы высоки!`)
        : alert(`Наши шансы равны ${resultStats}. Необходимо укрепление!`)
          attacker.improveArmy()
}*/
attacker.attack = function (defenderObject){
    let resultStats = attacker.checkChancesToWin(defenderObject)
    console.log(resultStats)
    resultStats >= 75 && resultStats <= 100
        ? alert(`Мы усилились! Мы несомненно победим! Наши шансы высоки!`)
        : alert(`Наши шансы равны ${resultStats}. Необходимо укрепление!`)
    attacker.improveArmy()
}

attacker.attack(defender)
attacker.attack(defender)
attacker.attack(defender)
attacker.attack(defender)
attacker.attack(defender)
attacker.attack(defender)
attacker.attack(defender)
attacker.attack(defender)
attacker.attack(defender)

console.log(attacker)
