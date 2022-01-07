const colorArray = [
  "#FF6633",
  "#FFB399",
  "#FF33FF",
  "#FFFF99",
  "#00B3E6",
  "#E6B333",
  "#3366E6",
  "#999966",
  "#99FF99",
  "#B34D4D",
  "#80B300",
  "#809900",
  "#E6B3B3",
  "#6680B3",
  "#66991A",
  "#FF99E6",
  "#CCFF1A",
  "#FF1A66",
  "#E6331A",
  "#33FFCC",
  "#66994D",
  "#B366CC",
  "#4D8000",
  "#B33300",
  "#CC80CC",
  "#66664D",
  "#991AFF",
  "#E666FF",
  "#4DB3FF",
  "#1AB399",
  "#E666B3",
  "#33991A",
  "#CC9999",
  "#B3B31A",
  "#00E680",
  "#4D8066",
  "#809980",
  "#E6FF80",
  "#1AFF33",
  "#999933",
  "#FF3380",
  "#CCCC00",
  "#66E64D",
  "#4D80CC",
  "#9900B3",
  "#E64D66",
  "#4DB380",
  "#FF4D4D",
  "#99E6E6",
  "#6666FF",
];
const sounds = [
  { sound: "assets/sounds/bell.wav", icon: "assets/images/bell.png" },
  { sound: "assets/sounds/bird.wav", icon: "assets/images/bird.png" },
  { sound: "assets/sounds/dog.wav", icon: "assets/images/dog.png" },
  { sound: "assets/sounds/kiss.wav", icon: "assets/images/kiss.png" },
  { sound: "assets/sounds/laugh.wav", icon: "assets/images/laugh.png" },
  { sound: "assets/sounds/lion.wav", icon: "assets/images/lion.png" },
  { sound: "assets/sounds/guitar.wav", icon: "assets/images/guitar.png" },
  { sound: "assets/sounds/cat.wav", icon: "assets/images/cat.png" },
  { sound: "assets/sounds/horse.wav", icon: "assets/images/horse.png" },
  { sound: "assets/sounds/rooster.wav", icon: "assets/images/rooster.png" },
  { sound: "assets/sounds/cricket.wav", icon: "assets/images/cricket.png" },
  { sound: "assets/sounds/monkey.wav", icon: "assets/images/monkey.png" },
  { sound: "assets/sounds/cow.wav", icon: "assets/images/cow.png" },
  { sound: "assets/sounds/drum.wav", icon: "assets/images/drum.png" },
  { sound: "assets/sounds/clap.wav", icon: "assets/images/clap.png" },
];
const container = document.querySelector(".container");

function getRandomColor(array) {
  let min = Math.ceil(0);
  let max = Math.floor(array.length);
  let random = Math.floor(Math.random() * (max - min)) + min;
  return array[random];
}
function applyRandomColor(element) {
  element.style.backgroundColor = getRandomColor(colorArray);
  return element;
}
function addColorEffects(element) {
  element.addEventListener("mouseenter", (e) => {
    applyRandomColor(element);
  });
  element.addEventListener("mousedown", (e) => {
    applyRandomColor(element);
  });
}
function createButton(icon, sound) {
  let div = document.createElement("div");
  div.className = "round-box";
  let image = document.createElement("img");
  image.className = "icon";
  image.src = icon;
  div.appendChild(image);
  applyRandomColor(div);
  addColorEffects(div);
  addSoundEffect(div, sound);
  container.appendChild(div);
  return div;
}
function addSoundEffect(element, track) {
  var audio = new Audio(track);
  element.addEventListener("click", (e) => {
    audio.play();
  });
}
sounds.forEach((item) => {
  createButton(item.icon, item.sound);
});
