
$(document).ready(function(){
    let myButton = $("#remove");
    myButton.click(function(){
        $(`select`).children(`option[value="Red"]`).remove();
        $(`select`).children(`option[value="Blue"]`).remove();
        $(`select`).children(`option[value="Green"]`).remove();
        
    })

    let addButton = $("#add");
    let optionAdded = $("#addOption");
    let mySelect = $("#myColor");
    addButton.click(function(){
        
        mySelect.append(`<option value = ${optionAdded.val()}>${optionAdded.val()}</option>`);

    });
})

