function addingDashes(array) {
    let fixedArray = [];
    fixedArray = [array[0]];
    for (let number=1; number<array.length; number++) {
        if (isNaN(array[number])){
            console.log(`All values must be NUMBERS!!`);
            return;
        }
        if((array[number-1]%2 === 0) && (array[number]%2 ===0)){
            
            fixedArray.push(`-`, array[number]);
            
        }
        else {
            fixedArray.push(array[number]);
        }
        
    }
    console.log(fixedArray);
    //console.log(fixedArray.join(''))
}

addingDashes([2,6,8,5,4,78,13,1,22,57]);
addingDashes([5,"sedc",0,true,56,2]);
addingDashes([0,2,5,4,6,8]);














