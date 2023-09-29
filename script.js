function getWord(){
    fetch("https://random-word-api.herokuapp.com/word")
    .then(res=>res.json())
    .then(word=>document.getElementById("random-word").innerText =word[0])
    .catch(arr=>console.log(arr))

}

getWord()