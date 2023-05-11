let numCircles1 = 109;
let numCircles2 = 106;
let numCircles3 = 96;
let numCircles4 = 93;
let numCircles5 = 99;
let numCircles6 = 95;
let numCircles7 = 95;
let numCircles8 = 97;
let numCircles9 = 92;
let numCircles10 = 89;
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
let dataIds = [131611
    ,131612
    ,131613
    ,131614
    ,131615
    ,131616
    ,131617
    ,131618
    ,131619
    ,131620];

let myFont;

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
	canvas.parent('sketch-holder5');

    textFont(myFont);
    textSize(24);
    textAlign(CENTER, CENTER);

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
//dt
let rectX1 = 650;
let rectY1 = 120;
let rectWidth1 = 140;
let rectHeight1 = 210;

//bedford
let rectX2 = 650;
let rectY2 = 350;
let rectWidth2 = 180;
let rectHeight2 = 180;

//eastny
let rectX3 = 480;
let rectY3 = 330;
let rectWidth3 = 150;
let rectHeight3 = 200;

//sunset park
let rectX4 = 850;
let rectY4 = 350;
let rectWidth4 = 140;
let rectHeight4 = 260;

//borough park 
let rectX5 = 810;
let rectY5 = 145;
let rectWidth5 = 180;
let rectHeight5 = 185;

//flatbush
let rectX6 = 1010;
let rectY6 = 380;
let rectWidth6 = 150;
let rectHeight6 = 230;

//canarsie
let rectX7 = 1010;
let rectY7 = 120;
let rectWidth7 = 150;
let rectHeight7 = 240;

//bensonhurt
let rectX8 = 460;
let rectY8 = 140;
let rectWidth8 = 170;
let rectHeight8 = 170;

//coneyisland
let rectX9 = 850;
let rectY9 = 630;
let rectWidth9 = 310;
let rectHeight9 = 100;

//williamsburg
let rectX10 = 520;
let rectY10 = 550;
let rectWidth10 = 310;
let rectHeight10 = 180;


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
	  backgroundColor = "rgb(136, 178, 202)";
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
	  backgroundColor2 = "rgb(137, 181, 206)";
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
		backgroundColor3 = "rgb(137, 184, 211)";
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
		backgroundColor4 = "rgb(134, 183, 210)";
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
        backgroundColor5 = "rgb(137, 183, 209)";
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
        backgroundColor6 = "rgb(136, 180, 204)";
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
        backgroundColor7 = "rgb(134, 188, 219)";
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
		backgroundColor8 = "rgb(136, 187, 216)";
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
		backgroundColor9 = "rgb(134, 187, 217)";
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
		backgroundColor10 = "rgb(137, 175, 198)";
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


	let c = color(32, 38, 17);
	fill(c);
	noStroke();
	// draw rectangle 1
	rect(rectX1, rectY1, rectWidth1, rectHeight1);

	// check if hovering over rectangle and hide circles
	if (hovering1) {
		textAlign(CENTER, CENTER);
		;
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
			let c = color(155, 155, 155);
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

	c = color(32, 54, 18);
	fill(c);
	// draw rectangle 2
	rect(rectX2, rectY2, rectWidth2, rectHeight2);
	// update and draw circles in rectangle 2

	if (hovering2) {
		textAlign(CENTER);
		;
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
			let c = color(160, 160, 160);
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


	c = color(32, 70, 19);
	fill(c);
	// draw rectangle 3
	rect(rectX3, rectY3, rectWidth3, rectHeight3);
	if (hovering3) {
		textAlign(CENTER);
		;
		fill(255, 255, 255);
		text(neighborhood[2], rectX3 + rectWidth3 / 2, rectY3 + rectHeight3 / 2);
		text(convalue[2], rectX3 + rectWidth3 / 2, rectY3 + rectHeight3 / 2 + 30);
	} else {
		for (let i = 0; i < numCircles3; i++) {
			let circle = circles3[i];

			let c = color(185, 185, 185);
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

c = color(32, 86, 20);
fill(c);
// draw rectangle 4
rect(rectX4, rectY4, rectWidth4, rectHeight4);

if (hovering4) {
	textAlign(CENTER);
	;
	fill(255, 255, 255);
	text(neighborhood[3], rectX4 + rectWidth4 / 2, rectY4 + rectHeight4 / 2);
	text(convalue[3], rectX4 + rectWidth4 / 2, rectY4 + rectHeight4 / 2 + 30);
} else {
	for (let i = 0; i < numCircles4; i++) {
		let circle = circles4[i];
		let c = color(170,170,170);
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

c = color(32, 102, 21);
fill(c);
rect(rectX5, rectY5, rectWidth5, rectHeight5);

if (hovering5) {
	textAlign(CENTER, CENTER);
	;
	fill(255, 255, 255);
	let textX = rectX5 + rectWidth5 / 2 + 3;
	let textY = rectY5 + rectHeight5 / 2;
	let textHeight = textSize() * 1.3;
	
	// wrap text within rectangle
	let words = neighborhood[4].split(' ');
	let line = '';
	for (let i = 0; i < words.length; i++) {
	  let testLine = line + words[i] + ' ';
	  let testWidth = textWidth(testLine);
	  if (testWidth > rectWidth5) {
		text(line, textX, textY);
		line = words[i] + ' ';
		textY += textHeight;
	  } else {
		line = testLine;
	  }
	}
	text(line, textX, textY);
	
	text(convalue[4], rectX5 + rectWidth5 / 2, textY + textHeight);
	} else {
	
	for (let i = 0; i < numCircles5; i++) {
	  let circle = circles5[i];
	  let c = color(180, 180, 180);
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


  c = color(32, 118, 22);
  fill(c);
  // draw rectangle 6
  rect(rectX6, rectY6, rectWidth6, rectHeight6);
  
  if (hovering6) {
	textAlign(CENTER);
	;
	fill(255, 255, 255);
	let textX = rectX6 + rectWidth6 / 2 + 3;
	let textY = rectY6 + rectHeight6 / 2.5;
	let textHeight = textSize() * 1.3;
  
	// wrap text within rectangle
	let words = neighborhood[5].split(' ');
	let line = '';
	for (let i = 0; i < words.length; i++) {
	  let testLine = line + words[i] + ' ';
	  let testWidth = textWidth(testLine);
	  if (testWidth > rectWidth6) {
		text(line, textX, textY);
		line = words[i] + ' ';
		textY += textHeight;
	  }
	  else {
		line = testLine;
	  }
	}
	text(line, textX, textY);
  
	text(convalue[5], rectX6 + rectWidth6 / 2, textY + textHeight);
} else {
	for (let i = 0; i < numCircles6; i++) {
		let circle = circles6[i];
		let c = color(165, 165, 165);
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

  

c = color(32, 134, 23);
fill(c);
// draw rectangle 7
rect(rectX7, rectY7, rectWidth7, rectHeight7);
if (hovering7) {
    textAlign(CENTER);
    fill(255, 255, 255);
    let textX = rectX7 + rectWidth7 / 2 + 3;
    let textY = rectY7 + rectHeight7 / 2.5;
    let textHeight = textSize() * 1.3;
  
    // wrap text within rectangle
    let words = neighborhood[6].split(' ');
    let line = '';
    for (let i = 0; i < words.length; i++) {
      let testLine = line + words[i] + ' ';
      let testWidth = textWidth(testLine);
      if (testWidth > rectWidth7) {
        text(line, textX, textY);
        line = words[i] + ' ';
        textY += textHeight;
      }
      else {
        line = testLine;
      }
    }
    text(line, textX, textY);
  
    text(convalue[6], rectX7 + rectWidth7 / 2, textY + textHeight);
  } else {
    for (let i = 0; i < numCircles7; i++) {
      let circle = circles7[i];
      let c = color(220, 220, 220);
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
  

c = color(32, 150, 24);
fill(c);
// draw rectangle 8
rect(rectX8, rectY8, rectWidth8, rectHeight8);

if (hovering8) {
	textAlign(CENTER);
	;
	fill(255, 255, 255);
	let textX = rectX8 + rectWidth8 / 2 + 3;
	let textY = rectY8 + rectHeight8 / 2.5;
	let textHeight = textSize() * 1.3;

	// wrap text within rectangle
	let words = neighborhood[7].split(' ');
	let line = '';
	for (let i = 0; i < words.length; i++) {
		let testLine = line + words[i] + ' ';
		let testWidth = textWidth(testLine);
		if (testWidth > rectWidth8) {
			text(line, textX, textY);
			line = words[i] + ' ';
			textY += textHeight;
		} else {
			line = testLine;
		}
	}
	text(line, textX, textY);

	text(convalue[7], rectX8 + rectWidth8 / 2, textY + textHeight);
} else {
	for (let i = 0; i < numCircles8; i++) {
		let circle = circles8[i];
		let c = color(200, 200, 200);
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

c = color(33, 6, 25);
fill(c);
// draw rectangle 9
rect(rectX9, rectY9, rectWidth9, rectHeight9);

if (hovering9) {
	textAlign(CENTER);
	;
	fill(255,255,255);

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
		let c = color(210,210,210);
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

c = color(33, 22, 32);
fill(c);
// draw rectangle 10
rect(rectX10, rectY10, rectWidth10, rectHeight10);

if (hovering10) {
  textAlign(CENTER);
  ;
  fill(255, 255, 255);
  text(neighborhood[9], rectX10 + rectWidth10 / 2, rectY10 + rectHeight10 / 2);
  text(convalue[9], rectX10 + rectWidth10 / 2, rectY10 + rectHeight10 / 2 + 30);
} else {
  for (let i = 0; i < numCircles10; i++) {
    let circle = circles10[i];
    let c = color(150, 150, 150);
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