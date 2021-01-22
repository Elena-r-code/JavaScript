let fName = document.getElementsByTagName("input")[0];
let lName = document.getElementsByTagName("input")[1];
let email = document.getElementsByTagName("input")[2];
let pass = document.getElementsByTagName("input")[3];
let buttonSubmit = document.getElementById("button");

let myContentDiv = document.getElementById("myContentDiv");

let array = [fName.value, lName.value, email.value];

buttonSubmit.addEventListener("click", function(){
    for(let i = 0; i<array.length; i++){      
        myContentDiv.innerHTML += (`<p> ${array[i]} </p>`);
        debugger
        }
});


