$(document).ready(function(){
let inputName = $("#name");
let button = $("#myButton");
let myHeader = $("#myHeader");

button.click(function(){
    let nameVlue = inputName.val();
    myHeader.text(`Hello  ${nameVlue}!`);
    
})

})