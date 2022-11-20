const matrix = [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ],
]
const array = []
for(let i = 0; i < matrix.length; i++){
    array.push(...matrix[i])
}

console.log(array)
