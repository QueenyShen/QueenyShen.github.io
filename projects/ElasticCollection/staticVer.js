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
            <h2 id="modalTitle">${clickedItem.Title}</h2>
            <p id="modalAuthor">${clickedItem[`Author/Editor`]}</p>
            <p id="modalYear">${clickedItem.YearPublished}</p>
            <span id="modalLanguage">Language: ${clickedItem.Language}</span><br>
            <span id="modalGenre">Genre: ${clickedItem.Genre}</span><br>
            <span id="modalWord">Word: ${clickedItem.Word}</span>
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


const remove = () => {
  const collectionList = document.getElementById('collection')
  collectionList.innerHTML = '' // Clear all items from the container
}

const show = (collection, category) => {
  // Filter the collection based on the selected category
  const filteredCollection = category ? collection.filter(item => item.place === category) : collection;

  // Render the filtered items
  renderItems(filteredCollection);
}


const allButton = document.getElementById("btnAll")
btnAll.addEventListener('click', () => {
  fetch('collection.json')
    .then(response => response.json())
    .then(collection => {
      remove()
      show(collection) 
    })
})

const mineButton = document.getElementById("btnMine")
mineButton.addEventListener('click', () => {
  fetch('collection.json')
    .then(response => response.json())
    .then(collection => {
      remove() // Clear all items from the container
      show(collection, "My books") // Show only items with "place" equal to "My books"
    })
})


const friendButton = document.getElementById("btnFriends")
friendButton.addEventListener('click', () => {
  fetch('collection.json')
    .then(response => response.json())
    .then(collection => {
      remove() // Clear all items from the container
      show(collection, "Friends books")
    })
})

const libraryButton = document.getElementById("btnLibrary")
libraryButton.addEventListener('click', () => {
  fetch('collection.json')
    .then(response => response.json())
    .then(collection => {
      remove() // Clear all items from the container
      show(collection, "School library")
    })
})

const storeButton = document.getElementById("btnStore")
storeButton.addEventListener('click', () => {
  fetch('collection.json')
    .then(response => response.json())
    .then(collection => {
      remove() // Clear all items from the container
      show(collection, "Book store")
    })
})

// mobile version filter

const mobileAll = document.getElementById("mobileAll")
mobileAll.addEventListener('click', () => {
  fetch('collection.json')
    .then(response => response.json())
    .then(collection => {
      remove()
      show(collection) 
    })
})

const  mobileMine = document.getElementById("mobileMine")
mobileMine.addEventListener('click', () => {
  fetch('collection.json')
    .then(response => response.json())
    .then(collection => {
      remove()
      show(collection, "My books")
    })
})
const mobileFriends = document.getElementById("mobileFriends")
mobileFriends.addEventListener('click', () => {
  fetch('collection.json')
    .then(response => response.json())
    .then(collection => {
      remove() // Clear all items from the container
      show(collection, "Friends books")
    })
})
const mobileLibrary = document.getElementById("mobileibrary")
mobileLibrary.addEventListener('click', () => {
  fetch('collection.json')
    .then(response => response.json())
    .then(collection => {
      remove() // Clear all items from the container
      show(collection, "School library")
    })
})

const mobileStore = document.getElementById("mobileStore")
mobileStore.addEventListener('click', () => {
  fetch('collection.json')
    .then(response => response.json())
    .then(collection => {
      remove() // Clear all items from the container
      show(collection, "Book store")
    })
})



// Fetch gets your JSON file…
fetch('collection.json')
	.then(response => response.json())
	.then(collection => {
		// And passes the data to the function, above!
		renderItems(collection)
	})

const writingMode = document.getElementById("writingMode")
writingMode.addEventListener('click', () => {
  window.location.href = "https://QueenyShen.github.io/projects/ElasticCollection/writingmode.html"
})

const about = document.getElementById("about")
about.addEventListener('click', () => {
  window.location.href = "https://QueenyShen.github.io/projects/ElasticCollection/about.html"
})

// mobile ver buttons
const mobileAbout = document.getElementById("mobileAbout")
mobileAbout.addEventListener('click', () => {
  window.location.href = "https://QueenyShen.github.io/projects/ElasticCollection/about.html"
})

const mobileWriting = document.getElementById("mobileWriting")
mobileWriting.addEventListener('click', () => {
  window.location.href = "https://QueenyShen.github.io/projects/ElasticCollection/writingmode.html"
})



const switchInput = document.querySelector('.switch input');
const url1 = 'https://QueenyShen.github.io/projects/ElasticCollection/staticVer.html';
const url2 = 'https://QueenyShen.github.io/projects/ElasticCollection/floatingVer.html';

function redirectTo(url) {
  if (url !== window.location.href) {
    // Redirect to the new page
    window.location.href = url;
  }
}
// Add event listener to switch input
switchInput.addEventListener('change', () => {
  // Add CSS class to trigger animation
  switchInput.parentElement.classList.add('animate');

  // Wait for animation to finish
  setTimeout(() => {
    // Remove CSS class
    switchInput.parentElement.classList.remove('animate');

    // Redirect to the appropriate URL
    if (switchInput.checked) {
      redirectTo(url2);
    } else {
      redirectTo(url1);
    }
  }, 400);
});


let mybutton = document.getElementById("myBtn");
const container = document.querySelector(".container");

// When the user clicks on the button, scroll to the top of the container
function topFunction() {
  container.scrollTop = 0;
}


let toggleFilter = document.querySelector(".mobile-filter");
let headerStatus = document.querySelector(".header");
let filterItems = document.querySelectorAll(".filter-item");

//open and close menu
toggleFilter.addEventListener("click", () => {
  if (headerStatus.classList.contains("open")) {
    headerStatus.classList.remove("open");
  } else {
    headerStatus.classList.add("open");
  }
});

// add event listener to each menu item
filterItems.forEach((item) => {
  item.addEventListener("click", () => {
    headerStatus.classList.remove("open");
  });
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