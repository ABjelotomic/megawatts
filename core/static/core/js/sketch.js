// Simple p5.js sketch following the mouse
let x, y;
let opacity = 100;
let isMoving = false;



function setup() {
  createCanvas(windowWidth, windowHeight);
  x = windowWidth / 2
  y = windowHeight / 2
  noStroke();
  noCursor();
}

function draw() {
  background(20);

  fill(0, 160, 0, opacity);
  noStroke();
  ellipse(mouseX, mouseY, 20, 10);

  isMoving = true;

  if (mouseX == pmouseX && mouseY == pmouseY) {
    isMoving = false;
  }

  if (isMoving) {
    opacity = 255;
    isMoving = false;
  } else {
    if (opacity > 0) {
      opacity -= 1.5
    }
  }

  fill(0, 20);
  stroke(60);
  strokeWeight(10); //large outline
  rect(25, 90, 400, 300, 20);

}
