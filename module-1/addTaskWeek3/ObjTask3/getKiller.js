

function getKiller(suspectInfo, deadPeople){
    const itemsDuplicates = {}
    for(let key in suspectInfo){
        suspectInfo[key].forEach(item => {
            itemsDuplicates[item] = itemsDuplicates.hasOwnProperty(item)
                ? itemsDuplicates[item] + 1
                : 1
        })
    }
    console.log(itemsDuplicates)

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
