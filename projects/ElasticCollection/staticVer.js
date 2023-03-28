const renderItems = (collection) => {
    // The `ul` where the items will be inserted
    const collectionList = document.getElementById('collection')

    // Shuffle the collection array
    const shuffledCollection = shuffleArray(collection);

    // Loop through each item in the shuffled collection array
    shuffledCollection.forEach(item => {
        const listItem = document.createElement('li') // Make the `li`
        const itemImage = document.createElement('img') // And an image
        itemImage.src = item.bookCover// Set the `src` attribute from the JSON

		itemImage.style.position = "relative"; // Set the position of the image to absolute
		itemImage.style.cursor = "pointer"; // Set the position of the image to absolute
		itemImage.setAttribute("class", "myimg");

		itemImage.addEventListener("click", () => {
            let clickedItem = item;
            const modal = document.querySelector("#myModal");
            const modalContent = `<div class="modal-content">
            <span class="close">&times;</span>
            <h2 id="modalTitle">Title: ${clickedItem.Title}</h2>
            <p id="modalAuthor">Author: ${clickedItem[`Author/Editor`]}</p>
            <p id="modalYear">Year Published: ${clickedItem.YearPublished}</p>
          </div>`;
			// Add modal content to modal popup
			modal.innerHTML = modalContent;
			modal.style.zIndex = "999"; 
		
			 // Add event listener to close button
			 const closeButton = modal.querySelector(".close");
			 closeButton.addEventListener("click", () => {
			   modal.innerHTML = "";
			   modal.style.zIndex = "-1";
			
            });
        });

        listItem.appendChild(itemImage) // And add that too
        collectionList.appendChild(listItem) // Then add the whole `li` into the `ul'
		
    })  
}


// Shuffle array function
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Fetch gets your JSON file…
fetch('collection.json')
	.then(response => response.json())
	.then(collection => {
		// And passes the data to the function, above!
		renderItems(collection)
	})


const switchInput = document.querySelector('.switch input');
const redirectTo = 'https://QueenyShen.github.io/projects/ElasticCollection/mainpageTest.html'; // replace with the name of the HTML page you want to redirect to
let isAnimating = false;

switchInput.addEventListener('click', () => {
  if (!isAnimating) {
    isAnimating = true;
    switchInput.disabled = true;

    // add animation classes
    const slider = document.querySelector('.slider');
    slider.classList.add('slider-animating');
    slider.addEventListener('animationend', () => {
      // remove animation classes
      slider.classList.remove('slider-animating');
      slider.classList.toggle('round');

      // redirect to another page
      window.location.href = redirectTo;
      switchInput.disabled = false;
      isAnimating = false;
    });
  }
});


	
	// const zoomArea = document.getElementById("zoom-area");
	// const collectionList = document.getElementById('collection');
	
	// zoomArea.addEventListener("click", (event) => {
	//   zoomArea.classList.toggle("zoom");
	//   if (zoomArea.classList.contains("zoom")) {
	// 	const x = event.clientX; // Get the x-coordinate of the click
	// 	const y = event.clientY; // Get the y-coordinate of the click
	// 	const rect = collectionList.getBoundingClientRect(); // Get the bounding rectangle of the collection list
	// 	const offsetX = x - rect.left; // Calculate the x-offset from the left of the collection list
	// 	const offsetY = y - rect.top; // Calculate the y-offset from the top of the collection list
	// 	collectionList.style.transformOrigin = `${offsetX}px ${offsetY}px`; // Set the transform origin of the collection list
	// 	collectionList.style.transform = 'scale(4)'; // Scale up the collection list
	//   } else {
	// 	collectionList.style.transform = 'scale(1)'; // Scale down the collection list to its original state
	//   }
	// });