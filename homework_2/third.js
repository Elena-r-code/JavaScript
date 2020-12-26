var yearOfBirth = prompt("Enter your year of birth");
var numberYear = parseInt(yearOfBirth);

var calculation = (numberYear-4)%12;

if( calculation == 0) {
    alert("Your Chinese Zodiac Sigh is Rat");
} 
else if (calculation == 1) {
    alert("Your Zodiac Sign is Ox");
}
else if (calculation == 2) {
    alert("Your Zodiac Sign is Tiger");
}
else if (calculation == 3) {
    alert("Your Zodiac Sign is Rabbit");
}
else if (calculation == 4) {
    alert("Your Zodiac Sign is Dragon");
}
else if (calculation == 5) {
    alert("Your Zodiac Sign is Snake");
}
else if (calculation == 6) {
    alert("Your Zodiac Sign is Horse");
}
else if (calculation == 7) {
    alert("Your Zodiac Sign is Goat");
}
else if (calculation == 8) {
    alert("Your Zodiac Sign is Monkey");
}
else if (calculation == 9) {
    alert("Your Zodiac Sign is Rooster");
}
else if (calculation == 10) {
    alert("Your Zodiac Sign is Dog");
}
else {
    alert("Your Zodiac Sign is Pig");
}