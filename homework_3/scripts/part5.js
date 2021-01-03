function atm(accMoney){
    alert("You have " + accMoney + " on your account");
    let = ammount = prompt("Enter ammount of money you want to take out of your account");
    var moneyLeft = (accMoney - ammount);
    if(accMoney>ammount){
    console.log("You have " + moneyLeft + " left on your acconut");
    console.log("Take your money in 10 seconds");
}

else{
    console.log("Not enough money");
}

}


atm(3000);

