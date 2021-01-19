let array = ["Hello", "there", "students", "of", "SEDC"];
let array2 = ["You", "should", "send", "your", "homework", "on", "time", "!", "!"];
let array3 = ["Hello", "there"];

function greet(input) {
    let greeting = "";
    for (i = 0; i < input.length; i++) {
        greeting += (`${input[i]} `);


    }
    console.log(greeting);
    return greeting;
}

greet(array);
greet(array2);
greet(array3);
