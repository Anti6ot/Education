const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб']

function leaveQueueWithoutParcel(item) {

    for(let i = item.length; i > 0 ; i--){
        let nik = item.splice(0, 1)
    alert(`${nik} не получил(а) посылку и ушел(ла) из очереди”`)
    }
}

const giveParcel = (arr) => {
    let array = []
        return function splice(parm) {
            if( parm === 'gift' && arr.length > 4) {
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

console.log(peopleWaiting)

