const show = (collection, filter) => {
  // Get the `ul` where the items will be inserted
  const collectionList = document.getElementById("collection");

  collection
  .filter(item => !filter || item.place === filter) // Filter the collection based on the selected filter
  .forEach((item) => {
    const listItem = document.createElement("li"); // Make the `li`
    const itemImage = document.createElement("img"); // And an image
    itemImage.src = item.bookCover; // Set the `src` attribute from the JSON

    itemImage.style.position = "absolute"; // Set the position of the image to absolute
    itemImage.style.cursor = "pointer"; // Set the position of the image to absolute
    itemImage.setAttribute("class", "myimg");

    const container = document.getElementById('collection')
    const x = Math.random() * container.offsetWidth
    const y = Math.random() * container.offsetHeight
    itemImage.style.left = `${x}px`
    itemImage.style.top = `${y}px`

    //modal popup function
    itemImage.onclick = function () {
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
        itemImage.remove();
      };
      
    listItem.appendChild(itemImage); // And add that too
    collectionList.appendChild(listItem); // Then add the whole `li` into the `ul`

    // Set up the image to move at a set speed
    let dx = Math.random() * 2 - 1;
    let dy = Math.random() * 2 - 1;
    let xPos = x;
    let yPos = y;
    setInterval(() => {
      xPos += dx * 0.8; // Update x position
      yPos += dy * 0.8; // Update y position

      // Check if the image is still within the container
      if (xPos < 0 || xPos > container.offsetWidth) {
        dx = -dx; // Invert x velocity
      }
      if (yPos < 0 || yPos > container.offsetHeight) {
        dy = -dy; // Invert y velocity
      }
      // Set new position of image
      itemImage.style.left = `${xPos}px`;
      itemImage.style.top = `${yPos}px`;
    }, 40); // Update position every 30 milliseconds
  });
};  

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

const mineButton = document.getElementById("btnMine")
mineButton.addEventListener('click', () => {
  fetch('collection.json')
    .then(response => response.json())
    .then(collection => {
      remove()
      show(collection, "My books") // Show only items with "place" equal to "My books"
    })
})


const friendButton = document.getElementById("btnFriends")
friendButton.addEventListener('click', () => {
  fetch('collection.json')
    .then(response => response.json())
    .then(collection => {
      remove() 
      show(collection, "Friends books")
    })
})

const libraryButton = document.getElementById("btnLibrary")
libraryButton.addEventListener('click', () => {
  fetch('collection.json')
    .then(response => response.json())
    .then(collection => {
      remove() 
      show(collection, "School library")
    })
})

const storeButton = document.getElementById("btnStore")
storeButton.addEventListener('click', () => {
  fetch('collection.json')
    .then(response => response.json())
    .then(collection => {
      remove() 
      show(collection, "Book store")
    })
})

// Show all items when page is first visited
fetch("collection.json")
  .then((response) => response.json())
  .then((collection) => {
    show(collection);
  });


const writingMode = document.getElementById("writingMode")
writingMode.addEventListener('click', () => {
  window.location.href = "https://QueenyShen.github.io/projects/ElasticCollection/writingmode.html"
})

const about = document.getElementById("about")
about.addEventListener('click', () => {
  window.location.href = "https://QueenyShen.github.io/projects/ElasticCollection/about.html"
})

  const switchInput = document.querySelector('.switch input');
  const url2 = 'https://QueenyShen.github.io/projects/ElasticCollection/staticVer.html';
  const url = 'https://QueenyShen.github.io/projects/ElasticCollection/mainpageTest.html';
  
  function redirectTo(url) {
    // Check if the URL is the same as the current page
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
