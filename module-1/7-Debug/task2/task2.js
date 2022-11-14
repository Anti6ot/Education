const temperatureInCelsius = +prompt('Введите температуру в градусах Цельсия');

if (temperatureInCelsius === 0) { //в пременную temperatureIn.. получаю строковое значение (перевел в тип данных Number)
    alert('0 градусов по Цельсию - это температура замерзания воды')
} else if (temperatureInCelsius > 0) {
    alert('Для замерзания воды температура должна быть 0 градусов по Цельсию либо ниже');
}
debugger

const temperatureInFahrenheit = (temperatureInCelsius) * 9 / 5 + 32; //Тут ошибка в названии переменной получаю undefined
alert(`${temperatureInCelsius} градусов по Цельсию - это ${temperatureInFahrenheit} по Фаренгейту.`);//не верно подобран символ
debugger
