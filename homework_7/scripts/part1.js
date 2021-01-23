
let animal = {
    name : prompt("Enter the name of the pet:"),
    kind : prompt("Enter the kind of your pet:"),
    speak: function(input){
        console.log (this.kind + " " + this.name + " " + `says: ` + input);
    } 
}

animal.speak("Please give me more fish..");


