let d = 100; // diameter of circle
// let x = d / 2; // x-coordinate starts at 50
// let y = d / 2; // y-coordinate starts at 50
let x = 50;
let y = 50;
let vx = 5; // velocity in x-direction
let vy = 5; // velocity in y-direction

let pokeball;

function preload(){
  pokeball = loadImage('pokeball.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background(220);
  imageMode(CENTER);
  pokeball.resize(100,100);
  image(pokeball,x,y);
  
  // ellipseMode(CORNER);
  // ellipse(x, y, d);
  
  x = x + vx; // updating the x-coordinate
  y = y + vy; // updating the y-coordinate
  // d = d + 1;  // d++;
  
  //     if (x + pokeball.width / 2 >= windowWidth || x - width / 2 <= 0) {
  //   vx = -vx;
  // }
  // if (y + pokeball.height >= windowHeight || y - pokeball.height/ 2 <= 0) {
  //   vy = -vy;
  // }


  /* boundary-checking
   * the ball change its direction once it hits the wall
   */
  if (x + d / 2 >= windowWidth || x - d / 2 <= 0) {
    vx = -vx;
  }
  if (y + d / 2 >= windowHeight || y - d / 2 <= 0) {
    vy = -vy;
  }


  // console.log(vx);
  // circle(200, 200, 50);
}
