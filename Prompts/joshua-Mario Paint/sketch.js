function setup(){
    createCanvas(900,900);
    background(225);
}
function mouseDragged(){
    for (var i = 0; i < 100; i++) {
        var r = random(50);
        ellipse(mouseX, mouseY, random(5,10), random(5,10));
        fill(random(0,255),random(0,255),random(0,255))
        }
           
    }
 
    
   