//THis game needs to print a new picture of an ogre each time the button is pressed, as well as 
//update stats which include hp, gold, and ogres killed
// when you lose,hp -1, gold -1 , ogres slain stays the same
// when you win, hp stays same, gold + 10, ogres slain +1

var HP= 100;
var gold= 0;
var slain= 0;

function updateStats() {
    $('stats').text("HP: "+ HP + " Gold: " + gold + " Ogres Slain: "+ slain)
}
function attack() {
   if(HP > 0){
        //randomly decides if we win or lose based on Math.random()
        if(Math.random()*100>gold){
            gold+=10;
            slain++;
            $('#ogres').prepend('<p style="color:green">You Won! + 10 gold! </p>')
        } 
        else {
            HP--;
            gold--;
            $('#ogres').prepend('<p style="color=red">You Lost! -1 gold</p>')
        }
        updateStats();     
    }
    else{
        $('#ogres').prepend('<p style="color=red">GAME OVER!</p>')
    }
}


//needed in order to start
function setup(){
    //title
    $('body').append('<h1>Welcome to Ogre Fighter! v.1.0</h1>');
    //the stats for the game
    $('body').append('<div><h3>STATS<h3></div><p id="stats"</p></div>');
    //add a button
    $('body').append('<button on click="attack()">Attack the Ogre!</button>');
    //ogres
    $('body').append('<div id="ogres"></div>');
    
}
//When the document is ready, load setup.
$(document).ready(setup);

//$('body').append('')

