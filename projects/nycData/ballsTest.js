
//THIS CODE CREATES 2 DIFFERENT CANVASES. THE RECTANGLES ITSELF ARE THE CANVAS


const s = (sketch) => {
    let numCircles = 10;
    let circles = [];

    sketch.setup = () => {
      sketch.createCanvas(300, 400);
      
      // initialize the circles array with random positions and velocities
      for (let i = 0; i < numCircles; i++) {
        let circle = {
          x: sketch.random(sketch.width - 50) + 25,
          y: sketch.random(sketch.height - 50) + 25,
          d: 50,
          vx: sketch.random(-1, 1),
          vy: sketch.random(-1, 1)
        };
        circles.push(circle);
      }
    }

    sketch.draw = () => {
      sketch.background(220);
      
      for (let i = 0; i < numCircles; i++) {
        let circle = circles[i];
        
        // draw the circle
        sketch.ellipse(circle.x, circle.y, circle.d);
      
        // update the position of the circle
        circle.x = circle.x  + circle.vx;
        circle.y = circle.y + circle.vy;
        
        // boundary checking
        if (circle.x + circle.d / 2 >= 300 || circle.x - circle.d / 2 <= 0) {
          circle.vx = -circle.vx;
        }
        if (circle.y + circle.d / 2 >= 400 || circle.y - circle.d / 2 <= 0) {
          circle.vy = -circle.vy;
        }
      }
    }
  }


  const s2 = (sketch) => {
    let numCircles = 10;
    let circles = [];

    sketch.setup = () => {
      sketch.createCanvas(500, 300);
      
      // initialize the circles array with random positions and velocities
      for (let i = 0; i < numCircles; i++) {
        let circle = {
          x: sketch.random(sketch.width - 50) + 25,
          y: sketch.random(sketch.height - 50) + 25,
          d: 50,
          vx: sketch.random(-1, 1),
          vy: sketch.random(-1, 1)
        };
        circles.push(circle);
      }
    }

    sketch.draw = () => {
      sketch.background(220);
      
      for (let i = 0; i < numCircles; i++) {
        let circle = circles[i];
        
        // draw the circle
        sketch.ellipse(circle.x, circle.y, circle.d);
      
        // update the position of the circle
        circle.x = circle.x  + circle.vx;
        circle.y = circle.y + circle.vy;
        
        // boundary checking
        if (circle.x + circle.d / 2 >= 500 || circle.x - circle.d / 2 <= 0) {
          circle.vx = -circle.vx;
        }
        if (circle.y + circle.d / 2 >= 300 || circle.y - circle.d / 2 <= 0) {
          circle.vy = -circle.vy;
        }
      }
    }
  }

let canvas1 = new p5(s, "canvas1");
let canvas2 = new p5(s2, "canvas2");

