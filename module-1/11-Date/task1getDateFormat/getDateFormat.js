
const date1 = new Date(1997, 3, 24)

const getDateFormat = (date, sep = '.') =>{
    let Year = date.getFullYear()
    let Month = date.getMonth() + 1
    let Day = date.getDate()

    Month = Month < 10 ? '0' + Month : Month
    Day = Day < 10  ? '0' + Day : Day

    return `${Day}${sep}${Month}${sep}${Year}`

}

console.log(getDateFormat(date1, '-'))