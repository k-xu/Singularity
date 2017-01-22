var diameter;
var angle = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    diameter = height - 10;
    noStroke();
    fill(255, 204, 0);
}

function draw() {

    //just showing you a sketch will be a resizable card
    //delete all this and replace it with your own sketch
    background(255, 10);
    
     //see the corners of your sketch / think about card resizing.
    var d2 = 10 + (sin(angle+ PI/2) * diameter/2) + diameter/2;
    
    var counter = 0
    
    while (counter < 4) {
        if (counter = counter + 1) {
            strokeWeight(10);
            stroke(counter);
            fill(counter, random(255));
        }
             
    //one way of handling multiple input types
    if (touchIsDown === true) {
        ellipse(windowWidth/2, windowHeight/2, d2-touchX-100, d2-touchY-100);
    } else {
        ellipse(windowWidth/2, windowHeight/2, d2-mouseX-100, d2-mouseY-100);
    }
            angle += 0.01;
            counter = counter + 1   
    }
}


