var audio = document.createElement("audio");
audio.setAttribute("src", "assets/sound.mp3");
audio.loop = true;

// required element DOM
let track = document.querySelector(".track");
let excilator = document.querySelector(".excilator");
let Break = document.querySelector(".break");
let gameContainer = document.querySelector(".game-container ");
let car = document.querySelector(".car ");

// game start condition
function start(params) {
  setTimeout(() => {
    audio.play(); // use settimeout because some browser already autoplay sound these support all browxer
  }, 100);
  track.classList.add("excilatorclicksoundstart"); //To move the track when sound start
  track.classList.remove("breakclicksoundstop"); //
  Break.classList.remove("clickbreak");
  gameContainer.classList.add("bodyshaking");
  car.classList.add("carshaking");
  excilator.classList.add("clickexcilator");
}
excilator.addEventListener("click", start);

// game stop condition
function stop(params) {
  if (audio.played) {
    setTimeout(() => {
      audio.pause();
    }, 100);

    track.classList.add("breakclicksoundstop");
    track.classList.remove("excilatorclicksoundstart");
    excilator.classList.remove("clickexcilator");
    gameContainer.classList.remove("bodyshaking");
    car.classList.remove("carshaking");
  }

  Break.classList.toggle("clickbreak");
}
Break.addEventListener("click", stop);
