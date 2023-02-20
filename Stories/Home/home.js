var element1 = document.querySelector(".door");
element1.addEventListener("click", toggleDoor);

function toggleDoor() {
  element1.classList.toggle("doorOpen");
}



const knob = document.querySelector('.knob');

knob.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default link behavior

  const knobLink = event.currentTarget.closest('.knob-link');

  setTimeout(() => {
    window.location.href = knobLink.href; // Navigate to the link after delay
  }, 1000); // Delay for 1 second (1000 milliseconds)
});


var popupWindow = null;
function positionedPopup(url,winName,w,h,t,l,scroll){
settings =
'height='+h+',width='+w+',top='+t+',left='+l+',scrollbars='+scroll+',resizable'
popupWindow = window.open(url,winName,settings)
}
$(document).ready(function() {$(".entry").draggable(); })
Splitting();

