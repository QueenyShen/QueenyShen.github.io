var element1 = document.querySelector(".door");
element1.addEventListener("click", toggleDoor1);

function toggleDoor1() {
  element1.classList.toggle("doorOpen");
}

var element2 = document.querySelector(".door2");
element2.addEventListener("click", toggleDoor2);

function toggleDoor2() {
  element2.classList.toggle("doorOpen");
}

var element3 = document.querySelector(".door3");
element3.addEventListener("click", toggleDoor3);

function toggleDoor3() {
  element3.classList.toggle("doorOpen");
}

var element4 = document.querySelector(".door4");
element4.addEventListener("click", toggleDoor4);

function toggleDoor4() {
  element4.classList.toggle("doorOpen");
}

var element5 = document.querySelector(".door5");
element5.addEventListener("click", toggleDoor5);

function toggleDoor5() {
  element5.classList.toggle("doorOpen");
}

var element6 = document.querySelector(".door6");
element6.addEventListener("click", toggleDoor6);

function toggleDoor6() {
  element6.classList.toggle("doorOpen");
}

var element7 = document.querySelector(".door7");
element7.addEventListener("click", toggleDoor7);

function toggleDoor7() {
  element7.classList.toggle("doorOpen");
}

var element8 = document.querySelector(".door8");
element8.addEventListener("click", toggleDoor8);

function toggleDoor8() {
  element8.classList.toggle("doorOpen");
}


const door = document.querySelector('.door');

door.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default link behavior

  const doorLink = event.currentTarget.closest('.door-link');

  setTimeout(() => {
    window.location.href = doorLink.href; // Navigate to the link after delay
  }, 1000); // Delay for 1 second (1000 milliseconds)
});


const door2 = document.querySelector('.door2');

door2.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default link behavior

  const doorLink2 = event.currentTarget.closest('.door-link2');

  setTimeout(() => {
    window.location.href = doorLink2.href; // Navigate to the link after delay
  }, 1000); // Delay for 1 second (1000 milliseconds)
});

const door3 = document.querySelector('.door3');

door3.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default link behavior

  const doorLink3 = event.currentTarget.closest('.door-link3');

  setTimeout(() => {
    window.location.href = doorLink3.href; // Navigate to the link after delay
  }, 1000); // Delay for 1 second (1000 milliseconds)
});

const door4 = document.querySelector('.door4');

door4.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default link behavior

  const doorLink4 = event.currentTarget.closest('.door-link4');

  setTimeout(() => {
    window.location.href = doorLink4.href; // Navigate to the link after delay
  }, 1000); // Delay for 1 second (1000 milliseconds)
});

const door5 = document.querySelector('.door5');

door5.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default link behavior

  const doorLink5 = event.currentTarget.closest('.door-link5');

  setTimeout(() => {
    window.location.href = doorLink5.href; // Navigate to the link after delay
  }, 1000); // Delay for 1 second (1000 milliseconds)
});

const door6 = document.querySelector('.door6');

door2.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default link behavior

  const doorLink6 = event.currentTarget.closest('.door-link6');

  setTimeout(() => {
    window.location.href = doorLink6.href; // Navigate to the link after delay
  }, 1000); // Delay for 1 second (1000 milliseconds)
});

const door7 = document.querySelector('.door7');

door2.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default link behavior

  const doorLink7 = event.currentTarget.closest('.door-link7');

  setTimeout(() => {
    window.location.href = doorLink7.href; // Navigate to the link after delay
  }, 1000); // Delay for 1 second (1000 milliseconds)
});

const door8 = document.querySelector('.door8');

door8.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default link behavior

  const doorLink8 = event.currentTarget.closest('.door-link8');

  setTimeout(() => {
    window.location.href = doorLink8.href; // Navigate to the link after delay
  }, 1000); // Delay for 1 second (1000 milliseconds)
});
