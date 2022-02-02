async function requestWord(word) {
    var url = "http://localhost:8080/api/definition/{}";
    let response = await fetch(url.replace("{}", word));
    return await response.json()
}


function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1)

}

export {requestWord, capitalize};
