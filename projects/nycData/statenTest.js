let numCircles1 = 93;
let numCircles2 = 91;
let numCircles3 = 92;
let numCircles4 = 90;
let circles1 = [];
let circles2 = [];
let circles3 = [];
let circles4 = [];
let hovering1 = false;
let hovering2 = false;
let hovering3 = false;
let hovering4 = false;
let backgroundColor = 'rgb(255,255,255)';
let backgroundColor2 = 'rgb(255,255,255)';
let backgroundColor3 = 'rgb(255,255,255)';
let backgroundColor4 = 'rgb(255,255,255)';
let triangles = [];
let triangleClicked = false;
let data, url;
let neighborhood = [];
let convalue = [];
let dataIds = [131737, 131739, 131738, 131740];


	function preload() {
	url = "airQuality.json";
	loadJSON(url, function(data) {
	  processData(data);
	});
  }
  
  function processData(data) {
	for (let i = 0; i < data.length; i++) {
	  if (dataIds.includes(Number(data[i].indicator_data_id))) {
		neighborhood.push(data[i].geo_entity_name);
		convalue.push(data[i].data_valuemessage);
	  }
	}
  }

function setup() {
	var canvas = createCanvas(windowWidth, windowHeight);
	canvas.parent('sketch-holder');
	
	// initialize the circles array for rectangle 1 with random positions and velocities
	for (let i = 0; i < numCircles1; i++) {
		let circle = {
			x: random(rectX1 + 25, rectX1 + rectWidth1 - 25),
			y: random(rectY1 + 25, rectY1 + rectHeight1 - 25),
			d: 10,
			vx: random(-0.5, 0.5),
			vy: random(-0.5, 0.5)
		};
		circles1.push(circle);
	}
			// initialize the circles array for rectangle 2 with random positions and velocities
	for (let i = 0; i < numCircles2; i++) {
		let circle = {
			x: random(rectX2 + 25, rectX2 + rectWidth2 - 25),
			y: random(rectY2 + 25, rectY2 + rectHeight2 - 25),
			d: 10,
			vx: random(-0.5, 0.5),
			vy: random(-0.5, 0.5)
		};
		circles2.push(circle);
	}

	for (let i = 0; i < numCircles3; i++) {
		let circle = {
			x: random(rectX3 + 25, rectX3 + rectWidth3 - 25),
			y: random(rectY3 + 25, rectY3 + rectHeight3 - 25),
			d: 10,
			vx: random(-0.5, 0.5),
			vy: random(-0.5, 0.5)
		};
		circles3.push(circle);
	}

	for (let i = 0; i < numCircles4; i++) {
		let circle = {
			x: random(rectX4 + 25, rectX4 + rectWidth4 - 25),
			y: random(rectY4 + 25, rectY4 + rectHeight4 - 25),
			d: 10,
			vx: random(-1, 0.5),
			vy: random(-1, 0.5)
		};
		circles4.push(circle);
	}


}

let rectX1 = 600;
let rectY1 = 120;
let rectWidth1 = 150;
let rectHeight1 = 230;
let rectX2 = 400;
let rectY2 = 370;
let rectWidth2 = 350;
let rectHeight2 = 160;
let rectX3 = 780;
let rectY3 = 230;
let rectWidth3 = 280;
let rectHeight3 = 300;
let rectX4 = 400;
let rectY4 = 550;
let rectWidth4 = 660;
let rectHeight4 = 200;

function changeBackground() {

	// check if the triangle has been clicked
	if (triangleClicked) {
	hovering1 = false;
	return;
	}

	// check if mouse is over rectangle 1
	if (
	  mouseX > rectX1 &&
	  mouseX < rectX1 + rectWidth1 &&
	  mouseY > rectY1 &&
	  mouseY < rectY1 + rectHeight1
	) {
	  hovering1 = true;
	  hovering2 = false;
	  hovering3 = false;
	  hovering4 = false;
	  backgroundColor = "rgb(158, 194, 217)";
	} else {
	  hovering1 = false;
	  backgroundColor = "rgb(255,255,255)";
	}
  
	// check if mouse is over rectangle 2
	if (
	  mouseX > rectX2 &&
	  mouseX < rectX2 + rectWidth2 &&
	  mouseY > rectY2 &&
	  mouseY < rectY2 + rectHeight2
	) {
	  hovering1 = false;
	  hovering2 = true;
	  hovering3 = false;
	  hovering4 = false;
	  backgroundColor2 = "rgb(142, 202, 237)";
	} else {
	  hovering2 = false;
	  backgroundColor2 = "rgb(255,255,255)";
	}


	// check if mouse is over rectangle 3

	if (
		mouseX > rectX3 &&
		mouseX < rectX3 + rectWidth3 &&
		mouseY > rectY3 &&
		mouseY < rectY3 + rectHeight3
	  ) {
		hovering1 = false;
		hovering2 = false;
		hovering3 = true;
		hovering4 = false;
		backgroundColor3 = "rgb(161, 203, 230)";
	  } else {
		hovering3 = false;
		backgroundColor3 = "rgb(127, 202, 245)";
	  }

	// check if mouse is over rectangle 4

	  if (
		mouseX > rectX4 &&
		mouseX < rectX4 + rectWidth4 &&
		mouseY > rectY4 &&
		mouseY < rectY4 + rectHeight4
	  ) {
		hovering1 = false;
		hovering2 = false;
		hovering3 = false;
		hovering4 = true;
		backgroundColor4 = "rgb(127, 202, 245)";
	  } else {
		hovering4 = false;
		backgroundColor4 = "rgb(255,255,255)";
	  }
  }

function draw() {
	changeBackground();


	
	if (
		mouseX > 60 &&
		mouseX < 100 &&
		mouseY > 700 &&
		mouseY < 750
	  ) {
		cursor(HAND);
	  } else {
		cursor(ARROW);
	  }
  

	if (hovering1) {
		background(backgroundColor);
		cursor(HAND);
	} else if (hovering2) {
		background(backgroundColor2);
		cursor(HAND);
	} else if (hovering3){
		background(backgroundColor3);
		cursor(HAND);
	} else if (hovering4){
		background(backgroundColor4);
		cursor(HAND);
	}else {
		background(255);
	}

	let c = color(80, 22, 65);
	fill(c);
	noStroke();
	// draw rectangle 1
	rect(rectX1, rectY1, rectWidth1, rectHeight1);

	// update and draw circles in rectangle 1
	for (let i = 0; i < numCircles1; i++) {
		let circle = circles1[i];
		// check if hovering over rectangle and hide circles
		if (hovering1) {
			textAlign(CENTER);
			textSize(20);
			fill(255, 255, 255);
			text(neighborhood[0], rectX1 + rectWidth1 / 2, rectY1 + rectHeight1 / 2);
			text(convalue[0], rectX1 + rectWidth1 / 2, rectY1 + rectHeight1 / 2 + 30);
		} else {
			let c = color(140, 140, 140);
			fill(c);
			noStroke();
			// draw the circle
			ellipse(circle.x, circle.y, circle.d);
			// update the position of the circle
			circle.x = circle.x + circle.vx;
			circle.y = circle.y + circle.vy;
			// boundary checking
			if (circle.x + circle.d / 2 >= rectX1 + rectWidth1 || circle.x - circle.d / 2 <= rectX1) {
				circle.vx = -circle.vx;
			}
			if (circle.y + circle.d / 2 >= rectY1 + rectHeight1 || circle.y - circle.d / 2 <= rectY1) {
				circle.vy = -circle.vy;
			}
		}
	}

	c = color(80, 54, 67);
	fill(c);
	// draw rectangle 2
	rect(rectX2, rectY2, rectWidth2, rectHeight2);
	// update and draw circles in rectangle 2
	for (let i = 0; i < numCircles2; i++) {
		let circle = circles2[i];
		if (hovering2) {
			textAlign(CENTER);
			textSize(20);
			fill(255, 255, 255);
			text(neighborhood[1], rectX2 + rectWidth2 / 2, rectY2 + rectHeight2 / 2);
			text(convalue[1], rectX2 + rectWidth2 / 2, rectY2 + rectHeight2 / 2 + 30);
		} else {
			let c = color(170, 170, 170);
			fill(c);
			// draw the circle
			ellipse(circle.x, circle.y, circle.d);
			// update the position of the circle
			circle.x = circle.x + circle.vx;
			circle.y = circle.y + circle.vy;
			// boundary checking
			if (circle.x + circle.d / 2 >= rectX2 + rectWidth2 || circle.x - circle.d / 2 <= rectX2) {
				circle.vx = -circle.vx;
			}
			if (circle.y + circle.d / 2 >= rectY2 + rectHeight2 || circle.y - circle.d / 2 <= rectY2) {
				circle.vy = -circle.vy;
			}
		}
	}

	c = color(80, 38, 66);
	fill(c);
	// draw rectangle 2
	rect(rectX3, rectY3, rectWidth3, rectHeight3);
	// update and draw circles in rectangle 2
	for (let i = 0; i < numCircles3; i++) {
		let circle = circles3[i];
		if (hovering3) {
			textAlign(CENTER);
			textSize(20);
			fill(255, 255, 255);
			text(neighborhood[2], rectX3 + rectWidth3 / 2, rectY3 + rectHeight3 / 2);
			text(convalue[2], rectX3 + rectWidth3 / 2, rectY3 + rectHeight3 / 2 + 30);
		} else {
			let c = color(200, 200, 200);
			fill(c);
			// draw the circle
			ellipse(circle.x, circle.y, circle.d);
			// update the position of the circle
			circle.x = circle.x + circle.vx;
			circle.y = circle.y + circle.vy;
			// boundary checking
			if (circle.x + circle.d / 2 >= rectX3 + rectWidth3 || circle.x - circle.d / 2 <= rectX3) {
				circle.vx = -circle.vx;
			}
			if (circle.y + circle.d / 2 >= rectY3 + rectHeight3 || circle.y - circle.d / 2 <= rectY3) {
				circle.vy = -circle.vy;
			}
		}
	}

	c = color(80, 70, 68);
	fill(c);
	// draw rectangle 2
	rect(rectX4, rectY4, rectWidth4, rectHeight4);
	// update and draw circles in rectangle 2
	for (let i = 0; i < numCircles4; i++) {
		let circle = circles4[i];
		if (hovering4) {
			textAlign(CENTER);
			textSize(20);
			fill(255, 255, 255);
			text(neighborhood[3], rectX4 + rectWidth4 / 2, rectY4 + rectHeight4 / 2);
			text(convalue[3], rectX4 + rectWidth4 / 2, rectY4 + rectHeight4 / 2 + 30);
		} else {
			let c = color(230,230,230);
			fill(c);
			// draw the circle
			ellipse(circle.x, circle.y, circle.d);
			// update the position of the circle
			circle.x = circle.x + circle.vx;
			circle.y = circle.y + circle.vy;
			// boundary checking
			if (circle.x + circle.d / 2 >= rectX4 + rectWidth4 || circle.x - circle.d / 2 <= rectX4) {
				circle.vx = -circle.vx;
			}
			if (circle.y + circle.d / 2 >= rectY4 + rectHeight4 || circle.y - circle.d / 2 <= rectY4) {
				circle.vy = -circle.vy;
			}
		}
	}
	c = color(34, 163, 79);
	fill(c);
	noStroke();
	triangle(100, 750, 60, 750, 80,700);

	for (let i = 0; i < triangles.length; i = i + 1) {
		triangles[i].display();
	  }
}

function mouseClicked() {
// check if the mouse is over the triangle
if (
mouseX > 60 &&
mouseX < 100 &&
mouseY > 700 &&
mouseY < 750
) {
// toggle the triangleClicked variable
triangleClicked = !triangleClicked;
// reset the hovering1 variable to false
hovering1 = false;
// reset the background color to the default
backgroundColor = "rgb(255,255,255)";
}
}

function mousePressed() {
  // check if mouse is inside the rectangle
  if (
    mouseX > rectX1 &&
    mouseX < rectX1 + rectWidth1 &&
    mouseY > rectY1 &&
    mouseY < rectY1 + rectHeight1
  ) {
    let myTriangle = new Triangle(mouseX, mouseY, random(10, 40), random(10, 40), random(0), random(255), random(0));
    triangles.push(myTriangle);
  }

  if (
    mouseX > rectX2 &&
    mouseX < rectX2 + rectWidth2 &&
    mouseY > rectY2 &&
    mouseY < rectY2 + rectHeight2
  ) {
    let myTriangle2 = new Triangle(mouseX, mouseY, random(10, 40), random(10, 40), random(0), random(255), random(0));
    triangles.push(myTriangle2);
  }

  if (
    mouseX > rectX3 &&
    mouseX < rectX3 + rectWidth3 &&
    mouseY > rectY3 &&
    mouseY < rectY3 + rectHeight3
  ) {
    let myTriangle3 = new Triangle(mouseX, mouseY, random(10, 40), random(10, 40), random(0), random(255), random(0));
    triangles.push(myTriangle3);
  }

  if (
    mouseX > rectX4 &&
    mouseX < rectX4 + rectWidth4 &&
    mouseY > rectY4 &&
    mouseY < rectY4 + rectHeight4
  ) {
    let myTriangle4 = new Triangle(mouseX, mouseY, random(10, 40), random(10, 40), random(0), random(255), random(0));
    triangles.push(myTriangle4);
  }
}

function keyPressed(){
  triangles.pop();
}

class Triangle {
  constructor(x, y, w, h, r, g, b) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    // color for triangle
    this.r = r;
    this.g = g;
    this.b = b;
  }

  display() {
    fill(this.r, this.g, this.b);
    triangle(
      this.x - this.w/2, this.y + this.h/2, // bottom left corner
      this.x, this.y - this.h/2, // top corner
      this.x + this.w/2, this.y + this.h/2 // bottom right corner
    );
  }
}
  

function windowResized(){
resizeCanvas(windowWidth, windowHeight)
}