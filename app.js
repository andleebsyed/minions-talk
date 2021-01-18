// alert("Hello my name is Syed Andleeb")
// var result = prompt("What's your name")
// alert("Heya " +  result)
var btnTranslate = document.querySelector("#btn-translate")
var textInput = document.querySelector("#text-input")
var textOutput = document.querySelector("#text-output")
// inputValue.addEventListener("")
btnTranslate.addEventListener("click",function ClickHandler(){ 
    console.log("I Was Clicked");
    
    textOutput.innerText = textInput.value
})


