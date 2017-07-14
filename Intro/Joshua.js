//console.log("Joshua is awesome!");
//console.log("Hello world");

function rand(num){
    /* generates a random number between 0 and a number of your choosing */
    var randDec = Math.random() * num;
    var randInt = Math.floor(randDec);
    console.log(randInt);
    return randInt;
}

rand(2);
rand(30);
rand(400);