

// function getKiller(suspectInfo, deadPeople){
//     const itemsDuplicates = {}
//
//     for(let prop in deadPeople){
//         console.log(deadPeople[prop])
//         for (let [key, value] of Object.entries(suspectInfo)) {
//             for(let val in value){
//                if(value[val] === deadPeople[prop]){
//                    itemsDuplicates[key] = + 1
//                }
//             }
//         }
//     }
//     console.log(itemsDuplicates)
//
// }

function getKiller(suspectInfo, deadPeople) {
    const list = Object.fromEntries(

        Object.entries(suspectInfo)
            .map(([k, v]) => ([k, v.reduce((a, c) => (a[c] = c, a), {})]))
    )
    console.log(list)

    for (let name in list) {
        let found = true
        for (let i = 0; i < deadPeople.length; i++) {
            if (!list[name][deadPeople[i]]) {
                found = false
                break
            }
        }
        if (found) return name
    }

    return "No results"
}

console.log(
    getKiller(
        {
            James: ["Jacob", "Bill", "Lucas"],
            Johnny: ["David", "Kyle", "Lucas"],
            Peter: ["Lucy", "Kyle"]
        },
        ["Lucas", "Bill"]
    )
); // Убийца James
