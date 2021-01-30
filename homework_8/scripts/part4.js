$(document).ready(function () {
    let n1 = parseInt(prompt("Enter the first number"));
    let n2 = parseInt(prompt("Enter second number:"));
    let n3 = parseInt(prompt("Enter third number:"));
   
    let printHeader = $("#printAverage");

    function getAverage(number1, number2, number3){
        if(isNaN(number1) || isNaN(number2) || isNaN(number3)){
            printHeader.text(`You must enter NUMBERS!`)
        }
        else{
            let averageNumber = (number1+number2+number3)/3;
            if(averageNumber>=10){
                printHeader.css("color", "green");
                printHeader.text(`The average is ${averageNumber}`);
            }
            else{
                printHeader.css("color", "red");
                printHeader.text(`The average is ${averageNumber}`);
            }
        }
    }

    getAverage(n1, n2, n3);
   
})