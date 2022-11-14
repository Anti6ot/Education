const salaryOfJuniorDeveloper = 500;
const numberOfJuniorDevelopers = 3;
let taxPercentage = 13;
let totalJuniorDevelopersSalary = 0; //Переменной не задано значение и мы к undefind + Number вот и получаем NaN
debugger

for (let i = 0; i < numberOfJuniorDevelopers; i += 1) {
    const salaryWithTax = salaryOfJuniorDeveloper-(salaryOfJuniorDeveloper*taxPercentage/100);
    totalJuniorDevelopersSalary += salaryWithTax;
    debugger
}
console.log('totalJuniorDevelopersSalary', totalJuniorDevelopersSalary);