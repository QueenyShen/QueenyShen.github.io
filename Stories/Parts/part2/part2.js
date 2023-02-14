window.onload = function() {
    window.scrollTo(0,document.body.scrollHeight);
  }

  function reverseWords(str) {
    return str.split(" ").reverse().join(" ");
  }
  document.addEventListener("DOMContentLoaded", function() {
    var text = document.getElementById("text");
    text.innerHTML = reverseWords(text.innerHTML);
  });

  