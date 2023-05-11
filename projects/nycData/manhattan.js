let numCircles1 = 117;
let numCircles2 = 108;
let numCircles3 = 106;
let numCircles4 = 118;
let numCircles5 = 127;
let numCircles6 = 140;
let numCircles7 = 149;
let numCircles8 = 126;
let numCircles9 = 124;
let numCircles10 = 123;
let circles1 = [];
let circles2 = [];
let circles3 = [];
let circles4 = [];
let circles5 = [];
let circles6 = [];
let circles7 = [];
let circles8 = [];
let circles9 = [];
let circles10 = [];
let hovering1 = false;
let hovering2 = false;
let hovering3 = false;
let hovering4 = false;
let hovering5 = false;
let hovering6 = false;
let hovering7 = false;
let hovering8 = false;
let hovering9 = false;
let hovering10 = false;
let cleansky = false;
let backgroundColor = 'rgb(255,255,255)';
let backgroundColor2 = 'rgb(255,255,255)';
let backgroundColor3 = 'rgb(255,255,255)';
let backgroundColor4 = 'rgb(255,255,255)';
let backgroundColor5 = 'rgb(255,255,255)';
let backgroundColor6 = 'rgb(255,255,255)';
let backgroundColor7 = 'rgb(255,255,255)';
let backgroundColor8 = 'rgb(255,255,255)';
let backgroundColor9 = 'rgb(255,255,255)';
let backgroundColor10 = 'rgb(255,255,255)';
let triangles = [];
let triangleClicked = false;
let data, url;
let neighborhood = [];
let convalue = [];
//indicator ID for the data.
let dataIds = [131621, 131622, 131623, 131624, 131625, 131626, 131627, 131628, 131629, 131630];

let myFont;
let planting;


function preload() {
	url = "airQuality.json";
	loadJSON(url, function(data) {
	  processData(data);
	});
	myFont = loadFont("fonts/SignusDigitalRound.ttf");
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
	canvas.parent('sketch-holder2');
	textFont(myFont);
    textSize(24);
    textAlign(CENTER, CENTER);

	soundFormats('mp3', 'ogg');
	planting = loadSound('sound/soil.mp3');

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
			vx: random(-0.5, 0.5),
			vy: random(-0.5, 0.5)
		};
		circles4.push(circle);
	}

    for (let i = 0; i < numCircles5; i++) {
		let circle = {
			x: random(rectX5 + 25, rectX5 + rectWidth5 - 25),
			y: random(rectY5 + 25, rectY5 + rectHeight5 - 25),
			d: 10,
			vx: random(-1, 0.5),
			vy: random(-1, 0.5)
		};
		circles5.push(circle);
	}

    for (let i = 0; i < numCircles6; i++) {
        let circle = {
          x: random(rectX6 + 25, rectX6 + rectWidth6 - 25),
          y: random(rectY6 + 25, rectY6 + rectHeight6 - 25),
          d: 10,
          vx: random(-0.5, 0.5),
          vy: random(-0.5, 0.5)
        };
        circles6.push(circle);
      }

      for (let i = 0; i < numCircles7; i++) {
        let circle = {
          x: random(rectX7 + 25, rectX7 + rectWidth7 - 25),
          y: random(rectY7 + 25, rectY7 + rectHeight7 - 25),
          d: 10,
          vx: random(-0.5, 0.5),
          vy: random(-0.5, 0.5)
        };
        circles7.push(circle);
      }

      for (let i = 0; i < numCircles8; i++) {
        let circle = {
            x: random(rectX8 + 25, rectX8 + rectWidth8 - 25),
            y: random(rectY8 + 25, rectY8 + rectHeight8 - 25),
            d: 10,
            vx: random(-0.5, 0.5),
          vy: random(-0.5, 0.5)
        };
        circles8.push(circle);
    }
    
    for (let i = 0; i < numCircles9; i++) {
        let circle = {
          x: random(rectX9 + 25, rectX9 + rectWidth9 - 25),
          y: random(rectY9 + 25, rectY9 + rectHeight9 - 25),
          d: 10,
		  vx: random(-0.5, 0.5),
          vy: random(-0.5, 0.5)
        };
        circles9.push(circle);
      }
      
      for (let i = 0; i < numCircles10; i++) {
        let circle = {
            x: random(rectX10 + 25, rectX10 + rectWidth10 - 25),
            y: random(rectY10 + 25, rectY10 + rectHeight10 - 25),
            d: 10,
            vx: random(-0.5, 0.5),
          vy: random(-0.5, 0.5)
        };
        circles10.push(circle);
    }
    

}
//washington heights
let rectX1 = 810;
let rectY1 = 280;
let rectWidth1 = 100;
let rectHeight1 = 250;
//central harlem
let rectX2 = 650;
let rectY2 = 320;
let rectWidth2 = 140;
let rectHeight2 = 210;
//east harlem
let rectX3 = 930;
let rectY3 = 260;
let rectWidth3 = 140;
let rectHeight3 = 200;
//upper west
let rectX4 = 390;
let rectY4 = 190;
let rectWidth4 = 400;
let rectHeight4 = 110;

//upper east
let rectX5 = 1090;
let rectY5 = 160;
let rectWidth5 = 150;
let rectHeight5 = 300;

//chelsea
let rectX6 = 760;
let rectY6 = 550;
let rectWidth6 = 200;
let rectHeight6 = 180;

//gramercy park
let rectX7 = 810;
let rectY7 = 95;
let rectWidth7 = 260;
let rectHeight7 = 150;

//greenwich village
let rectX8 = 490;
let rectY8 = 550;
let rectWidth8 = 250;
let rectHeight8 = 180;

//union square
let rectX9 = 430;
let rectY9 = 320;
let rectWidth9 = 200;
let rectHeight9 = 210;

//lower manhattan
let rectX10 = 980;
let rectY10 = 480;
let rectWidth10 = 260;
let rectHeight10 = 250;


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
      hovering5 = false;
      hovering6 = false;
      hovering7 = false;
      hovering8 = false;
      hovering9 = false;
      hovering10 = false;
	  backgroundColor = "rgb(154, 184, 203)";
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
      hovering5 = false;
      hovering6 = false;
      hovering7 = false;
      hovering8 = false;
      hovering9 = false;
      hovering10 = false;
	  backgroundColor2 = "rgb(156, 188, 208)";
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
        hovering5 = false;
        hovering6 = false;
        hovering7 = false;
        hovering8 = false;
        hovering9 = false;
        hovering10 = false;
		backgroundColor3 = "rgb(158, 194, 217)";
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
        hovering5 = false;
        hovering6 = false;
        hovering7 = false;
        hovering8 = false;
        hovering9 = false;
        hovering10 = false;
		backgroundColor4 = "rgb(151, 181, 200)";
	  } else {
		hovering4 = false;
		backgroundColor4 = "rgb(255,255,255)";
	  }

      if (
        mouseX > rectX5 &&
        mouseX < rectX5 + rectWidth5 &&
        mouseY > rectY5 &&
        mouseY < rectY5 + rectHeight5
      ) {
        hovering1 = false;
        hovering2 = false;
        hovering3 = false;
        hovering4 = false;
        hovering5 = true;
        hovering6 = false;
        hovering7 = false;
        hovering8 = false;
        hovering9 = false;
        hovering10 = false;
        backgroundColor5 = "rgb(138, 162, 178)";
      } else {
        hovering5 = false;
        backgroundColor5 = "rgb(255,255,255)";
      }

	  if (
        mouseX > rectX6 &&
        mouseX < rectX6 + rectWidth6 &&
        mouseY > rectY6 &&
        mouseY < rectY6 + rectHeight6
    ) {
        hovering1 = false;
        hovering2 = false;
        hovering3 = false;
        hovering4 = false;
        hovering5 = false;
        hovering6 = true;
        hovering7 = false;
        hovering8 = false;
        hovering9 = false;
        hovering10 = false;
        backgroundColor6 = "rgb(136, 161, 176)";
    } else {
        hovering6 = false;
        backgroundColor6 = "rgb(255, 255, 255)";
    }

    if (
        mouseX > rectX7 &&
        mouseX < rectX7 + rectWidth7 &&
        mouseY > rectY7 &&
        mouseY < rectY7 + rectHeight7
    ) {
        hovering1 = false;
        hovering2 = false;
        hovering3 = false;
        hovering4 = false;
        hovering5 = false;
        hovering6 = false;
        hovering7 = true;
        hovering8 = false;
        hovering9 = false;
        hovering10 = false;
        backgroundColor7 = "rgb(126, 145, 158)";
    } else {
        hovering7 = false;
        backgroundColor7 = "rgb(255, 255, 255)";
    }


	if (
		mouseX > rectX8 &&
		mouseX < rectX8 + rectWidth8 &&
		mouseY > rectY8 &&
		mouseY < rectY8 + rectHeight8
	) {
		hovering1 = false;
		hovering2 = false;
		hovering3 = false;
		hovering4 = false;
		hovering5 = false;
		hovering6 = false;
		hovering7 = false;
		hovering8 = true;
		hovering9 = false;
		hovering10 = false;
		backgroundColor8 = "rgb(142, 168, 184)";
	} else {
		hovering8 = false;
		backgroundColor8 = "rgb(255,255,255)";
	}
	
	if (
		mouseX > rectX9 &&
		mouseX < rectX9 + rectWidth9 &&
		mouseY > rectY9 &&
		mouseY < rectY9 + rectHeight9
	) {
		hovering1 = false;
		hovering2 = false;
		hovering3 = false;
		hovering4 = false;
		hovering5 = false;
		hovering6 = false;
		hovering7 = false;
		hovering8 = false;
		hovering9 = true;
		hovering10 = false;
		backgroundColor9 = "rgb(145, 173, 191)";
	} else {
		hovering9 = false;
		backgroundColor9 = "rgb(255,255,255)";
	}

	if (
		mouseX > rectX10 &&
		mouseX < rectX10 + rectWidth10 &&
		mouseY > rectY10 &&
		mouseY < rectY10 + rectHeight10
	  ) {
		hovering1 = false;
		hovering2 = false;
		hovering3 = false;
		hovering4 = false;
		hovering5 = false;
		hovering6 = false;
		hovering7 = false;
		hovering8 = false;
		hovering9 = false;
		hovering10 = true;
		backgroundColor10 = "rgb(148, 176, 195)";
	  } else {
		hovering10 = false;
		backgroundColor10 = "rgb(255,255,255)";
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
	}else if (hovering5){
		background(backgroundColor5);
		cursor(HAND);
	}else if (hovering6){
		background(backgroundColor6);
		cursor(HAND);
	}else if (hovering7){
		background(backgroundColor7);
		cursor(HAND);
	}else if (hovering8){
		background(backgroundColor8);
		cursor(HAND);
	}else if (hovering9){
		background(backgroundColor9);
		cursor(HAND);
	}else if (hovering10){
		background(backgroundColor10);
		cursor(HAND);
	}
	else {
		background(255);
	}

	    // change the background color to blue if all circles arrays are empty
	if (circles1.length === 0 && circles2.length === 0 && circles3.length === 0 && circles4.length === 0  && circles5.length === 0
		&& circles6.length === 0  && circles7.length === 0  && circles8.length === 0  && circles9.length === 0  && circles10.length === 0) {
			cleansky = true;
			let sky = color(150, 220, 255)
			background(sky);
	}


	let c = color(48, 22, 33);
	fill(c);
	noStroke();
	// draw rectangle 1
	rect(rectX1, rectY1, rectWidth1, rectHeight1);

	// check if hovering over rectangle and hide circles
	if (hovering1) {
		textAlign(CENTER, CENTER);
		
		fill(255, 255, 255);

		let textX = rectX1 + rectWidth1 / 2+3;
		let textY = rectY1 + rectHeight1 / 2;
		let textHeight = textSize() * 1.3;
		
		// wrap text within rectangle
		let words = neighborhood[0].split(' ');
		let line = '';
		for (let i = 0; i < words.length; i++) {
		  let testLine = line + words[i] + ' ';
		  let testWidth = textWidth(testLine);
		  if (testWidth > rectWidth1) {
			text(line, textX, textY);
			line = words[i] + ' ';
			textY += textHeight;
		  }
		  else {
			line = testLine;
		  }
		}
		text(line, textX, textY);
		
		text(convalue[0], rectX1 + rectWidth1 / 2, textY + textHeight);
		

		// text(neighborhood[0], rectX1 + rectWidth1 / 2, rectY1 + rectHeight1 / 2);
		// text(convalue[0], rectX1 + rectWidth1 / 2, rectY1 + rectHeight1 / 2 + 30);
	} else {
		// update and draw circles in rectangle 1
		for (let i = 0; i < numCircles1; i++) {
			let circle = circles1[i];
			let c = color(150, 150, 150);
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

	c = color(48, 38, 34);
	fill(c);
	// draw rectangle 2
	rect(rectX2, rectY2, rectWidth2, rectHeight2);
	// update and draw circles in rectangle 2

	if (hovering2) {
		textAlign(CENTER);
		
		fill(255, 255, 255);
		let textX = rectX2 + rectWidth2 / 2 + 3;
		let textY = rectY2 + rectHeight2 / 2.5;
		let textHeight = textSize() * 1.3;
	  
		// wrap text within rectangle
		let words = neighborhood[1].split(' ');
		let line = '';
		for (let i = 0; i < words.length; i++) {
		  let testLine = line + words[i] + ' ';
		  let testWidth = textWidth(testLine);
		  if (testWidth > rectWidth2) {
			text(line, textX, textY);
			line = words[i] + ' ';
			textY += textHeight;
		  }
		  else {
			line = testLine;
		  }
		}
		text(line, textX, textY);
	  
		text(convalue[1], rectX2 + rectWidth2 / 2, textY + textHeight);
	} else {
		for (let i = 0; i < numCircles2; i++) {
			let circle = circles2[i];
			let c = color(180, 180, 180);
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


	c = color(48, 54, 35);
	fill(c);
	// draw rectangle 3
	rect(rectX3, rectY3, rectWidth3, rectHeight3);
	if (hovering3) {
		textAlign(CENTER);
		
		fill(255, 255, 255);
		text(neighborhood[2], rectX3 + rectWidth3 / 2, rectY3 + rectHeight3 / 2);
		text(convalue[2], rectX3 + rectWidth3 / 2, rectY3 + rectHeight3 / 2 + 30);
	} else {
		for (let i = 0; i < numCircles3; i++) {
			let circle = circles3[i];

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

c = color(48, 70, 36);
fill(c);
// draw rectangle 4
rect(rectX4, rectY4, rectWidth4, rectHeight4);

if (hovering4) {
	textAlign(CENTER);
	
	fill(255, 255, 255);
	text(neighborhood[3], rectX4 + rectWidth4 / 2, rectY4 + rectHeight4 / 2);
	text(convalue[3], rectX4 + rectWidth4 / 2, rectY4 + rectHeight4 / 2 + 30);
} else {
	for (let i = 0; i < numCircles4; i++) {
		let circle = circles4[i];
		let c = color(120,120,120);
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

c = color(48, 86, 37);
fill(c);
rect(rectX5, rectY5, rectWidth5, rectHeight5);

if (hovering5) {
	textAlign(CENTER);
	
	fill(255, 255, 255);
	text(neighborhood[4], rectX5 + rectWidth5 / 2, rectY5 + rectHeight5 / 2);
	text(convalue[4], rectX5 + rectWidth5 / 2, rectY5 + rectHeight5 / 2 + 30);
  } else {
	for (let i = 0; i < numCircles5; i++) {
	  let circle = circles5[i];
	  let c = color(90, 90, 90);
	  fill(c);
	  // draw the circle
	  ellipse(circle.x, circle.y, circle.d);
	  // update the position of the circle
	  circle.x = circle.x + circle.vx;
	  circle.y = circle.y + circle.vy;
	  // boundary checking
	  if (circle.x + circle.d / 2 >= rectX5 + rectWidth5 || circle.x - circle.d / 2 <= rectX5) {
		circle.vx = -circle.vx;
	  }
	  if (circle.y + circle.d / 2 >= rectY5 + rectHeight5 || circle.y - circle.d / 2 <= rectY5) {
		circle.vy = -circle.vy;
	  }
	}
  }

  c = color(48, 102, 38);
  fill(c);
  // draw rectangle 6
  rect(rectX6, rectY6, rectWidth6, rectHeight6);
  
  if (hovering6) {
	textAlign(CENTER);
	
	fill(255, 255, 255);
	text(neighborhood[5], rectX6 + rectWidth6 / 2, rectY6 + rectHeight6 / 2);
	text(convalue[5], rectX6 + rectWidth6 / 2, rectY6 + rectHeight6 / 2 + 30);
  } else {
	for (let i = 0; i < numCircles6; i++) {
	  let circle = circles6[i];
	  let c = color(70, 70, 70);
	  fill(c);
	  // draw the circle
	  ellipse(circle.x, circle.y, circle.d);
	  // update the position of the circle
	  circle.x = circle.x + circle.vx;
	  circle.y = circle.y + circle.vy;
	  // boundary checking
	  if (circle.x + circle.d / 2 >= rectX6 + rectWidth6 || circle.x - circle.d / 2 <= rectX6) {
		circle.vx = -circle.vx;
	  }
	  if (circle.y + circle.d / 2 >= rectY6 + rectHeight6 || circle.y - circle.d / 2 <= rectY6) {
		circle.vy = -circle.vy;
	  }
	}
  }
  

c = color(48, 118, 39);
fill(c);
// draw rectangle 7
rect(rectX7, rectY7, rectWidth7, rectHeight7);

if (hovering7) {
  textAlign(CENTER);
  
  fill(255, 255, 255);
  text(neighborhood[6], rectX7 + rectWidth7 / 2, rectY7 + rectHeight7 / 2);
  text(convalue[6], rectX7 + rectWidth7 / 2, rectY7 + rectHeight7 / 2 + 30);
} else {
  for (let i = 0; i < numCircles7; i++) {
    let circle = circles7[i];
    let c = color(60, 60, 60);
    fill(c);
    // draw the circle
    ellipse(circle.x, circle.y, circle.d);
    // update the position of the circle
    circle.x = circle.x + circle.vx;
    circle.y = circle.y + circle.vy;
    // boundary checking
    if (circle.x + circle.d / 2 >= rectX7 + rectWidth7 || circle.x - circle.d / 2 <= rectX7) {
      circle.vx = -circle.vx;
    }
    if (circle.y + circle.d / 2 >= rectY7 + rectHeight7 || circle.y - circle.d / 2 <= rectY7) {
      circle.vy = -circle.vy;
    }
  }
}

c = color(48, 134, 40);
fill(c);
// draw rectangle 8
rect(rectX8, rectY8, rectWidth8, rectHeight8);

if (hovering8) {
    textAlign(CENTER);
    
    fill(255,255,255);
    text(neighborhood[7], rectX8 + rectWidth8 / 2, rectY8 + rectHeight8 / 2);
    text(convalue[7], rectX8 + rectWidth8 / 2, rectY8 + rectHeight8 / 2 + 30);
} else {
    for (let i = 0; i < numCircles8; i++) {
        let circle = circles8[i];
        let c = color(100, 100, 100);
        fill(c);
        // draw the circle
        ellipse(circle.x, circle.y, circle.d);
        // update the position of the circle
        circle.x = circle.x + circle.vx;
        circle.y = circle.y + circle.vy;
        // boundary checking
        if (circle.x + circle.d / 2 >= rectX8 + rectWidth8 || circle.x - circle.d / 2 <= rectX8) {
            circle.vx = -circle.vx;
        }
        if (circle.y + circle.d / 2 >= rectY8 + rectHeight8 || circle.y - circle.d / 2 <= rectY8) {
            circle.vy = -circle.vy;
        }
    }
}

c = color(48, 150, 41);
fill(c);
// draw rectangle 9
rect(rectX9, rectY9, rectWidth9, rectHeight9);

if (hovering9) {
	textAlign(CENTER);
	
	fill(255,255,2550);

	let textX = rectX9 + rectWidth9 / 2+3;
		let textY = rectY9 + rectHeight9 / 2;
		let textHeight = textSize() * 1.3;
		
		// wrap text within rectangle
		let words = neighborhood[8].split(' ');
		let line = '';
		for (let i = 0; i < words.length; i++) {
		  let testLine = line + words[i] + ' ';
		  let testWidth = textWidth(testLine);
		  if (testWidth > rectWidth9) {
			text(line, textX, textY);
			line = words[i] + ' ';
			textY += textHeight;
		  }
		  else {
			line = testLine;
		  }
		}
		text(line, textX, textY);
		
		text(convalue[8], rectX9 + rectWidth9 / 2, textY + textHeight);
} else {
	
	for (let i = 0; i < numCircles9; i++) {
		let circle = circles9[i];
		let c = color(140,140,140);
		fill(c);
		// draw the circle
		ellipse(circle.x, circle.y, circle.d);
		// update the position of the circle
		circle.x = circle.x + circle.vx;
		circle.y = circle.y + circle.vy;
		// boundary checking
		if (circle.x + circle.d / 2 >= rectX9 + rectWidth9 || circle.x - circle.d / 2 <= rectX9) {
			circle.vx = -circle.vx;
		}
		if (circle.y + circle.d / 2 >= rectY9 + rectHeight9 || circle.y - circle.d / 2 <= rectY9) {
			circle.vy = -circle.vy;
		}
	}
}

c = color(49, 6, 48);
fill(c);
// draw rectangle 10
rect(rectX10, rectY10, rectWidth10, rectHeight10);

if (hovering10) {
  textAlign(CENTER);
  
  fill(255, 255, 255);
  text(neighborhood[9], rectX10 + rectWidth10 / 2, rectY10 + rectHeight10 / 2);
  text(convalue[9], rectX10 + rectWidth10 / 2, rectY10 + rectHeight10 / 2 + 30);
} else {
  for (let i = 0; i < numCircles10; i++) {
    let circle = circles10[i];
    let c = color(130, 130, 130);
    fill(c);
    // draw the circle
    ellipse(circle.x, circle.y, circle.d);
    // update the position of the circle
    circle.x = circle.x + circle.vx;
    circle.y = circle.y + circle.vy;
    // boundary checking
    if (circle.x + circle.d / 2 >= rectX10 + rectWidth10 || circle.x - circle.d / 2 <= rectX10) {
      circle.vx = -circle.vx;
    }
    if (circle.y + circle.d / 2 >= rectY10 + rectHeight10 || circle.y - circle.d / 2 <= rectY10) {
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
	// remove 10 circles
	for (let i = 0; i < 10; i++) {
		circles1.pop();
		numCircles1--;
	  }
	  planting.play();
  }

  if (
    mouseX > rectX2 &&
    mouseX < rectX2 + rectWidth2 &&
    mouseY > rectY2 &&
    mouseY < rectY2 + rectHeight2
  ) {
    let myTriangle2 = new Triangle(mouseX, mouseY, random(10, 40), random(10, 40), random(0), random(255), random(0));
    triangles.push(myTriangle2);
	
	for (let i = 0; i < 10; i++) {
		circles2.pop();
		numCircles2--;
	  }
	  planting.play();
  }
  

  if (
    mouseX > rectX3 &&
    mouseX < rectX3 + rectWidth3 &&
    mouseY > rectY3 &&
    mouseY < rectY3 + rectHeight3
  ) {
    let myTriangle3 = new Triangle(mouseX, mouseY, random(10, 40), random(10, 40), random(0), random(255), random(0));
    triangles.push(myTriangle3);

	for (let i = 0; i < 10; i++) {
		circles3.pop();
		numCircles3--;
	  }
	  planting.play();
  } 

  if (
    mouseX > rectX4 &&
    mouseX < rectX4 + rectWidth4 &&
    mouseY > rectY4 &&
    mouseY < rectY4 + rectHeight4
  ) {
    let myTriangle4 = new Triangle(mouseX, mouseY, random(10, 40), random(10, 40), random(0), random(255), random(0));
    triangles.push(myTriangle4);

	for (let i = 0; i < 10; i++) {
		circles4.pop();
		numCircles4--;
	  }
	  planting.play();
  } 
  if (
	mouseX > rectX5 &&
	mouseX < rectX5 + rectWidth5 &&
	mouseY > rectY5 &&
	mouseY < rectY5 + rectHeight5
  ) {
	let myTriangle5 = new Triangle(mouseX, mouseY, random(10, 40), random(10, 40), random(0), random(255), random(0));
	triangles.push(myTriangle5);
  
	for (let i = 0; i < 10; i++) {
	  circles5.pop();
	  numCircles5--;
	}
	planting.play();
  }
  if (
    mouseX > rectX6 &&
    mouseX < rectX6 + rectWidth6 &&
    mouseY > rectY6 &&
    mouseY < rectY6 + rectHeight6
  ) {
    let myTriangle6 = new Triangle(mouseX, mouseY, random(10, 40), random(10, 40), random(0), random(255), random(0));
    triangles.push(myTriangle6);

    for (let i = 0; i < 10; i++) {
      circles6.pop();
      numCircles6--;
    }
	planting.play();
  }

  if (
	mouseX > rectX7 &&
	mouseX < rectX7 + rectWidth7 &&
	mouseY > rectY7 &&
	mouseY < rectY7 + rectHeight7
  ) {
	let myTriangle7 = new Triangle(mouseX, mouseY, random(10, 40), random(10, 40), random(0), random(255), random(0));
	triangles.push(myTriangle7);
  
	for (let i = 0; i < 10; i++) {
	  circles7.pop();
	  numCircles7--;
	}
	planting.play();
  }
  
  if (
	mouseX > rectX8 &&
	mouseX < rectX8 + rectWidth8 &&
	mouseY > rectY8 &&
	mouseY < rectY8 + rectHeight8
  ) {
	let myTriangle8 = new Triangle(mouseX, mouseY, random(10, 40), random(10, 40), random(0), random(255), random(0));
	triangles.push(myTriangle8);
  
	for (let i = 0; i < 10; i++) {
	  circles8.pop();
	  numCircles8--;
	}
	planting.play();
  }

  if (
	mouseX > rectX9 &&
	mouseX < rectX9 + rectWidth9 &&
	mouseY > rectY9 &&
	mouseY < rectY9 + rectHeight9
  ) {
	let myTriangle9 = new Triangle(mouseX, mouseY, random(10, 40), random(10, 40), random(0), random(255), random(0));
	triangles.push(myTriangle9);
  
	for (let i = 0; i < 10; i++) {
	  circles9.pop();
	  numCircles9--;
	}
	planting.play();
  }

  if (
	mouseX > rectX10 &&
	mouseX < rectX10 + rectWidth10 &&
	mouseY > rectY10 &&
	mouseY < rectY10 + rectHeight10
  ) {
	let myTriangle10 = new Triangle(mouseX, mouseY, random(10, 40), random(10, 40), random(0), random(255), random(0));
	triangles.push(myTriangle10);
  
	for (let i = 0; i < 10; i++) {
	  circles10.pop();
	  numCircles10--;
	}
	planting.play();
  }
  
}

// function keyPressed(){
//   triangles.pop();
// }

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