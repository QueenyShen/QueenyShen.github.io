// working code
const show = (collection, filter = '') => {
  const filteredItems = filter ? collection.filter(item => item.place === filter) : collection;

  // Get the `ul` where the items will be inserted
  const collectionList = document.getElementById('collection')
  collectionList.innerHTML = '' // Clear all items before showing filtered items

  filteredItems.forEach(item => {
    const listItem = document.createElement('li') // Make the `li`
    const itemImage = document.createElement('img') // And an image
    itemImage.src = item.bookCover // Set the `src` attribute from the JSON

    itemImage.style.position = 'absolute' 

    const container = document.getElementById('collection')
    const x = Math.random() * container.offsetWidth
    const y = Math.random() * container.offsetHeight
    itemImage.style.left = `${x}px`
    itemImage.style.top = `${y}px`

    listItem.appendChild(itemImage) // And add that too
    collectionList.appendChild(listItem) // Then add the whole `li` into the `ul`

    // Set up the image to move at a set speed
    let dx = Math.random() * 2 - 1 
    let dy = Math.random() * 2 - 1 
    let xPos = x
    let yPos = y
    setInterval(() => {
      xPos += dx * 0.8 // Update x position
      yPos += dy * 0.8 // Update y position
      
      // Check if the image is still within the container
      if (xPos < 0 || xPos > container.offsetWidth) {
        dx = -dx // Invert x velocity
      }
      if (yPos < 0 || yPos > container.offsetHeight) {
        dy = -dy // Invert y velocity
      }
      // Set new position of image
      itemImage.style.left = `${xPos}px`
      itemImage.style.top = `${yPos}px`
    }, 30) // Update position every 30 milliseconds

    
  })
}

const remove = () => {
  const collectionList = document.getElementById('collection')
  collectionList.innerHTML = '' // Clear all items from the container
}

const allButton = document.querySelector('.left-items .button:nth-child(1)')
allButton.addEventListener('click', () => {
  fetch('collection.json')
    .then(response => response.json())
    .then(collection => {
      show(collection) 
    })
})


const mineButton = document.querySelector('.left-items .button:nth-child(2)')
mineButton.addEventListener('click', () => {
  fetch('collection.json')
    .then(response => response.json())
    .then(collection => {
      remove() // Clear all items from the container
      show(collection, 'My books') // Show only items with "place" equal to "My books"
    })
})


const friendButton = document.querySelector('.left-items .button:nth-child(3)')
friendButton.addEventListener('click', () => {
  fetch('collection.json')
    .then(response => response.json())
    .then(collection => {
      remove() // Clear all items from the container
      show(collection, 'Friends books')
    })
})

const libraryButton = document.querySelector('.left-items .button:nth-child(4)')
libraryButton.addEventListener('click', () => {
  fetch('collection.json')
    .then(response => response.json())
    .then(collection => {
      remove() // Clear all items from the container
      show(collection, 'School library')
    })
})

const storeButton = document.querySelector('.left-items .button:nth-child(5)')
storeButton.addEventListener('click', () => {
  fetch('collection.json')
    .then(response => response.json())
    .then(collection => {
      remove() // Clear all items from the container
      show(collection, 'Book store')
    })
})


// Show all items when page is first visited
fetch('collection.json')
  .then(response => response.json())
  .then(collection => {
    show(collection)
  })



// //test code
// const renderItems = (collection, speed) => {
//   // The `ul` where the items will be inserted
//   const collectionList = document.getElementById('collection')

//   // Loop through each item in the collection array
//   collection.forEach(item => {
//     const listItem = document.createElement('li') // Make the `li`
//     const itemImage = document.createElement('img') // And an image
//     itemImage.src = item.bookCover // Set the `src` attribute from the JSON

    
//     itemImage.style.position = 'absolute' // Set the position of the image to absolute

//     const container = document.getElementById('collection')
//     const x = Math.random() * container.offsetWidth
//     const y = Math.random() * container.offsetHeight
//     itemImage.style.left = `${x}px`
//     itemImage.style.top = `${y}px`

//     listItem.appendChild(itemImage) // And add that too
//     collectionList.appendChild(listItem) // Then add the whole `li` into the `ul`

    // itemImage.onclick = function() {
    //   // Fetch data from JSON file
    //   fetch('collection.json')
    //     .then(response => response.json())
    //     .then(collection => {
    //       const clickedItem = collection.itemImage

    //       // Create modal popup elements
    //       const modal = document.createElement('div')
    //       modal.classList.add('modal')
    //       const modalContent = document.createElement('div')
    //       modalContent.classList.add('modal-content')
    //       const modalTitle = document.createElement('h2')
    //       modalTitle.textContent = clickedItem.Title
    //       const modalAuthor = document.createElement('p')

    //       // Add modal content to modal popup
    //       modalContent.appendChild(modalTitle)
    //       modalContent.appendChild(modalAuthor)
    //       modalContent.appendChild(modalYear)
    //       modal.appendChild(modalContent)
    //       document.body.appendChild(modal)

    //       // Close modal popup when close button is clicked
    //       window.onclick = function(event) {
    //         if (event.target == modal) {
    //           modal.style.display = "none";
    //         }
    //       }
    //     })
    // }

//     // Set up the image to move at a set speed
//     let dx = Math.random() * 4 - 1 
//     let dy = Math.random() * 4 - 1 
//     let xPos = x
//     let yPos = y
//     setInterval(() => {
//       xPos += dx * speed // Update x position
//       yPos += dy * speed // Update y position
      
//       // Check if the image is still within the container
//       if (xPos < 0 || xPos > container.offsetWidth) {
//         dx = -dx // Invert x velocity
//       }
//       if (yPos < 0 || yPos > container.offsetHeight) {
//         dy = -dy // Invert y velocity
//       }
//       // Set new position of image
//       itemImage.style.left = `${xPos}px`
//       itemImage.style.top = `${yPos}px`
//     }, 50) // Update position every 50 milliseconds
    
    
//   })
// }

// fetch('collection.json')
//   .then(response => response.json())
//   .then(collection => {
//     // And passes the data to the function, above!
//     renderItems(collection, 0.8)
//   })



