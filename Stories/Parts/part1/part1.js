const sentencesContainer = document.querySelector("#sentencesContainer");
const sentences = [  "I miss watching a movie and at the end, huge scrolled words come on the screen and say: The End.",
" I miss finishing a novel and there on the last page, at a discrete distance from the last words of the last sentence, are the dark letters spelling The End.",
"It was its own thrill. I didn’t ignore them, I read them, even if only silently, with a deep sense of feeling: ",
"both the feeling of being replete, a feeling of satisfaction, and the feeling of loss, the sadness of having finished the book.",
"I have never, in my life, read a poem that ended with the words The End. Why is that, I wonder.",
"I think perhaps the brevity of poems compared to novels makes one feel that there has been no great sustention of energy, no marathon worthy of pulling tape across the finish line.",
"And then I found a poem of mine that I had carefully written by hand in the sixth grade, and at the bottom of the page, in India ink, beautifully apart from the rest of the text, were the words The End. ",
"And I realized children very often denote the end because it is indeed a great achievement for them to have written anything, and they are completely unaware of the number of stories and poems that have already been written;",
"they know some, of course, but have not yet found out the extent to which they are not the only persons residing on the planet.",
" And so they sign their poems and stories like kings.",
"Which is a wonderful thing."];
let index = 0;

document.addEventListener("click", function() {
  if (index === sentences.length) {
    return;
  }
  const sentence = sentences[index];
  index++;
  const sentenceElement = document.createElement("div");
  sentenceElement.innerText = sentence;
  sentenceElement.classList.add("sentence");
  let top = 0;
  let left = 0;
  if (index === 1) {
    top = 5;
    left = 5;
  } else if (index === 2) {
    top = 55;
    left = 20;
  } else if (index === 3) {
    top = 30;
    left = 30;
  } else if (index === 4) {
    top = 60;
    left = 70;
  } else if (index === 5) {
    top = 80;
    left = 50;
  }
  else if (index === 6) {
    top = 10;
    left = 80;
  } else if (index === 7) {
    top = 90;
    left = 10;
  } else if (index === 8) {
    top = 15;
    left = 2;
  } else if (index === 9) {
    top = 40;
    left = 70;
  } else if (index === 10) {
    top = 70;
    left = 10;
  } else if (index === 11) {
    top = 15;
    left = 55;
  } 
  sentenceElement.style.top = top + "%";
  sentenceElement.style.left = left + "%";
  sentencesContainer.appendChild(sentenceElement);
});

  
  







// const text = document.getElementById("text");
// const sentences = [
//   "I miss watching a movie and at the end, huge scrolled words come on the screen and say: The End.",
//   " I miss finishing a novel and there on the last page, at a discrete distance from the last words of the last sentence, are the dark letters spelling The End.",
//   "It was its own thrill. I didn’t ignore them, I read them, even if only silently, with a deep sense of feeling: ",
//   "both the feeling of being replete, a feeling of satisfaction, and the feeling of loss, the sadness of having finished the book.",
//   "I have never, in my life, read a poem that ended with the words The End. Why is that, I wonder.",
//   "I think perhaps the brevity of poems compared to novels makes one feel that there has been no great sustention of energy, no marathon worthy of pulling tape across the finish line.",
//   "And then I found a poem of mine that I had carefully written by hand in the sixth grade, and at the bottom of the page, in India ink, beautifully apart from the rest of the text, were the words The End. ",
//   "And I realized children very often denote the end because it is indeed a great achievement for them to have written anything, and they are completely unaware of the number of stories and poems that have already been written;",
//   "they know some, of course, but have not yet found out the extent to which they are not the only persons residing on the planet.",
//   " And so they sign their poems and stories like kings.",
//   "Which is a wonderful thing."
// ];
// let counter = 0;

// document.addEventListener("click", function() {
//     const x = Math.floor(Math.random() * window.innerWidth);
//     const y = Math.floor(Math.random() * window.innerHeight);
    
//     text.innerHTML = sentences[counter % sentences.length];
//     counter++;
    
//     text.style.left = x + "px";
//     text.style.top = y + "px";
//     text.style.display = "block";
//   });



// const textContainer = document.getElementById("textContainer");
// const sentences = [
//     "I miss watching a movie and at the end, huge scrolled words come on the screen and say: The End.",
//       " I miss finishing a novel and there on the last page, at a discrete distance from the last words of the last sentence, are the dark letters spelling The End.",
//       "It was its own thrill. I didn’t ignore them, I read them, even if only silently, with a deep sense of feeling: ",
//       "both the feeling of being replete, a feeling of satisfaction, and the feeling of loss, the sadness of having finished the book.",
//       "I have never, in my life, read a poem that ended with the words The End. Why is that, I wonder.",
//       "I think perhaps the brevity of poems compared to novels makes one feel that there has been no great sustention of energy, no marathon worthy of pulling tape across the finish line.",
//       "And then I found a poem of mine that I had carefully written by hand in the sixth grade, and at the bottom of the page, in India ink, beautifully apart from the rest of the text, were the words The End. ",
//       "And I realized children very often denote the end because it is indeed a great achievement for them to have written anything, and they are completely unaware of the number of stories and poems that have already been written;",
//       "they know some, of course, but have not yet found out the extent to which they are not the only persons residing on the planet.",
//       " And so they sign their poems and stories like kings.",
//       "Which is a wonderful thing."
// ];
// let currentIndex = 0;

// document.addEventListener("click", function() {
//     if (currentIndex >= sentences.length) {
//       return;
//     }
  
//     let x = Math.floor(Math.random() * window.innerWidth);
//     let y = Math.floor(Math.random() * window.innerHeight);
  
//     // Check if x and y are too close to the center of the screen
//     const centerX = window.innerWidth / 2;
//     const centerY = window.innerHeight / 2;
//     const buffer = 50;
//     if (Math.abs(x - centerX) < buffer && Math.abs(y - centerY) < buffer) {
//       return;
//     }
  
//     const randomSentence = sentences[currentIndex];
//     const text = document.createElement("p");
//     text.innerHTML = randomSentence;
//     text.classList.add("text");
//     textContainer.appendChild(text);
  
//     // Check if text overlaps with any other text elements
//     let overlap = false;
//     const textElements = textContainer.getElementsByClassName("text");
//     for (let i = 0; i < textElements.length - 1; i++) {
//       const otherText = textElements[i];
//       const rect1 = text.getBoundingClientRect();
//       const rect2 = otherText.getBoundingClientRect();
//       if (
//         rect1.left < rect2.right &&
//         rect1.right > rect2.left &&
//         rect1.top < rect2.bottom &&
//         rect1.bottom > rect2.top
//       ) {
//         overlap = true;
//         break;
//       }
//     }
//     if (overlap) {
//       textContainer.removeChild(text);
//       return;
//     }
  
//     text.style.left = x + "px";
//     text.style.top = y + "px";
//     currentIndex++;
//   });