// const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб']

// function leaveQueueWithoutParcel(item) {
//
//     for(let i = item.length; i > 0 ; i--){
//         let nik = item.splice(0, 1)
//     alert(`${nik} не получил(а) посылку и ушел(ла) из очереди”`)
//     }
// }

//Раскоментируй код выше и поочерёдно раз/ком код ниже


//--------------Вот Этот вариан решения мне понравился больше всего т.к. у юзера есть выбор и рекурсия это моя любимая тема---------------

/*
function given(arr) {
    let hook = confirm('Отдать посылку?')
    if(hook === true){
        let array = arr.shift()
        alert(`${array} получил(а) посылку. В очереди осталось ${arr.length} человек`)
        return (given(arr))
    }else {
        leaveQueueWithoutParcel(arr)
    }
}

given(peopleWaiting)
*/



//---------------Этот вариант просто с помощью цикла и условия выводит пользователей получ/не получ пос.--------

/*const giveParcel = (arr) => {
    let array = []
        for(let i = 0; i < arr.length; i++){
            if(arr.length > 4) {
                let name = arr.splice(0, 1)
                array = name
                alert(`${name} получил(а) посылку. В очереди осталось ${arr.length} человек`)
            } else {
                leaveQueueWithoutParcel(arr)
            }
        }

}

giveParcel(peopleWaiting)
console.log(peopleWaiting)*/



//------------этот с параметром -----------------
/*const giveParcel = (arr) => {
    let array = []
    return function (prop) {
        if( prop === 'gift' && arr.length > 4) {
            let name = arr.splice(0, 1)
            return (array = name,
                alert(`${name} получил(а) посылку. В очереди осталось ${arr.length} человек`))
        } else {
            leaveQueueWithoutParcel(arr)
        }
    }

}

const func = giveParcel(peopleWaiting)

func('gift')
func('gift')
func('gift')
func('gift')

console.log(peopleWaiting)*/



