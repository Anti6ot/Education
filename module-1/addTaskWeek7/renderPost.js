const URL_POSTS = `https://jsonplaceholder.typicode.com/posts/`
const POSTS_COMMENTS = `https://jsonplaceholder.typicode.com/comments?postId=`

const postTitle = document.querySelector('.post__title')
const postText = document.querySelector('.post__text')
const divPostComments = document.querySelector('.post__comments')

function renderHTML(email, body) {

    const createPostComment = document.createElement('div')
    createPostComment.className = 'post-comment'

    const createPostCommentAuthor = document.createElement('span')
    createPostCommentAuthor.className = 'post-comment__author'
    createPostCommentAuthor.textContent = email

    const createPostCommentText = document.createElement('span')
    createPostCommentText.className = 'post-comment__text'
    createPostCommentText.textContent = body

    createPostComment.append(createPostCommentAuthor, createPostCommentText)
    return createPostComment
}


async function renderPost(postId) {
    try {
        const dataPosts = await fetch(`${URL_POSTS}${postId}`)
        const commentsPost = await fetch(`${POSTS_COMMENTS}${postId}`)

        if (dataPosts.ok && commentsPost.ok) {
            //поулчаем данные json и добавляем в заголовок и текст новости
            const resultCommentsPost = await commentsPost.json()
            const resultDataPosts = await dataPosts.json()

            postTitle.textContent = resultDataPosts.title
            postText.textContent = resultDataPosts.body


            //пробегаемся циклом по комментариям и вызываем функцию которая при каждой итерации
            //добавляет в ДОМ элемент с классом .post__comments коммент и текст
            resultCommentsPost.forEach((value) => {
                divPostComments.append(renderHTML(value.email, value.body))
            })
            console.log(`resultDataPosts`, resultDataPosts)
            console.log(`resultCommentsPost`, resultCommentsPost)

        } else {
            throw new Error(dataPosts.status || commentsPost.status)

        }


    } catch (e) {
        const errorBlock = document.createElement('div')
        errorBlock.textContent = `Ошибка:${e} в ходе выполнения`
        divPostComments.append(errorBlock)
    }


}

renderPost(6)

