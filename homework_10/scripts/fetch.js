let myButton = document.getElementById("myButton");
myButton.addEventListener("click", function(){
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response =>{
        response.json()
        .then(data=>{
            for(let item of data){
                console.log(item.id + " " + item.title)
                if(item.completed === true){
                    console.log(`Completed`)
                    return;
                }
                else{
                    console.log(`Not completed`);
                    return;
                }
            }
            
        });
    })
    .catch(err=>{
        console.log(err);
    })
})