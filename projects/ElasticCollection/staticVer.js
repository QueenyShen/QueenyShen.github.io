const renderItems = (collection, filter) => {
    // The `ul` where the items will be inserted
    const collectionList = document.getElementById('collection')

    // Shuffle the collection array
    // const shuffledCollection = shuffleArray(collection);
    const filteredCollection = collection.filter(item => !filter || filter(item));

    // Shuffle the filtered collection array
    const shuffledCollection = shuffleArray(filteredCollection);

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
            <p id="modalPrice" id="modalCondition">${clickedItem.Price}  &nbsp${clickedItem.Condition}</p>
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

const show = (collection, filter) => {
  // Render the filtered items
  renderItems(collection, filter);
}

const remove = () => {
  const collectionList = document.getElementById('collection')
  collectionList.innerHTML = '' // Clear all items from the container
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

//my books
const mybook = (item) => {
  return item.place =="My books";
};

const btnMine = document.getElementById("btnMine")
btnMine.addEventListener('click', () => {
  fetch('collection.json')
    .then(response => response.json())
    .then(collection => {
      remove()
      show(collection, mybook) // Show only items with "place" equal to "My books"
    })
})

//friends books
const friendsBooks = (item) => {
  return item.place =="Friends books";
};

const friendButton = document.getElementById("btnFriends")
friendButton.addEventListener('click', () => {
  fetch('collection.json')
    .then(response => response.json())
    .then(collection => {
      remove() 
      show(collection, friendsBooks)
    })
})

//library books
const libraryBooks = (item) => {
  return item.place =="School library";
};

const libraryButton = document.getElementById("btnLibrary")
libraryButton.addEventListener('click', () => {
  fetch('collection.json')
    .then(response => response.json())
    .then(collection => {
      remove() 
      show(collection, libraryBooks)
    })
})


//store books
const storeBooks = (item) => {
  return item.place =="Book store";
};
const storeButton = document.getElementById("btnStore")
storeButton.addEventListener('click', () => {
  fetch('collection.json')
    .then(response => response.json())
    .then(collection => {
      remove() 
      show(collection, storeBooks)
    })
})

//other filters 
//1900s
const publishedBefore2000 = (item) => {
  return item.YearPublished < 2000;
};

const year1 = document.getElementById("year1")
year1.addEventListener('click', () => {
  fetch('collection.json')
    .then(response => response.json())
    .then(collection => {
      remove();
      show(collection, publishedBefore2000); 
    })
})
//2000s
const publishedAfter2000 = (item) => {
  return item.YearPublished >2000 && item.YearPublished<2010;
};

const year2 = document.getElementById("year2")
year2.addEventListener('click', () => {
  fetch('collection.json')
    .then(response => response.json())
    .then(collection => {
      remove();
      show(collection, publishedAfter2000); 
    })
})

//2010s
const publishedAfter2010 = (item) => {
  return item.YearPublished >=2010;
};
// Event listener for the "year1" div
const year3 = document.getElementById("year3")
year3.addEventListener('click', () => {
  fetch('collection.json')
    .then(response => response.json())
    .then(collection => {
      remove();
      show(collection, publishedAfter2010); 
    })
})

//art
const artGenre = (item) => {
  return item.Genre == 'Art';
};
const art = document.getElementById("art")
art.addEventListener('click', () => {
  fetch('collection.json')
    .then(response => response.json())
    .then(collection => {
      remove()
      show(collection, artGenre) 
    })
})

//design
const designGenre = (item) => {
  return item.Genre == 'Design';
};
const design = document.getElementById("design")
design.addEventListener('click', () => {
  fetch('collection.json')
    .then(response => response.json())
    .then(collection => {
      remove()
      show(collection, designGenre) 
    })
})


//fiction
const ficitonGenre = (item) => {
  return item.Genre == 'Fiction';
};
const fiction = document.getElementById("fiction")
fiction.addEventListener('click', () => {
  fetch('collection.json')
    .then(response => response.json())
    .then(collection => {
      remove()
      show(collection, ficitonGenre) 
    })
})

//nonfiction
const nonFicitonGenre = (item) => {
  return item.Genre == 'Non-Fiction';
};
const nonFiction = document.getElementById("nonFiction")
nonFiction.addEventListener('click', () => {
  fetch('collection.json')
    .then(response => response.json())
    .then(collection => {
      remove()
      show(collection, nonFicitonGenre) 
    })
})

//textbook
const textBookGenre = (item) => {
  return item.Genre == 'Textbook';
};
const textbook = document.getElementById("textbooks")
textbook.addEventListener('click', () => {
  fetch('collection.json')
    .then(response => response.json())
    .then(collection => {
      remove()
      show(collection, textBookGenre) 
    })
})

//beige
const beigeColor = (item) => {
  return item.Covercolor == 'beige';
};
const beige = document.getElementById("beige")
beige.addEventListener('click', () => {
  fetch('collection.json')
    .then(response => response.json())
    .then(collection => {
      remove()
      show(collection, beigeColor) 
    })
})

//black
const blackColor = (item) => {
  return item.Covercolor == 'black';
};
const black = document.getElementById("black")
black.addEventListener('click', () => {
  fetch('collection.json')
    .then(response => response.json())
    .then(collection => {
      remove()
      show(collection, blackColor) 
    })
})

//blue
const blueColor = (item) => {
  return item.Covercolor == 'blue';
};
const blue = document.getElementById("blue")
blue.addEventListener('click', () => {
  fetch('collection.json')
    .then(response => response.json())
    .then(collection => {
      remove()
      show(collection, blueColor) 
    })
})

//brown
const brownColor = (item) => {
  return item.Covercolor == 'brown';
};
const brown = document.getElementById("brown")
brown.addEventListener('click', () => {
  fetch('collection.json')
    .then(response => response.json())
    .then(collection => {
      remove()
      show(collection, brownColor) 
    })
})


//green
const greenColor = (item) => {
  return item.Covercolor == 'green';
};
const green = document.getElementById("green")
green.addEventListener('click', () => {
  fetch('collection.json')
    .then(response => response.json())
    .then(collection => {
      remove()
      show(collection, greenColor) 
    })
})

//grey
const greyColor = (item) => {
  return item.Covercolor == 'grey';
};
const grey = document.getElementById("grey")
grey.addEventListener('click', () => {
  fetch('collection.json')
    .then(response => response.json())
    .then(collection => {
      remove()
      show(collection, greyColor) 
    })
})

//orange
const orangeColor = (item) => {
  return item.Covercolor == 'orange';
};
const orange = document.getElementById("orange")
orange.addEventListener('click', () => {
  fetch('collection.json')
    .then(response => response.json())
    .then(collection => {
      remove()
      show(collection, orangeColor) 
    })
})

//pink
const pinkColor = (item) => {
  return item.Covercolor == 'pink';
};
const pink = document.getElementById("pink")
pink.addEventListener('click', () => {
  fetch('collection.json')
    .then(response => response.json())
    .then(collection => {
      remove()
      show(collection, pinkColor) 
    })
})

//purple
const purpleColor = (item) => {
  return item.Covercolor == 'purple';
};
const purple = document.getElementById("purple")
purple.addEventListener('click', () => {
  fetch('collection.json')
    .then(response => response.json())
    .then(collection => {
      remove()
      show(collection, purpleColor) 
    })
})

//red
const redColor = (item) => {
  return item.Covercolor == 'red';
};
const red = document.getElementById("red")
red.addEventListener('click', () => {
  fetch('collection.json')
    .then(response => response.json())
    .then(collection => {
      remove()
      show(collection, redColor) 
    })
})

//white
const whiteColor = (item) => {
  return item.Covercolor == 'white';
};
const white = document.getElementById("white")
white.addEventListener('click', () => {
  fetch('collection.json')
    .then(response => response.json())
    .then(collection => {
      remove()
      show(collection, whiteColor) 
    })
})

//yellow
const yellowColor = (item) => {
  return item.Covercolor == 'yellow';
};
const yellow = document.getElementById("yellow")
yellow.addEventListener('click', () => {
  fetch('collection.json')
    .then(response => response.json())
    .then(collection => {
      remove()
      show(collection, yellowColor) 
    })
})

const wrap = document.getElementById("wrap");
wrap.style.display = "none";

const heading = document.getElementById("heading");
heading.addEventListener("click", function() {
  if (wrap.style.display === "none") {
    wrap.style.display = "block";
  } else {
    wrap.style.display = "none";
  }
});


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

const mineMobile = (item) =>{
  return item.place=="My books"
};
const  mobileMine = document.getElementById("mobileMine")
mobileMine.addEventListener('click', () => {
  fetch('collection.json')
    .then(response => response.json())
    .then(collection => {
      remove()
      show(collection, mineMobile)
    })
})

const friendsMobile = (item) =>{
  return item.place=="Friends books"
};
const  mobileFriends = document.getElementById("mobileFriends")
mobileFriends.addEventListener('click', () => {
  fetch('collection.json')
    .then(response => response.json())
    .then(collection => {
      remove()
      show(collection, friendsMobile)
    })
})

const libraryMobile = (item) =>{
  return item.place== "School library"
};
const  mobileLibrary = document.getElementById("mobileLibrary")
mobileLibrary.addEventListener('click', () => {
  fetch('collection.json')
    .then(response => response.json())
    .then(collection => {
      remove()
      show(collection, libraryMobile)
    })
})

const storeMobile = (item) =>{
  return item.place== "Book store"
};
const  mobileStore = document.getElementById("mobileStore")
mobileStore.addEventListener('click', () => {
  fetch('collection.json')
    .then(response => response.json())
    .then(collection => {
      remove()
      show(collection, storeMobile)
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

const mobileWriting = document.getElementById("mobileWriting")
mobileWriting.addEventListener('click', () => {
  window.location.href = "https://QueenyShen.github.io/projects/ElasticCollection/writingmode.html"
})

const mobileAbout = document.getElementById("mobileAbout")
mobileAbout.addEventListener('click', () => {
  window.location.href = "https://QueenyShen.github.io/projects/ElasticCollection/about.html"
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


// mobile version
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