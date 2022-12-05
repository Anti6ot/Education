
class CarService {

    static DefaultWorkingHours = {
        from: '9:00',
        till: '20:00',
    }

    constructor(name, workingHours = CarService.DefaultWorkingHours) {
        this.name = name
        this.workingHours = workingHours

    }

    repairCar(carName){
        if(carName === 'undefined' || carName === null){
            console.error(`Вам необходимо указать название машины, чтобы ее отремонтировать”`)
        } else {
            const hoursNow = new Date().getHours()
            const HoursFromOpen = this.workingHours.from.split(':')[0]
            const HoursTillOpen = this.workingHours.till.split(':')[0]

            if(hoursNow < HoursTillOpen || hoursNow > HoursFromOpen){
                alert(`Сейчас отремонтируем вашу машину ${carName} ! Ожидайте пожалуйста`)
            } else {
                alert(`К сожалению, мы сейчас закрыты. Приходите завтра`)
            }

        }
    }
}

const carService = new CarService('RepairCarNow', { from: '8:00', till: '20:00' });
carService.repairCar('BMW')
console.log('ResultFn', carService)