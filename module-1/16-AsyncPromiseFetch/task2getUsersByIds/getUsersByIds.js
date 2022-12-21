const createUsersElement = (text) => {
    const userElement = document.createElement('li')
    const userElAnchor = document.createElement('a')
    userElAnchor.href = '#'
    userElAnchor.textContent = text
    userElement.append(userElAnchor)

    return userElement
}

const USERS = 'https://jsonplaceholder.typicode.com/users'

const dataContainer = document.querySelector('#data-container')

const getUsersByIds = (ids) => {
    const requests = ids.map((id) => fetch(`${USERS}/${id}`))
    Promise.all(requests)
        .then((responses) => {
            const dataResults = responses.map((response) => response.json())
            console.log(dataResults)
            return Promise.all(dataResults)
        })
        .then((users) => {
            users.forEach((person) => {
                const userHTML = createUsersElement(person.name)
                dataContainer.append(userHTML)
            })
        })
        .catch((err) => {
            console.error(err)
        })
}

getUsersByIds([5, 6, 2, 1])