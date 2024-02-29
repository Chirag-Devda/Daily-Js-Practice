let backgroundColors = [
  "red",
  "blue",
  "green",
  "yellow",
  "purple",
  "orange",
  "pink",
  "cyan",
  "brown",
  "teal",
  "lime",
  "magenta",
  "indigo",
  "violet",
  "olive",
  "navy",
  "maroon",
  "turquoise",
  "silver",
  "gold",
];
let fontColors = [
  "red",
  "blue",
  "green",
  "yellow",
  "purple",
  "orange",
  "pink",
  "cyan",
  "brown",
  "teal",
  "lime",
  "magenta",
  "indigo",
  "violet",
  "olive",
  "navy",
  "maroon",
  "turquoise",
  "silver",
  "gold",
];
// selecting boxes
let box1 = document.getElementsByClassName("box")[0];
let box2 = document.getElementsByClassName("box")[1];
let box3 = document.getElementsByClassName("box")[2];
let box4 = document.getElementsByClassName("box")[3];
let box5 = document.getElementsByClassName("box")[4];
let generator = document.querySelector(".generator");
// generate random background color
var randomBg = Math.floor(Math.random() * backgroundColors.length);
var randomfontColor = Math.floor(Math.random() * fontColors.length);

var boxBackgroundColor = backgroundColors[randomBg];
var boxfontColors = fontColors[randomfontColor];
console.log(boxBackgroundColor);
console.log(boxfontColors);
function colorgenerator(params) {
  if (randomBg >= 0) {
    colormaker();
    box1.style.background = `${boxBackgroundColor}`;
    box1.style.color = `${boxfontColors}`;
    colormaker();
    box2.style.background = `${boxBackgroundColor}`;
    box2.style.color = `${boxfontColors}`;
    colormaker();
    box3.style.background = `${boxBackgroundColor}`;
    box3.style.color = `${boxfontColors}`;
    colormaker();
    box4.style.background = `${boxBackgroundColor}`;
    box4.style.color = `${boxfontColors}`;
    colormaker();
    box5.style.background = `${boxBackgroundColor}`;
    box5.style.color = `${boxfontColors}`;
  }
}
colorgenerator();
function colormaker(params) {
  randomBg = Math.floor(Math.random() * backgroundColors.length);
  randomfontColor = Math.floor(Math.random() * fontColors.length);
  boxBackgroundColor = backgroundColors[randomBg];
  boxfontColors = fontColors[randomfontColor];
}
generator.addEventListener("click", colorgenerator);
