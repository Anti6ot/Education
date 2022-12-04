class Dictionary{
   #words = {}
    #name
    constructor(name) {
        this.#name = name
    }

    add = function (word, description) {
       let wObj = {
                   'word': word,
                   'description': description,
               }
        if(!this.#words[word]){
            this._addNewWord(word, wObj)
        }
    }
    remove = function (word){
        delete this.#words[word]
    }
    gеt = function (word){
        return this.#words[word]
    }
    showAllWords = function (){
        Object.values(this.#words).forEach((el) => {
            console.log(`${el.word} - ${el.description}` )
        })
    }
//    ---------------------------------------------
    get mainName(){
       return this.#name      //Для чего этот метод?
    }

    set mainName(name){
        this.#name = name
    }

    get allWords(){
       return this.#words
    }

    _addNewWord(wordKey, wordObj){
        this.#words[wordKey] = wordObj
    }
}

// const dictionary = new Dictionary('Толковый словарь')
// dictionary.add('JavaScript', 'популярный язык программирования')
// dictionary.add('удалить', 'удалить свойство')
// dictionary.add('Веб-разработчик', 'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие')
// dictionary.remove('удалить')
// // console.log(dictionary.gеt('Веб-разработчик'))
// dictionary.showAllWords()
//
// console.log(dictionary)

