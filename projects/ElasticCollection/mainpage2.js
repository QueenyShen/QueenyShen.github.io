
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const images = [];


// Load the image data from a JSON file
fetch('collection.json')
  .then(response => response.json())
  .then(data => {
    // Loop through each item in the collection and create an Image object for it
    data.forEach(item => {
      const img = new Image();
      img.src = item.bookCover;
      // When the image is loaded, add it to the images array

      img.onload = () => {
        images.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          dx: Math.random() * 2 - 1,
          dy: Math.random() * 2 - 1,
          image: img
        });
      };
    });
  });

function draw() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Loop through each image and draw it on the canvas
  images.forEach(image => {
    ctx.drawImage(image.image, image.x, image.y, 10, 10);

    // Update the image's position
    image.x += image.dx;
    image.y += image.dy;

    // Bounce the image off the edges of the canvas
    if (image.x < 0 || image.x + 10 > canvas.width) {
      image.dx = -image.dx;
    }
    if (image.y < 0 || image.y + 10 > canvas.height) {
      image.dy = -image.dy;
    }
  });

  // Request the next frame
  requestAnimationFrame(draw);
}

// Start the animation loop
requestAnimationFrame(draw);