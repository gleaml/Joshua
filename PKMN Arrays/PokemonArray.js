myPokemonArray = ["incineroar","starmie","cradily","eelektross","staraptor","goodra"];
var firstToFight = myPokemonArray[0]; 
var secondToFight= myPokemonArray[1];
console.log(myPokemonArray); 
//You only need 4 pokemon for a Triple Battle! Pop the last two!
myPokemonArray.pop();
myPokemonArray.pop();
console.log(myPokemonArray); 
//You need 2 more pokemon for a Champion Battle! Push two more in!
myPokemonArray.push("chansey")
myPokemonArray.push("gengar")
console.log(myPokemonArray);
//Length of the Roster
RosterSize= myPokemonArray.length
console.log(RosterSize)
console.log()
//Print the name of the last pokemon in the Roster.
console.log(myPokemonArray[5])
console.log()

for (var i=0; i<6; i++){
    console.log(myPokemonArray[i])
}
console.log()
for (var i=5; i>-1; i-=1){
    console.log(myPokemonArray[i])
}
console.log()
for (var i=0; i<myPokemonArray.length; i++){
    console.log(myPokemonArray[i])
}
console.log()
for (var i=0; i<6; i++){
    if (myPokemonArray.length>=5){
    console.log(myPokemonArray[i])
    }
    
}