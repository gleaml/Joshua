var pokemonRoster = [
    pokeOne ={
        "Name" : "Garchomp" ,
        "Type" : ["Ground","Dragon"],
        "HP" : 108,
        "DEF" : 95,
        "ATK" : 130,
        "LEGEND" : false 
    },
    pokeTwo ={
        "Name" : "Incineroar",
        "Type" :  ["Fire", "Dark"],
        "HP" : 95,
        "DEF" : 90 ,
        "ATK" : 115,
        "LEGEND" : false
    },
    pokeThree ={
        "Name" :"Starmie" ,
        "Type" : ["Water", "Psychic"],
        "HP" : 60 ,
        "DEF" : 85,
        "ATK" : 100 ,
        "LEGEND" : false
    },
    pokeFour ={
        "Name" : "Cradily",
        "Type" : ["Rock", "Grass"],
        "HP" : 86,
        "DEF" : 97,
        "ATK" : 81,
        "LEGEND" : false
    },
    pokeFive ={
        "Name" : "Eelektross",
        "Type" : "Electric",
        "HP" : 85,
        "DEF" : 80,
        "ATK" : 115,
        "LEGEND" : false
    },
    pokeSix ={
        "Name" : "Serperior",
        "Type" : "Grass",
        "HP" : 75,
        "DEF" : 95,
        "ATK" : 113,
        "LEGEND" : false
    },
]
function printRoster(){
    console.log(pokemonRoster);
}
//printRoster()

//console.log(pokemonRoster[0].HP)

function pokemonAttacked(){
    for (var i=0; i<6; i+=1){
        pokemonRoster[i].HP -= num;
    }
}
//pokemonAttacked(10)
//printRoster(num)
var prompt = require('prompt-sync')();
function rand(num){ 
    return Math.floor(Math.random() * num);
    }
function randomATK(){
    var attack=prompt("How much HP will you attack for?");
    pokemonRoster[rand(6)].HP -= attack;
}
//randomATK();
//printRoster();
function newPokemon(){
    this.Name= Name,
    this.Type=Type,
    this.HP=HP,
    this.ATK=ATK,
    this.Legend=Legend
}
function removerandPoke(){
    num=rand(6)
   pokemonRoster.splice(num,1) 
}
removerandPoke()
printRoster();