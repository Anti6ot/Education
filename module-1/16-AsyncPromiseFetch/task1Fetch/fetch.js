
const USERS = 'https://jsonplaceholder.typicode.com/users'

const createUsersElement = (text) => {
    const userElement = document.createElement('li')
    const userElAnchor = document.createElement('a')
    userElAnchor.href = '#'
    userElAnchor.textContent = text
    userElement.append(userElAnchor)

    return userElement
}

const toggleLoader = () =>{
    const loaderHTML = document.querySelector('#loader')
    const isHidden = loaderHTML.hasAttribute('hidden')
    if(isHidden){
        loaderHTML.removeAttribute('hidden')
    } else {
        loaderHTML.setAttribute('hidden', '')
    }
}

const dataContainer = document.querySelector('#data-container')

const getAllUsers = () => {
    toggleLoader()
    const result = fetch(USERS, {
        method: 'GET',
    })
    result
        .then((res) => {
            if(!res.ok){
                throw new Error('Ошибка запроса')
            }
            return res.json()
        })
        .then((users) => {
            users.forEach(person => {
                const usersHTML = createUsersElement(person.name)
                dataContainer.append(usersHTML)
                })
        })
        .catch((err) => {
            console.error('error', err)
        })
        .finally(() =>{
            toggleLoader()
        })
}
getAllUsers()

