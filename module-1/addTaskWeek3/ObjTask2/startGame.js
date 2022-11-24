function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//мне кажется так короче получилось и метотд не дублируется
/*const hero = {
    name: 'Batman',
    health: 100,
};
const enemy = {
    name: 'Joker',
    health: 100,
}

function heat(obj){
        return  obj.health -= 10

}


function startGame(enemyPlayer, heroPlayer){

        while (enemyPlayer.health > 0 && heroPlayer.health > 0){
            const result = getRandomNumberInRange(0, 1)

            if(result === 1 && heroPlayer){
                heat(enemyPlayer)
            } else {
                heat(heroPlayer)
            }
        }

        if(enemyPlayer.health <= 0){
            return alert(`${heroPlayer.name} победил! У него осталось ${heroPlayer.health} здоровья`)
        } else {
            return alert(`${enemyPlayer.name} победил! У него осталось ${enemyPlayer.health} здоровья`)
        }

}*/

//Прочитал задание ещё раз и добавил методы
/*const hero = {
    name: 'Batman',
    health: 100,
    heatEnemy: function(obj) {
        return  obj.health -= 10
    }
}
const enemy = {
    name: 'Joker',
    health: 100,
    heatHero: function(obj) {
        return  obj.health -= 10
    }
}

function startGame(enemyPlayer, heroPlayer){

    while (enemyPlayer.health > 0 && heroPlayer.health > 0){
        const result = getRandomNumberInRange(0, 1)

        if(result === 1){
            heroPlayer.heatEnemy(enemyPlayer)
        } else {
            enemyPlayer.heatHero(heroPlayer)
        }
    }

    if(enemyPlayer.health <= 0){
        return alert(`${heroPlayer.name} победил! У него осталось ${heroPlayer.health} здоровья`)
    } else {
        return alert(`${enemyPlayer.name} победил! У него осталось ${enemyPlayer.health} здоровья`)
    }

}*/


console.log(startGame(enemy, hero))


console.log('endObj',enemy)
console.log('endOb',hero)