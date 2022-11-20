const showSuccessMessage = (msg) => console.log(msg)
const showErrorMessage = (msg) => console.error(msg)

const checkTextOnErrorSymbol = (txt, errSymbol, succesClbck, errClbck) => {

    let status = true

    for(let i = 0; i < text.length; i++){
        if (text[i] === errSymbol){
            status = false
            errClbck(`Найден запрещенный символ ${errSymbol} под индексом ${i}`)
        }
    }
    if(status) {
        succesClbck(`В данном тексте нет запрещенных символов`)
    }
}

const text = 'Привет! Как дела! Давно мы с тобой не виделись.';

checkTextOnErrorSymbol(text, 'а', showSuccessMessage, showErrorMessage);