const users = [
    {
        username: 'David',
        status: 'online',
        lastActivity: 10
    },
    {
        username: 'Lucy',
        status: 'offline',
        lastActivity: 22
    },
    {
        username: 'Bob',
        status: 'online',
        lastActivity: 104
    }
]

function getOnlineUsers(arr){
    const onlineUsers = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i].status === 'online'){
            onlineUsers.push(arr[i].username)
        }
    }
    alert(`Сейчас в онлайн следующие пользователи: ${onlineUsers.join(', ')}`)
}
getOnlineUsers(users)