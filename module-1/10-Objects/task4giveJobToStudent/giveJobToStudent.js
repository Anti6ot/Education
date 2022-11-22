const student = {
    fullName: 'Максим',
    experienceInMonths: 12,
    stack: ['HTML', 'CSS', 'JavaScript', 'React'],
}

const giveJobToStudent = (obj, jobName) => {
        alert(`Поздравляем! У студента ${obj.fullName} появилась новая работа! Теперь он ${jobName}`)
        obj.job = jobName
        return obj
}

console.log(giveJobToStudent(student, 'Веб-разработчик'))