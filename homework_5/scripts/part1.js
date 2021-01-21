let firstHeader = document.getElementById("myTitle");
firstHeader.innerText = "I changed the first header.";

let firstParagraph = firstHeader.nextElementSibling;
firstParagraph.innerText = "I changed this as well.";

let secondParagraph = document.getElementsByClassName("paragraph")[1];
secondParagraph.innerText = "I can't believe I changed this";

let secondHeader = document.getElementsByTagName("h1")[1];
secondHeader.innerText = "I want to eat pizza";

let parentDiv = document.getElementsByTagName("div")[2];
let child = parentDiv.lastElementChild;
child.innerText = "Corona go away!!"