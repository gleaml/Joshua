function setup(){
    createCanvas(900,900);
    background(150);
}
var x=0;

function draw(){
    background(150);
    ellipse(x/5,x/3, x/2);
    fill(random(0,255));
    x += 100
    
}