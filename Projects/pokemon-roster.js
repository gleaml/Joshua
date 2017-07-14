var prompt = require('prompt-sync')();

var pokeOne =[
   /*Name*/ ["Garchomp"],
   /*Type*/ ["Ground", "Dragon"],
   /*HP*/   [108],
   /*ATK*/  [130],
   /*DEF*/  [95],
 /*Legend*/ [false]

]
var pokeTwo =[
    /*Name*/["Incineroar"],
   /*Type*/ ["Fire", "Dark"],
   /*HP*/   [95],
   /*ATK*/  [115],
   /*DEF*/  [90],
 /*Legend*/ [false]

]
var pokeThree =[
    /*Name*/ ["Starmie"],
   /*Type*/ ["Water", "Psychic"],
   /*HP*/   [60],
   /*SPATK*/ [100],
   /*SPDEF*/ [85],
 /*Legend*/ [false],

]
var pokeFour =[
    /*Name*/ ["Cradily"],
   /*Type*/ ["Rock", "Grass"],
   /*HP*/ [86],
   /*ATK*/ [81],
   /*DEF*/ [97],
 /*Legend*/ [false]

]
var pokeFive =[
    /*Name*/ ["Eelektross"],
   /*Type*/ ["Electric"],
   /*HP*/ [85],
   /*ATK*/ [115],
   /*DEF*/ [80],
 /*Legend*/ [false]

]
var pokeSix =[
    /*Name*/ ["Serperior"],
   /*Type*/ ["Grass"],
   /*HP*/ [75],
   /*SPATK*/ [113],
   /*SpDEF*/ [95],
 /*Legend*/ [false]

]
var Pokes=[pokeOne, pokeTwo,pokeThree,pokeFour,pokeFive,pokeSix];
function logpokes(){
    //console.log(Pokes)
    for (var i=0; i<6; i++){
        var currentPoke = Pokes[i];
        var s = "Name: " + currentPoke[0][0] + " > Type:" + currentPoke[1] + " > HP: " + currentPoke[2][0] + " > ATK: " + currentPoke[3][0] + " > DEF: " + currentPoke[4][0] + " > Legend:" + currentPoke[5][0] ;
        console.log(s)
    }
} 
logpokes()