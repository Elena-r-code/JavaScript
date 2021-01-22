let firstInput = document.getElementsByTagName("input")[0];
let secondInput = document.getElementsByTagName("input")[1];
let button = document.getElementsByTagName("input")[2];

let contentDiv = document.getElementById("content");

function greeting(){
    let greet = (`Hello ${firstInput.value} ${secondInput.value} !`);
    contentDiv.innerHTML += (`<p> ${greet} </p>`);
}

button.addEventListener("click", greeting);

function remove(){
    firstInput.value = "";
    secondInput.value = "";
}

contentDiv.addEventListener("mouseover",remove)
   




    

