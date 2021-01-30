$(document).ready(function(){
    
    let myInput = $("#myText");
    let myColor = $("#myColor");
    let myButton = $("#generate");
    let messages = $("#messages");

    myButton.click(function(){
            let color = myColor.val()
            if(myInput.val().length ==0){
                messages.text(`Please enter some text`);
            }
            else{
                messages.css("color", color);
                messages.text(` ${myInput.val()}`);
            }
    })
})

