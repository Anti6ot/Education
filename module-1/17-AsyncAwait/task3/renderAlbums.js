const ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums'
const body = document.body


const renderHtml = (txt) => {
    const dataContainer = document.createElement('ol')
    dataContainer.className = 'data-container'

    const albumName = document.createElement('li')
    albumName.textContent = txt

    dataContainer.append(albumName)
    return dataContainer
}

const toggleLoader = () => {
    const loading = document.createElement('li')
    loading.className = 'loading'
    loading.textContent = 'Загрузка...'
    body.append(loading)
}




const renderAlbums = async () => {
    try {
        toggleLoader()
        const response = await fetch(ALBUMS_URL)


        if (!response.ok) {
            throw new Error('Произошла ошибка в получении данных об альбомах...')
        }
        const result = await response.json()
        result.forEach((el) => {
            body.append(renderHtml(el.title))
        })
    } catch (err) {
        const dataContainer = document.createElement('ol')
        dataContainer.className = 'data-container'
        dataContainer.textContent = err
        body.append(dataContainer)
    } finally {
        const toggle = document.querySelector('.loading')
        toggle.remove()
    }


}
renderAlbums()