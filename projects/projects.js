$("#Next").click(function(){
	$("#Slider").append($("#Slider img:first-of-type"));
});

$("#Prev").click(function(){
	$("#Slider").prepend($("#Slider img:last-of-type"));
});

// Get all the image elements inside the slider by their tag name
const images = document.querySelectorAll('#Slider img');

// Add a click event listener to each image
images.forEach((image, index) => {
  image.addEventListener('click', function() {
    // Create an array of page URLs that corresponds to the order of the images
    const pageUrls = [
      'https://harmonic-homepage.glitch.me',
      'https://queenyshen.github.io/Stories/Home/index.html',
      'https://QueenyShen.github.io/projects/ElasticCollection/about.html'
    ];
    
    // Redirect to the corresponding page URL based on the index of the clicked image
    window.location.href = pageUrls[index];
  });
});
