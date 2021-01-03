function parameters(parameter){
    var typeOfParameter = typeof(parameter);
    console.log(typeOfParameter);
    return typeOfParameter;
}

parameters(5);

parameters("5");

parameters(true);

parameters(null);

parameters();




