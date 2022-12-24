const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos'
const getTodosByIds = async (arrids) => {
    try {
        const request = await arrids.map(value => fetch(`${TODOS_URL}/${value}`))

        const responses = await Promise.all(request)
        const dataResult = responses.map((res) => {
            if (!res.ok) {
                throw new Error(`Error! status: ${res.status}`)
            }
            return res.json()
        } )
        console.log(dataResult)
        const allTasks = await Promise.all(dataResult)
        console.log(allTasks)


    } catch (err) {
        console.error(err)
    }

}
const todos = getTodosByIds([43, 21, 55, 100, 10])

console.log(todos)





