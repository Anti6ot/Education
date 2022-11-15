let numbers = [10, 4, 100, -5, 54, 2]
let sum = 0;

// Через цикл for
for (let i = 0; i < numbers.length; i++) {
    let arr = [] //если нельзя было изменять то я создал новый пустой массив
     arr[i] = numbers[i] ** 3; //так мы избежим изменения масс/numbers и получим результат в sum
    // (после того как цикл закончит работу масив
    // сотрется а получившиеся значение останется Забыл как этот трюк называется напомните))
    sum += arr[i];
}
console.log(sum); // 1158411
// debugger

// Через цикл for of
sum = 0;
debugger
for (let num of numbers){
    let arr = []
    arr = num ** 3;
    sum += arr;
}
console.log(sum); // 1158411
