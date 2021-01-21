let numbers = [5, 6, 45, 76, 23, 4, 87];

let myList = document.getElementById("list");

function printNumber(input) {
    let i = 0;
    let sum = 0;
    let bonus = "";
    while (i < input.length) {
        let number = input[i];
        sum += number;
        bonus += (`${number} + `);
        myList.innerHTML += `<li> ${number}\n</li> `;  
        i++;      
    }
 
    myList.innerHTML += `<p> \nSum: ${sum} \n </p>`;
    myList.innerText += (`\n${bonus} = ${sum}`);
    
 
}

printNumber(numbers);








