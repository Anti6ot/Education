const myName = 'Nikolai'
const programmingLanguage = 'JavaScript'
const courseCreatorName = 'Vladilen'
const reasonText = 'i love this job'
const numberOfMonth = 8
let myInfoTxt =`Всем привет! Меня зовут ${myName}.Сейчас я изучаю язык 
программирования ${programmingLanguage} на курсе по ${programmingLanguage}
у ${courseCreatorName}. Я хочу стать веб-разработчиком, потому что ${reasonText}.
До этого я изучал(а) ${programmingLanguage, numberOfMonth} месяцев(а).
Я уверен(а), что пройду данный курс до конца!`

myInfoTxt = myInfoTxt.replaceAll('JavaScript','javascript').replaceAll('курс', 'КУРС')

console.log(myInfoTxt)
console.log(myInfoTxt.length)
console.log(myInfoTxt[0],myInfoTxt.charAt(myInfoTxt.length - 1))


