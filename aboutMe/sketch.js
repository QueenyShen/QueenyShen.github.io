let d = 200; // diameter of circle
let x = d/2 // x-coordinate starts at 50
let y = d/2// y-coordinate starts at 50
let vx = 2; // velocity in x-direction
let vy = 2; // velocity in y-direction
let isMouseOverBall = false; // flag to track if mouse is over the ball

let d1 = 250; 
let x1 = d1/2 
let y1 = d1/2; 
let vx1 = 2;
let vy1 = 2; 
let isMouseOverBall1 = false; 

let d2 =300; 
let x2 = d2/2; 
let y2 = d2/2; 
let vx2 = 2; 
let vy2 = 2;
let isMouseOverBall2 = false; 

function setup() {
	var canvas = createCanvas(windowWidth, windowHeight);
	canvas.parent('sketch-holder');
  
  x = random(d / 2, windowWidth - d / 2); 
  y = random(d / 2, windowHeight - d / 2); 
  
  x1 = random(d1 / 2, windowWidth - d1 / 2); 
  y1 = random(d1 / 2, windowHeight - d1 / 2); 
  
  x2 = random(d2 / 2, windowWidth - d2 / 2); 
  y2 = random(d2 / 2, windowHeight - d2 / 2); 
   vx = random(-2, 2);
  vy = random(-2, 2); 
  
  vx1 = random(-2, 2); 
  vy1 = random(-2, 2);
  
  vx2 = random(-2, 2); 
  vy2 = random(-2, 2); 

}

function draw() {
  background(151, 227, 0);
  
  if (isMouseOverBall) {
    fill(255);
    noStroke();
    ellipse(x, y, d);
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(20);
    text("Hi I'm Queeny Shen.", x, y);
  } else {
    fill(207, 255, 135);
    noStroke();
    ellipse(x, y, d);
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(48);
    text("?", x, y);
  }

  if (!isMouseOverBall) {
    x = x + vx; // updating the x-coordinate
    y = y + vy; // updating the y-coordinate
  }
  
  // Draw and update first circle
  if (isMouseOverBall1) {
    fill(255);
    noStroke();
    ellipse(x1, y1, d1);
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(14);
    text("I’m from Shenzhen China, but I ", x1, y1-20);
    text("grew up in Canada and moved back ", x1, y1);
    text("to China during primary school.", x1,y1+20)
    text("And I LOVE GAMING.", x1, y1+40);
  } else {
    fill(252, 248, 143);
    noStroke();
    ellipse(x1, y1, d1);
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(48);
    text("?", x1, y1);
  }

  if (!isMouseOverBall1) {
    x1 = x1 + vx1; // updating the x-coordinate for first circle
    y1 = y1 + vy1; // updating the y-coordinate for first circle
  }

  // Draw and update second circle
  if (isMouseOverBall2) {
    fill(255);
    noStroke();
    ellipse(x2, y2, d2);
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(12);
    text("Why did I choose CD?", x2, y2-80);
    text(" At the very beginning, I wasn’t entirely sure ",x2,y2-50)
    text("whether I REALLY wanted to study graphic design", x2, y2-30)
  text("I was interested in this area , however I didn't want to", x2, y2-10);
  text("limit myself to such a specific field, therefore I chose", x2, y2+10);
  text("CD.Compared to graphic design majors at other ",x2,y2+30)
  text("universities, I believe that CD at Parsons would ",x2,y2+50)
  text("give me the opportunity to learn more and",x2,y2+70)
  text("explore areas other than just",x2,y2+90)
  text("graphic design.",x2,y2+110)
    

  } else {
    fill(255, 196, 175);
    noStroke();
    ellipse(x2, y2, d2);
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(48);
    text("?", x2, y2);
  }
  if (!isMouseOverBall2) {
    x2 = x2 + vx2; // updating the x-coordinate for second circle
    y2 = y2 + vy2; // updating the y-coordinate for second circle
  }

  /* boundary-checking
   * the ball changes its direction once it hits the wall
   */
  if (x + d / 2 >= windowWidth || x - d / 2 <= 0) {
    vx = -vx;
  }
  if (y + d / 2 >= windowHeight || y - d / 2 <= 0) {
    vy = -vy;
  }
  
   if (x1 + d1 / 2 >= windowWidth || x1 - d1 / 2 <= 0) {
    vx1 = -vx1;
  }
  if (y1 + d1 / 2 >= windowHeight || y1 - d1 / 2 <= 0) {
    vy1 = -vy1;
  }
  
     if (x2 + d2 / 2 >= windowWidth || x2 - d2 / 2 <= 0) {
    vx2 = -vx2;
  }
  if (y2 + d2 / 2 >= windowHeight || y2 - d2 / 2 <= 0) {
    vy2 = -vy2;
  }
}



function mouseMoved() {
  if (dist(mouseX, mouseY, x, y) < d / 2) {
    isMouseOverBall = true;
    isMouseOverBall1 = false;
    isMouseOverBall2 = false;
  } else {
    isMouseOverBall = false;
  }
  
   if (dist(mouseX, mouseY, x1, y1) < d1 / 2) {
    isMouseOverBall1 = true;
     isMouseOverBall = false;
     isMouseOverBall2 = false;
  } else {
    isMouseOverBall1 = false;
  }
  
   if (dist(mouseX, mouseY, x2, y2) < d2 / 2) {
    isMouseOverBall2 = true;
     isMouseOverBall = false;
     isMouseOverBall1 = false;
  } else {
    isMouseOverBall2 = false;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
