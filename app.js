var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// console.log(txtInput);
function clickHandler(){
    outputDiv.innerText="xxxx " + txtInput.value;
    // console.log("input",txtInput.value);
};

btnTranslate = addEventListener("click",clickHandler);

