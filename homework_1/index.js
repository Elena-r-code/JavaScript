// Exercise 1

var a = 2;
console.log(a);
console.log(typeof a);
var b = true;
console.log(b);
console.log(typeof b);
var c = "Hello!";
console.log(c);
console.log(typeof c);



//Exercise 2

var onePhone = 119.95;
console.log("The price for one phone is " + onePhone);
var tax = (119.95/100)*5;
console.log("The tax for one phone is " + tax);
var phone_30 = (onePhone*30) + (tax*30);
console.log("The price for 30 phones is " + phone_30);

//Bonus

var one_phone = prompt("Enter price for one phone:");
console.log("The price for one phone is " + one_phone);
var tax_rate = prompt("Enter tax rate for one phone in percentage:");
console.log("The tax rate for one phone is " + tax_rate);
var tax_value = (one_phone/100)*tax_rate;
var phone30 = (one_phone*30) + (tax_value*30);
console.log("The price for 30 phones with tax included is " + phone30);

//Homework par 2

var r = prompt("Enter radius to calculate the area od circle");
console.log("The radius is" + r);
var pi = 3.14;
var area = pi*(2*r);
console.log("The area of the circle with radius " + r);
console.log("is " + area);