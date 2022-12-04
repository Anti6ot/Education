const peopleWithVisa = [
    {
        firstName: 'Stasia',
        lastName: 'Ward',
        criminalRecord: true,
        passportExpiration: '19.06.2040',
    },
    {
        firstName: 'Elliot',
        lastName: 'Baker',
        criminalRecord: false,
        passportExpiration: '04.06.2041',
    },
    {
        firstName: 'Leighann',
        lastName: 'Scott',
        criminalRecord: true,
        passportExpiration: '31.07.2039',
    },
    {
        firstName: 'Nick',
        lastName: 'Pop',
        criminalRecord: false,
        passportExpiration: '31.12.2010',
    },
]

function allowVisa(arr){
    let date = new Date().getTime()

    let array = arr.map((value) => {
        let reversePassportDate = value.passportExpiration.split('.').reverse().join('-')
        let datePassportExpInMs = new Date(reversePassportDate).getTime()

        if(date < datePassportExpInMs){
            return value
        }
    }).filter( el => el !== 'undefined' ? el : '')

    return array
}

const result = allowVisa(peopleWithVisa)
console.log('result', result)
