var btn = document.querySelector("#btn");
var txtinput= document.querySelector("#text-input");

var outputDiv=document.querySelector("#output");



console.log(txtinput);

function clickHandler(){ 
    outputDiv.innerText="djfjnjvfj" + txtinput.value;
}

btn.addEventListener("click",clickHandler)
