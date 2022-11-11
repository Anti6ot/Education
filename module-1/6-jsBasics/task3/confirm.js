const ques = ['JavaScript появился в 1995 году?','Спецификация JavaScript называется ECMAScript?','JavaScript был создан за 1 месяц?']
const faq = [' JavaScript как язык веб-программирования появился в 1995 году. Он был создан известным разработчиком Бренданом Айком.',
    'Спецификация ECMAScript-это стандартизированная спецификация скриптового языка, разработанная Бренданом Эйхом из Netscape; первоначально она называлась Mocha, затем LiveScript и, наконец, JavaScript.',
'JavaScript , был создан за 10 дней']
const answer = [true, true, false]
for(let i = 0; i < ques.length; i++){
    let ask = confirm(ques[i])
    if(ask === answer[i]){
        alert('Верно')
    } else {
        alert(faq[i])
    }
}

