let title = "MusHRoOm KIngDom";
let colors = [
  "yellow",
  "blue",
  "green",
  "red",
  "orange",
  "purple",
  "yellow",
  "cyan",
];
const letters = title.split("");
for (let i = 0; i < letters.length; i++) {
  document.getElementById("mushroomAttr-title").innerHTML = letters[
    i
  ].fontcolor(colors[i]);
}
