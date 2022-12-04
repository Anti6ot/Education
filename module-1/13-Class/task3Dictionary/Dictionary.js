class Dictionary{
    words = {}
    constructor(name) {
        this.name = name
    }

    add = function (word, description) {
        if(!this.words[word]){
            this.words[word] = {
                'word': word,
                'description': description,
            }
        }
    }
    remove = function (word){
        delete this.words[word]
    }
    gеt = function (word){
        return this.words[word]
    }
    showAllWords = function (){
        Object.values(this.words).forEach((el) => {
            console.log(`${el.word} - ${el.description}` )
        })
    }
}

const dictionary = new Dictionary('Толковый словарь')
dictionary.add('JavaScript', 'популярный язык программирования')
dictionary.add('удалить', 'удалить свойство')
dictionary.add('Веб-разработчик', 'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие')
dictionary.remove('удалить')
// console.log(dictionary.gеt('Веб-разработчик'))
dictionary.showAllWords()

console.log(dictionary)