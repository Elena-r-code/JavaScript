
let menu =parseInt(prompt("Enter number: \n 1 -> get balance, 2 -> make deposit, 3-> withdrawal, 4 - exit"));

let myButton = document.getElementById("myButton");
let message = document.getElementById("message");

let atm = {
    balance:5000
};

    if(menu !=1 && menu !=2 && menu !=3 && menu !=4 ){
        message.innerText="Plese choose one of the following options: 1, 2, 3 or 4";
    }

    if(menu == 1){
        message.innerText="Your balance is "+ atm.balance;
    }
    if(menu ==2){
        let deposit = parseInt(prompt('How much much money would you like to deposit?'));
        atm.balance +=deposit;

        message.innerText='Success. Your balance now is ' + atm.balance;
    }

    if(menu == 3){
        let withdrawal = parseInt(prompt("How much money would you like to withdrawal?"));
        if(atm.balance < withdrawal){
            message.innerText="You don't have enough money on your account";
        }
        else{
            atm.balance-=withdrawal;
            message.innerText=`Succsess. Your balance now is ` + atm.balance;
        }
    }
    if(menu ==4){
        message.innerText='Take your card in 30 seconds!'
    }

   



