let health = +prompt('Введите число параметра "здоровье" для персонажа')

if (health < 0 || !health) {
    debugger
        alert('Параметр "здоровье" должен быть больше нуля!')
} else {
    debugger
    alert(`Параметр здоровье равен ${health}`);
}