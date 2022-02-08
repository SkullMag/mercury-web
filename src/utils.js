async function requestWord(word) {
    var url = "http://localhost:8080/api/definition/{}";
    let response = await fetch(url.replace("{}", word));
    return await response.json()
}


function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1)
}

function pronounceWord(url) {
    var player = new Audio(url);
    player.play()
}

function validateEmail(email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
}

export {requestWord, capitalize, pronounceWord, validateEmail};
