const renderItems = (collection) => {
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
    })
  }
  

fetch('collection.json')
	.then(response => response.json())
	.then(collection => {
		// And passes the data to the function, above!
		renderItems(collection) // In reverse order
	})