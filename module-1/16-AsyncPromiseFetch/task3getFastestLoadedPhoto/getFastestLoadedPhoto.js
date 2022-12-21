const createUsersElement = (text) => {
    const userElement = document.createElement('li')
    const userElAnchor = document.createElement('img')
    userElement.className = 'photo-item'
    userElAnchor.className = 'photo-item__image'
    userElAnchor.src = text
    const h3 = document.createElement('h3')
    h3.className = 'photo-item__title'
    h3.textContent = 'accusamus beatae ad facilis cum similique qui sunt'

    userElement.append(h3)
    userElement.append(userElAnchor)

    return userElement
}

const dataContainer = document.querySelector('#data-container')

const PHOTOS = 'https://jsonplaceholder.typicode.com/photos'

const getFastestLoadedPhoto = (ids) => {
    const requests = ids.map((id) => fetch(`${PHOTOS}/${id}`))
    Promise.race(requests)
        .then((responses) => {
            console.log(responses)
            const obj = responses.json()
            return obj
        })
        .then((users) => {
            const url = createUsersElement(users.url)
            dataContainer.append(url)
        })
        .catch((err) => {
            console.error(err)
        })
}

getFastestLoadedPhoto([12, 60, 10])