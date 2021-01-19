let firstNames = ["Bob", "Jill", "Lucas", "Ana"];
let lastNames = ["Gregory", "Wurtz", "Smith", "Brown"];
let numbers = [1, 2, 3, 4];

function fullNames(fNames, lNames, num){
     let fullName = "";
    for(i = 0; i < fNames.length; i++){
         fullName = fNames[i] + " " + lNames[i];
        
            console.log(num[i] + "." + " " + fullName);
          
        
    }
}

fullNames(firstNames, lastNames, numbers);