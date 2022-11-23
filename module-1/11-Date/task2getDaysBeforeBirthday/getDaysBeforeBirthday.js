
let myBD = new Date(2023, 3, 24)

const getDaysBeforeBirthday = (nexBirthdayDate) => {
    let date = new Date()
    let result = Math.floor((nexBirthdayDate.getTime() - date) / 60000 / 60 / 24)
    return result
}

console.log(getDaysBeforeBirthday(myBD))