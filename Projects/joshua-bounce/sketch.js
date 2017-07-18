function setup(){
    createCanvas(500,500);
    background(225);
}
var xCor = 0;
var yCor = 0;
var x= 5;
var y =5;

function draw(){
    background(225);
    if(xCor<0||xCor>500) x= -x;
    if(yCor<0||yCor>500) y= -y;
    xCor +=x;
    yCor +=y;
    ellipse(xPos,yPos,50);
    fill("green");
}








 
    
        


