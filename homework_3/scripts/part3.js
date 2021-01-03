

function dogYears(years){
    years = prompt("Enter your dog age in human years.");
    var calcYears = (years*7);
    console.log("Your dog's age is" + " " + calcYears + " " + "years.");
    
}


dogYears();


function humanYears(hYears){
    hYears = prompt("Enter your dogs age in dogs years.");
    var calcHyears = (hYears/7);
    calcHyears = parseInt(calcHyears);
    console.log("Your dogs age in human years is" + " " + calcHyears + " " + "years.");
}

humanYears();
