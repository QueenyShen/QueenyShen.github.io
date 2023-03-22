const renderItems = (collection, speed) => {
    // The `ul` where the items will be inserted
    const collectionList = document.getElementById('collection')
  
    // Loop through each item in the collection array
    collection.forEach(item => {
      const listItem = document.createElement('li') // Make the `li`
      const itemImage = document.createElement('img') // And an image
      itemImage.src = item.bookCover // Set the `src` attribute from the JSON
  
      itemImage.style.position = 'absolute' // Set the position of the image to absolute
  
      const container = document.getElementById('collection')
      const x = Math.random() * container.offsetWidth
      const y = Math.random() * container.offsetHeight
      itemImage.style.left = `${x}px`
      itemImage.style.top = `${y}px`
  
      listItem.appendChild(itemImage) // And add that too
      collectionList.appendChild(listItem) // Then add the whole `li` into the `ul`
  
      // Set up the image to move at a set speed
      const dx = Math.random() * 2 - 1 // Random x velocity between -1 and 1
      const dy = Math.random() * 2 - 1 // Random y velocity between -1 and 1
      let xPos = x
      let yPos = y
      setInterval(() => {
        xPos += dx * speed // Update x position
        yPos += dy * speed // Update y position
        // Check if the image is still within the container
        if (xPos < 0 || xPos > container.offsetWidth || yPos < 0 || yPos > container.offsetHeight) {
          // If not, reset its position to a random point inside the container
          xPos = Math.random() * container.offsetWidth
          yPos = Math.random() * container.offsetHeight
        }
        itemImage.style.left = `${xPos}px`
        itemImage.style.top = `${yPos}px`
      }, 50) // Update position every 50 milliseconds
    })
  }
  
  fetch('collection.json')
    .then(response => response.json())
    .then(collection => {
      // And passes the data to the function, above!
      renderItems(collection, 1) 
    })
