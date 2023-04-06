const renderItems = (collection) => {
  const collectionList = $('#collection');
  
  // Shuffle the collection array
  const shuffledCollection = shuffleArray(collection);
  
  shuffledCollection.forEach(item => {
    const listItem = $('<li></li>'); // create the `li`
    const itemImage = $('<img>').attr('src', item.wordImage); // And an image with `src` attribute from the JSON
  
    // Make the image draggable
    itemImage.draggable({
      helper: 'clone',
      containment: 'body',
      appendTo: 'body'
    });
  
    listItem.append(itemImage); // Add the image to the `li`
    collectionList.append(listItem); // Then add the whole `li` into the `ul`
    
    // New function for small screens: Remove word image from words menu and display in content container on click
    if (window.innerWidth < 800) {
      itemImage.click(function() {
        $(this).remove(); // Remove the word image from the words menu
        $('#writing-container').append($(this)); // Display the word image in the content container
      });
    }
  });  
};

// Shuffle array function
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Highlight container/drop function for desktop
$(function() {
  const contentContainer = $('.content-container');
  $('#writing-container').droppable({
    drop: function(event, ui) {
      if (ui.draggable.is('img')) { // Check if the dropped item is an image
        contentContainer.removeClass('hovered'); // Remove the background color
      }
      $(this).append(ui.draggable); // Append the dragged item to the writing container
    },
    over: function(event, ui) {
      contentContainer.addClass('hovered'); // Add the class to the content container when the draggable item is hovered
    },
    out: function(event, ui) {
      contentContainer.removeClass('hovered'); // Remove the class when mouse is no longer hovered over the writing container
    }
  });
});




const readingMode = document.getElementById("readingMode")
readingMode.addEventListener('click', () => {
  window.location.href = "https://QueenyShen.github.io/projects/ElasticCollection/about.html"
})

const about = document.getElementById("about")
about.addEventListener('click', () => {
  window.location.href = "https://QueenyShen.github.io/projects/ElasticCollection/staticVer.html"
})



const remove = () => {
  const collectionList = document.getElementById('collection')
  collectionList.innerHTML = '' // Clear all items from the container
}


//filters
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

// mobile ver buttons
const mobileAbout = document.getElementById("mobileAbout")
mobileAbout.addEventListener('click', () => {
  window.location.href = "https://QueenyShen.github.io/projects/ElasticCollection/about.html"
})

const mobileReading = document.getElementById("mobileReading")
mobileReading.addEventListener('click', () => {
  window.location.href = "https://QueenyShen.github.io/projects/ElasticCollection/staticVer.html"
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
const mobileLibrary = document.getElementById("mobileLibrary")
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


// const renderItems = (collection) => {
//     // The `ul` where the items will be inserted
//     const collectionList = document.getElementById('collection')

//     // Shuffle the collection array
//     const shuffledCollection = shuffleArray(collection);

//     // Loop through each item in the shuffled collection array
//     shuffledCollection.forEach(item => {
//         const listItem = document.createElement('li') // Make the `li`
//         const itemImage = document.createElement('img') // And an image
//         itemImage.src = item.wordImage// Set the `src` attribute from the JSON

//         listItem.appendChild(itemImage) // And add that too
//         collectionList.appendChild(listItem) // Then add the whole `li` into the `ul'
//     })  
// }


// // Shuffle array function
// function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
// }


// // Fetch gets your JSON file…
// fetch('collection.json')
// 	.then(response => response.json())
// 	.then(collection => {
// 		// And passes the data to the function, above!
// 		renderItems(collection) // In reverse order
// 	})
