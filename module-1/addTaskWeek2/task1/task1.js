const checkQuestionAnswer = (ques, answer) => {
    const userQuest = prompt(ques).toLowerCase().trim()
    const correctAnswer = answer.toLowerCase().trim()
    if (userQuest === correctAnswer){
        alert('Ответ верный')
    } else {
        alert('Ответ неверный')
    }
}
checkQuestionAnswer('Арбуз это фрукт или ягода?', 'Ягода')
checkQuestionAnswer('Сколько в среднем зубов у взрослого человека?', '32')
checkQuestionAnswer('Как называется самая маленькая птица в мире?', 'Колибри')