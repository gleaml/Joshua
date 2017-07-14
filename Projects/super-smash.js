var prompt = require('prompt-sync')();
var mashArray=["Unova Pokemon League", "Paper Mario",
 "Pac Maze", "Rainbow Road", "Yoshi's Island"];
var firstQuestion=[3,7,8,4,6,9];
var secondQuestion=["Lucario", "Link", "Mario", 
"Villager", "Zero Suit Samus"];
function inputFight(){
    var strikes=prompt("How many times will you strike?");
    firstQuestion.push(strikes)
    var fighter=prompt("Who will you choose to fight?");
    secondQuestion.push(fighter)
}
inputFight()
function rand(num){ 
    return Math.floor( Math.random() * num);
    }
function theResult(){
    console.log("You fought " + secondQuestion[rand(6)]+" in the " + mashArray[rand(5)] +" and hit them "+ firstQuestion[rand(6)] + " times. Too bad. Mewtwo wins")
}
theResult()