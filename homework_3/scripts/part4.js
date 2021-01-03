function team(girls, boys){
if(girls<10 && boys<10){
    console.log("Girls: " + " " + 0 + girls +  " " + "Boys: " + 0 + boys) ;
}
else if(girls<10 && boys>=10){
    console.log("Girls: " + 0 + girls + " " + "Boys: " + boys);
}
else if(girls>=10 && boys<10){
    console.log("Girls: " + " " + girls + " " + "Boys: " + 0 + boys);
}

else{
        console.log("Girls: " + " " + girls + " " + "Boys: " + boys);
    }

}


team(3, 7);

team(10,5);

team(13, 8);

team(12,16);



