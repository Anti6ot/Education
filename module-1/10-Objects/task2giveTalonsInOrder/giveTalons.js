const ordersArr = [4, 2, 1, 3];
const people = [
    { id: 1, name: "Максим" },
    { id: 2, name: "Николай" },
    { id: 3, name: "Ангелина" },
    { id: 4, name: "Виталий" },
];

const giveTalonsInOrder = (patients, orders) => {
    const sortArr = []
    for(let i = 0; i < orders.length; i++){
        for(let j = 0; j < orders.length; j++) {
            if (orders[i] === patients[j].id) {
                sortArr.push(patients[j])
            }
        }
    }
    return sortArr
}

console.log(giveTalonsInOrder(people, ordersArr))