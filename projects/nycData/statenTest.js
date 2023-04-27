// THIS CODE HAS RECTANGLES ON 1 SINGLE CANVAS, MOST FUNCTIONS ARE WORKING PROPERLY. THE ONLY ISSUE IS THAT BACKGROUND 
// DOESNT CHANGE COLOR ON HOVER FOR BOTH RECTANGLES, ONLY WORKS FOR ONE.


	let numCircles1 = 10;
	let numCircles2 = 5;
	let circles1 = [];
	let circles2 = [];
	let hovering1 = false;
	let hovering2 = false;
	let backgroundColor = ('rgb(255,255,255)');
	let backgroundColor2 = ('rgb(255,255,255)');

	function setup() {
		createCanvas(windowWidth, windowHeight);
		// initialize the circles array for rectangle 1 with random positions and velocities
		for (let i = 0; i < numCircles1; i++) {
			let circle = {
				x: random(rectX1 + 25, rectX1 + rectWidth1 - 25),
				y: random(rectY1 + 25, rectY1 + rectHeight1 - 25),
				d: 50,
				vx: random(-1, 0.5),
				vy: random(-1, 0.5)
			};
			circles1.push(circle);
		}
		// initialize the circles array for rectangle 2 with random positions and velocities
		for (let i = 0; i < numCircles2; i++) {
			let circle = {
				x: random(rectX2 + 25, rectX2 + rectWidth2 - 25),
				y: random(rectY2 + 25, rectY2 + rectHeight2 - 25),
				d: 50,
				vx: random(-1, 0.5),
				vy: random(-1, 0.5)
			};
			circles2.push(circle);
		}
	}

	let rectX1 = 450;
	let rectY1 = 200;
	let rectWidth1 = 300;
	let rectHeight1 = 400;
	let rectX2 = 800;
	let rectY2 = 200;
	let rectWidth2 = 300;
	let rectHeight2 = 200;
    
	function draw() {
		background(backgroundColor);
		let c = color(255, 204, 0);
		fill(c);
		noStroke();
		// draw rectangle 1
		rect(rectX1, rectY1, rectWidth1, rectHeight1);
		// check if mouse is over rectangle 1
		if (mouseX > rectX1 && mouseX < rectX1 + rectWidth1 && mouseY > rectY1 && mouseY < rectY1 + rectHeight1) {
			hovering1 = true;
			backgroundColor = ('rgb(60, 105, 153)');
		} else {
			hovering1 = false;
			backgroundColor = ('rgb(255,255,255)');
		}
		// update and draw circles in rectangle 1
		for (let i = 0; i < numCircles1; i++) {
			let circle = circles1[i];
			// check if hovering over rectangle and hide circles
			if (hovering1) {
				textAlign(CENTER);
				textSize(24);
				fill(0);
				text('Port Richmond', rectX1 + rectWidth1 / 2, rectY1 + rectHeight1 / 2);
				text('9.3', rectX1 + rectWidth1 / 2, rectY1 + rectHeight1 / 2 + 30);
			} else {
				let c = color('magenta');
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

		//   background(backgroundColor2);
		c = color(65);
		fill(c);
		// draw rectangle 2
		rect(rectX2, rectY2, rectWidth2, rectHeight2);
		if (mouseX > rectX2 && mouseX < rectX2 + rectWidth2 && mouseY > rectY2 && mouseY < rectY2 + rectHeight2) {
			hovering2 = true;
			backgroundColor2 = ('rgb(60, 105, 153)');
		} else {
			hovering2 = false;
			backgroundColor2 = ('rgb(255,255,255)');
		}
		// update and draw circles in rectangle 2
		for (let i = 0; i < numCircles2; i++) {
			let circle = circles2[i];
			if (hovering2) {
				textAlign(CENTER);
				textSize(24);
				fill(255, 255, 255);
				text('Willowbrook', rectX2 + rectWidth1 / 2, rectY2 + rectHeight2 / 2);
				text('9.1', rectX2 + rectWidth2 / 2, rectY2 + rectHeight2 / 2 + 30);
			} else {
				let c = color('magenta');
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

        c = color(34, 163, 79);
		fill(c);
		noStroke();
        triangle(30, 75, 58, 20, 86, 75);
	}

    function mouseClicked() {
        cursor('grab');
      }
      