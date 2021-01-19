let array = [3, 5, 6, 8, 11];
let array2 = [43,5,54,213,2];

function sumOfMinAndMax(input) {

    let min = Infinity;
    let max = -Infinity;
    let sum = 0;

    for(let i = 0; i < input.length; i++){
        while(input[i] > max){
            max = input[i];
            
        }
        

        while(input[i] < min){
            min = input[i];
        }

        sum = max + min;
        

    }
    console.log(`Max: ${max}`);
    console.log(`Min: ${min}`);
    console.log(`Sum: ${sum} \n \n`)
}

sumOfMinAndMax(array);
sumOfMinAndMax(array2);








