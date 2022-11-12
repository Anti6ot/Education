let javaScriptDescription = 'JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.'
const divNum = javaScriptDescription.length / 2
let str = javaScriptDescription.slice(0, divNum).replaceAll('a', 'A').replaceAll('а','А').replace(/\s/g, "").repeat(3)

console.log(str.charAt(str.length / 2))
console.log(str)
