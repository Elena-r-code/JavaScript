let fName = document.getElementById("firstName");
let lName = document.getElementById("lastName");
let age = document.getElementById("age");
let saveButton = document.getElementById("saveButton");
let contentDiv = document.getElementById("content")

function addingStudents(firstName, lastName, studentAge) {
    saveButton.addEventListener("click", function () {
        let student = {
            studentName: firstName.value,
            studentLastName: lastName.value,
            ageOfStudent: studentAge.value
        }
        
        let studentInfo =[student.studentName + " " + student.studentLastName + " " + student.ageOfStudent];
        console.log(studentInfo);
        contentDiv.innerHTML += (`<ul>`);
        contentDiv.innerHTML += (`<li>${studentInfo}</li>`);
        contentDiv.innerHTML += (`</ul>`)

    })
}
addingStudents(fName, lName, age);







