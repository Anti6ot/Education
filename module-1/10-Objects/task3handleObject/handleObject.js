const student = {
    name: 'Maxim',
    programmingLanguage: 'JavaScript',
}
console.log(student)
function  handleObject(obj, key, action) {
    for(let prop in obj) {
        if(action === 'get'){
            if(key === prop){
                return obj[prop]
            }
        }
        if(action === 'add'){
            obj[key] = ''
            return obj
        }
        if(action === 'delete'){
            if(prop === key){
                delete obj[key]
                return obj
            }
        }
    }

}

console.log(handleObject(student, 'faculty', 'add'))
