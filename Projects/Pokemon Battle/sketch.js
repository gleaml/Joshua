function setup(){
    createCanvas(800,600);
    background(225);

    stroke("red"); 
    strokeWeight(5); 
    
    fill("white");
    arc(width/2, height/2, 200,200, 0, PI, CHORD);
   
    fill("white");
    arc(width/2, height/2, 200,200, PI, 0, CHORD);

    fill("red");
    ellipse(width/2, height/2, 50);

    fill("white");
    ellipse(width/2, height/2, 49);

    stroke("black"); 
    strokeWeight(5);

    fill("white");
    ellipse(width/2, height/2, 25);

    button = createButton('Attack!');                // Create button with text 'submit'
    button.position(400,550);     // Set x,y position of submit button
    button.mousePressed(pokemonAttacks(Luxray,Charizard));               // Do something when button pressed
}

//Attacks
function newAttacks(Name,Type,Power){
    this.Name= Name,
    this.Type=Type,
    this.Power=Power    
}
//HP
function HP(value){
    this.value=value
}
//The Actual Pokemon
var Luxray = [[new newAttacks('Thunderbolt', 'Electric','95'),new newAttacks('Thunder', 'Electric','120'), new newAttacks('Crunch', 'Dark','80'),new newAttacks('Ice Fang', 'Ice','65')], [new HP(301)];
var Charizard = [[new newAttacks('Fire Blast', 'Fire','120'),new newAttacks('Flamethrower', 'Fire','95'), new newAttacks('Dragon Claw', 'Dragon','80'),new newAttacks('Wing Attack', 'Flying','65')], [new HP(297)];

//HP Changing
function pokemonAttacks(pokemon1,pokemon2){
    pokemon2[1].HP -= pokemon1[0][0].Power;
    console.log("Luxray attacked Charizard with "+ pokemon1[0][0].Name +" and dealt "+pokemon1[0][0].power +" damage.");
    pokemon1[1].HP -= pokemon2[0][0].Power;
    console.log("Charizard attacked Luxray with "+ pokemon2[0][0].Name +" and dealt "+pokemon2[0][0].power +" damage.");

}

// The Models 
function draw(){
    rect(660,50,100,100);
    fill("yellow");

    rect(50,360,100,100);
    fill("red");
}
 


    
