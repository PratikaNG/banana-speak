var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");


var serverURL = "https://api.funtranslations.com/translate/pirate.json"
	
function getTranslationURL(text){
    return serverURL  +"?" +"text=" + text
    // var txtInputText = txtInput.value;  
};


//error handling
function errorHandler(error){
    console.log("error occured",error);
    //alert("Something went wrong with the server.Please try again later");
}


function clickHandler(){
    var inputText = txtInput.value; //taking input  
    //calling server for processing
    fetch(getTranslationURL(inputText))
    .then(response => {
        response.json();
        console.log(response)
    })
    .then(data => {
        var translatedText = data.contents.translated;
        output.innerText = translatedText;
    }).catch(errorHandler);
}
    
btnTranslate = addEventListener("click",clickHandler);

