const POSTS_URL = "https://jsonplaceholder.typicode.com/posts"
let isLoading = false

const createNewPost = async () => {
    try {
        isLoading = true
        const response = await fetch(POSTS_URL, {
            method: "POST"
        })
        if(!response.ok){
            throw new Error('ошибка в получение данных о пользователях')
        }
        return await response.json()
    } catch (err) {
        console.error('err', err)
    } finally{
        isLoading = false
}
}
createNewPost().then(result => {
    console.log(result)
})
    .catch(err => console.error(err))
