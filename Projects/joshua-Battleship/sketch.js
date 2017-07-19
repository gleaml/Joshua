function setup(){
    createCanvas(801,801);
    background(225);
}
var value="white";
function draw(){
    for (var i=0; i<8; i++){
        for (var j=0; j<8;j++){
            rect(i*100,j*100,100,100);
            fill("white");
        }
    }
    function mouseClicked() {
        rect(100,100,100,100);
        fill(value);
        if (value =="white"){
            if (mouseX<=rect[0]/*, mouseY*/){
                value="red";
            }
        
        }
    }
    
}    
       

//var grid = [[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],
    //[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],
    //[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],
   // [0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]];

// function randomShip(){
//     grid[random(0,8)][random(0,8]=random(0,1);
// }
// randomShip();
