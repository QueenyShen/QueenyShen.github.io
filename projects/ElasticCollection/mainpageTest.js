const show = (collection) => {
  // Get the `ul` where the items will be inserted
  const collectionList = document.getElementById("collection");

  collection.forEach((item) => {
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

// Show all items when page is first visited
fetch("collection.json")
  .then((response) => response.json())
  .then((collection) => {
    show(collection);
  });

  const switchElement = document.querySelector('.switch input[type="checkbox"]');
  const switchLink = 'https://QueenyShen.github.io/projects/ElasticCollection/staticVer.html';

  switchElement.addEventListener('click', function() {
      if(this.checked) {
          window.location.href = switchLink;
      }
      return false;
  });
  
