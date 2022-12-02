class HardWordsDictionary extends Dictionary {

    add = function (word, description) {
        if(!this.words[word]){
            this.words[word] = {
                'word': word,
                'description': description,
                isDifficult: true,
            }
        }
    }

}

const hardWordsDictionary = new HardWordsDictionary('Сложные слова')
hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством без ' +
    'специальной подготовки, обладая только поверхностными знаниями.');

hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое' +
    'значение старого слова.');

hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.');

hardWordsDictionary.remove('неологизм');

hardWordsDictionary.showAllWords();
console.log(hardWordsDictionary)