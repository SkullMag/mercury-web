async function requestWord(word) {
    var url = "https://api.dictionaryapi.dev/api/v2/entries/en/{}";
    let response = await fetch(url.replace("{}", word));
    if (response.status === 200) {
        var json_data = await response.json();
        var valuesToReturn = [];
        json_data.forEach((elem) => {
            valuesToReturn.push({
                    partOfSpeech: elem.meanings[0].partOfSpeech,
                    word: word,
                    definition: elem.meanings[0].definitions ? elem.meanings[0].definitions[0].definition : null,
                    example: elem.meanings[0].definitions ? elem.meanings[0].definitions[0].example : null
                });
        });
        return valuesToReturn
    }
}


function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1)

}

export {requestWord, capitalize};
