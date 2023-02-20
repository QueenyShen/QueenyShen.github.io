var element1 = document.querySelector(".door");
element1.addEventListener("click", toggleDoor1);

function toggleDoor1() {
  element1.classList.toggle("doorOpen");
}


var popupWindow = null;
function positionedPopup(url,winName,w,h,t,l,scroll){
settings =
'height='+h+',width='+w+',top='+t+',left='+l+',scrollbars='+scroll+',resizable'
popupWindow = window.open(url,winName,settings)
}
$(document).ready(function() {$(".entry").draggable(); })
Splitting();


const door = document.querySelector('.door');

door.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default link behavior

  const doorLink = event.currentTarget.closest('.door-link');

  setTimeout(() => {
    window.location.href = doorLink.href; // Navigate to the link after delay
  }, 1000); // Delay for 1 second (1000 milliseconds)
});