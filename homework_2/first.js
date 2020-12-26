var number1 = prompt("Enter first number:");
var number0ne = parseInt(number1);

var number2 = prompt("Enter first number:");
var numberTwo = parseInt(number2);

var number3 = prompt("Enter first number:");
var numberThree = parseInt(number3);

var number4 = prompt("Enter first number:");
var numberfour = parseInt(number4);

var number5 = prompt("Enter first number:");
var numberFive = parseInt(number5);





    //BEZ LOGICKI OPERATORI

var biggestNumber = null;

if (number1 > number2) {
    biggestNumber = number1;
} else {
    biggestNumber = number2;
}

if (biggestNumber > number2) {
    biggestNumber = biggestNumber;
} else {
    biggestNumber = number2;
}

if (biggestNumber > number3) {
    biggestNumber = biggestNumber;
} else {
    biggestNumber = number3;
}

if (biggestNumber > number4) {
    biggestNumber = biggestNumber;
} else {
    biggestNumber = number4;
}

if (biggestNumber > number5) {
    biggestNumber = biggestNumber;
} else {
    biggestNumber = number5;
}

alert(biggestNumber);




    //SO LOGICKI OPERATORI

if (numberOne > numberTwo && numberOne > numberThree  && numberOne > numberFour && numberOne > numberFive) {
    alert(numberOne);
    }
    else if (numberTwo > numberOne && numberTwo > numberThree  && numberTwo > numberFour && numberTwo > numberFive) {
        alert(numberTwo);
        }
        else if (numberThree > numberOne && numberThree > numberTwo  && numberThree > numberFour && numberThree > numberFive) {
            alert(numberThree);
            }
            else if (numberFour > numberOne && numberFour > numberTwo  && numberFour > numberThree && numberFour > numberFive) {
                alert(numberFour);
                }
                else {
                    alert(numberFive);
                }

