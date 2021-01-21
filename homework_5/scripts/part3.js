let title = document.getElementById("title");
title.innerText = "WEIGHT CALCULATOR IN CHICKEN";


let weight = prompt("Enter weight in kg");
let myDiv = document.getElementById("mainnDiv");


 function weightInChickens(input){
     let weightInChicken = input*2;
     myDiv.innerHTML = `<p> The result is : ${weightInChicken} </p>`;    
 }

 weightInChickens(weight);
