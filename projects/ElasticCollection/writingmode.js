const renderItems = (collection) => {
    // The `ul` where the items will be inserted
    const collectionList = document.getElementById('collection')

    // Shuffle the collection array
    const shuffledCollection = shuffleArray(collection);

    // Loop through each item in the shuffled collection array
    shuffledCollection.forEach(item => {
        const listItem = document.createElement('li') // Make the `li`
        const itemImage = document.createElement('img') // And an image
        itemImage.src = item.wordImage// Set the `src` attribute from the JSON
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
		renderItems(collection) // In reverse order
	})
