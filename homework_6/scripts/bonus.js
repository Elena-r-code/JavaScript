// let columns = prompt("How many columns will your table have?");
// let rows = prompt("How many rows will your table have? ");

// let tableBody = document.getElementsByTagName("tbody");

// function createTable(a, b){
//     for(let i=0; i<a.value; i++){ 
//         tableBody.innerHTML += (`<tr> Column: ${a[i]}`);
//         for(let j=0; j<b.value; j++){
//             tableBody.innerHTML += (`<td> Row: ${b[j]+1} </td>`);
//             tableBody.innerHTML += (`</tr`);
//         }
        
//     }
// }

// createTable(columns, rows); 

function createTable() {
    let rows = document.getElementById('rows').value;
    let columns = document.getElementById('cols').value;
    let theader = `<table border="1">\n`;
    let tbody = "";

    for(let i=0; i<rows; i++){
        tbody += `<tr>`;
        for(let j=0; j<columns; j++){
            tbody += `<td>`;
            tbody += `Col : ` + (j+1) + `,` + `Row : ` + (i+1);
            tbody += `</td>`;
        }
        tbody += `</tr>\n`;
    }
    let tfooter = `</table>`;
    let doneTable = document.getElementById(`wrapper`);
    doneTable.innerHTML =theader + tbody + tfooter;

}

let myButton = document.getElementById("myButton");
myButton.addEventListener("click", createTable);