// alert("Hello my name is Syed Andleeb")
// var result = prompt("What's your name")
// alert("Heya " +  result)
var btnTranslate = document.querySelector("#btn-translate")
var textInput = document.querySelector("#text-input")
var textOutput = document.querySelector("#text-output")
var serverUrl  = "https://api.funtranslations.com/translate/minion.json"
function urlGenerator(input){
 return serverUrl + "?" + "text=" + input
 
}
function errorHandler(error){
    alert("There is something wrong with the server!Please try again later")
}

function ClickHandler(){ 
    var inputText = textInput.value
    fetch(urlGenerator(inputText))
    .then(response => response.json())
    .then (json => textOutput.innerText = json.contents.translated )
    .catch(errorHandler);
}


btnTranslate.addEventListener("click",ClickHandler)