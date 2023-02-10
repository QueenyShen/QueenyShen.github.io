var controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    triggerElement: "#trigger1",
    triggerHook: 0.3, // show, when scrolled 10% into view
    duration: "50%", // hide 10% before exiting view (80% + 10% from bottom)
    offset: 50 // move trigger to center of element
})
.setClassToggle("#reveal1", "visible") // add class to reveal
.addIndicators() // add indicators (requires plugin)
.addTo(controller);


new ScrollMagic.Scene({
    triggerElement: "#trigger2",
    triggerHook: 0.2, // show, when scrolled 10% into view
    duration: "50%", // hide 10% before exiting view (80% + 10% from bottom)
    offset: 50 // move trigger to center of element
})
.setClassToggle("#reveal2", "visible") // add class to reveal
.addIndicators() // add indicators (requires plugin)
.addTo(controller);


new ScrollMagic.Scene({
    triggerElement: "#trigger3",
    triggerHook: 0.1, // show, when scrolled 10% into view
    duration: "50%", // hide 10% before exiting view (80% + 10% from bottom)
    offset: 50 // move trigger to center of element
})
.setClassToggle("#reveal3", "visible") // add class to reveal
.addIndicators() // add indicators (requires plugin)
.addTo(controller);


new ScrollMagic.Scene({
    triggerElement: "#trigger4",
    triggerHook: 0, // show, when scrolled 10% into view
    duration: "50%", // hide 10% before exiting view (80% + 10% from bottom)
    offset: 50 // move trigger to center of element
})
.setClassToggle("#reveal4", "visible") // add class to reveal
.addIndicators() // add indicators (requires plugin)
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#trigger5",
    triggerHook: 0.2, // show, when scrolled 10% into view
    duration: "30%", // hide 10% before exiting view (80% + 10% from bottom)
    offset: 50 // move trigger to center of element
})
.setClassToggle("#reveal4", "visible") // add class to reveal
.addIndicators() // add indicators (requires plugin)
.addTo(controller);

