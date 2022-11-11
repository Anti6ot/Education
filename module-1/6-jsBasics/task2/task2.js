// const ques1 = +prompt('Сколько будет 2 + 2?').trim()
// const ques2 = +prompt('Сколько будет 2 * 2?').trim()
// const ques3 = +prompt('У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?').trim()
// const ques4 = +prompt('У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?').trim()
// const ques5 = +prompt('Сколько будет 2 + 2 * 2?').trim()

//cycle for
const queses = ['Сколько будет 2 + 2?', 'Сколько будет 2 * 2?', 'У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?',
    'У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?',
'Сколько будет 2 + 2 * 2?']
const answer = [4, 4, 1, 12, 6]
let correctAnswers = 0;
let incorrectAnswers = 0;

// if( ques1 === 4 ){
//     alert('Ответ Верный')
//     correctAnswers++
// }
// if( ques2 === 4 ) {
//     alert('Ответ верный')
//     correctAnswers++
// }
// if (ques3 === 1){
//     alert('Ответ верный')
//     correctAnswers++
// }else {
//     alert('Ответ неверный')
//     incorrectAnswers++
// }
// if ( ques4 === 12 ){
//     alert('Ответ верный')
//     correctAnswers++
// }else {
//     alert('Ответ неверный')
//     incorrectAnswers++
// }
// if( ques5 === 6){
//     alert('Ответ верный')
//     correctAnswers++
// }else {
//     alert('Ответ неверный')
//     incorrectAnswers++
// }

for(let i = 0; i < queses.length; i++){
   let answ =  +prompt(queses[i]).trim()
    if(answ === answer[i]){
        alert('Ответ Верный')
        correctAnswers++
    }else{
        alert('Ответ неверный')
        incorrectAnswers++
    }
}
alert(`Конец теста! Правильные ответы - ${correctAnswers}; Неправильные ответы - ${incorrectAnswers}`)