function setup(){
    createCanvas(500,500);
    background(225);
}
var xCor = 65;
var yCor = 35;
var x= 5;
var y =5;

function draw(){
    background(225);
    ellipse(xCor,yCor,50);
    fill("green");
    if(xCor < 5 || xCor > 500) x= -x;
    if(yCor < 5 || yCor > 500) y= -y;
    xCor += x;
    yCor += y;
    
}








 
    
        


