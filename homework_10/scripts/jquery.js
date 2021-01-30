$(document).ready(function () {
    let myButton = $("#myButton");

    myButton.click(function () {
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/todos",
            success: function (result) {
                for (let item of result) {
                    console.log(`${item.id} ${item.title}`);
                    if (item.completed === true) {
                        console.log(`Completed`);                       
                    }
                    else {
                        console.log(`Not completed`);                      
                    }                   
                    return;
                }
            },
            error: function (err) {
                console.log(err);
            }
        })
    })
})