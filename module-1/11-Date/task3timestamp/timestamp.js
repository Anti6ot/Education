
const dateNow = new Date()
function addDays(date, days) {
    let q = new Date()
    let result = new Date(q.getFullYear(), q.getMonth(), q.getDate()+days, q.getHours(), q.getMinutes())
    return result
}

console.log(addDays(dateNow, 600))