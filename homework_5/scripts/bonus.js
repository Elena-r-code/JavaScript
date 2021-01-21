let recipeName = prompt("Enter the name for the recipe: ");
let numOfIngredients = prompt("How many ingredients do we need?");

let nameRecipe = document.getElementById("header");
nameRecipe.innerHTML += `<h1>${recipeName}</h1>`;
nameRecipe.innerHTML += `<h3> We need ${numOfIngredients} ingredients. </h3>`;
nameRecipe.innerHTML += `<ul id = "unordered">Ingredients:`;

for(i = 0; i < numOfIngredients; i++){
    let ingredients = prompt("Enter the ingredients needed:");  
    let listU = document.getElementById("unordered");
    listU.innerHTML += `<li> ${ingredients} </li>`;
   // nameRecipe.innerHTML += `<ul> Ingredients: <li> ${ingredients[i]} <li>`;
}

nameRecipe.innerHTML += `</ul>`;





