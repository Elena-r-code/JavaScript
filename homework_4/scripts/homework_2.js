var array = [6, 56, 43, 12, 8];

function sumOfNumbers(input) {
    sum = 0;

    for (i = 0; i < input.length; i++) {
        sum += input[i];
    }
    console.log(`Sum of ${input} is ${sum}`);
}

function validateNumber(input) {
    if (input == NaN) {
        console.log(`Error! Please enter a valid number`)
    }
    else {
        console.log(`${input} is a valid number`);
    }
}

sumOfNumbers(array);

validateNumber(array[0]);
validateNumber(array[1]);
validateNumber(array[2]);
validateNumber(array[3]);
validateNumber(array[4]);


