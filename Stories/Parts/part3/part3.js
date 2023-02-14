const textContainer = document.getElementById("textContainer");

const lines = [
  "A phrase,",
  "&nbsp A line,",
  "&nbsp &nbsp A scrap of language,",
  "&nbsp &nbsp &nbsp A rhythm,an image,",
  "&nbsp &nbsp &nbsp &nbsp Something seen, heard, witnessed,",
  "&nbsp &nbsp &nbsp &nbsp &nbsp Or imagined.",
  "And the lesson is always the same, and young poets recognize this to be one of the most important lessons they can learn: if you have any idea for a poem, an exact grid of intent, you are on the wrong path, a dead-end alley, at the top of a cliff you haven’t even climbed. This is a lesson that can only be learned by trial and error.",
  "I believe many fine poems begin with ideas, but if you tell too many faces this, or tell it too loudly, they will get the wrong idea."
];

let index = 0;

document.addEventListener("click", function() {
  if (index >= lines.length) {
    return;
  }

  const newLine = document.createElement("p");
  newLine.innerHTML = lines[index];
  newLine.classList.add("line" + (index + 1));
  textContainer.appendChild(newLine);
  index++;
});
