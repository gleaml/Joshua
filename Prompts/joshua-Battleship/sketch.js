function setup(){
    createCanvas(801,801);
    background(225);
}
var grid = [[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]];

var value="white";
function draw(){
    console.log(value);
    for (var i=0; i<8; i++){
        for (var j=0; j<8;j++){
            rect(i*100,j*100,100,100);
            fill("white");
        }
    }        
}    
function mouseClicked(){
    if (mouseX >=0 && mouseX <= 100 && mouseY>=0 && mouseY<=100){ 
        value="red";
        fill(value);
        rect(100,100,100,100);
            }
    value="white";
}     


// function randomShip(){
//     grid[random(0,8)][random(0,8]=random(0,1);
// }
// randomShip();
