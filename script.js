// required containts
let gameover = document.querySelector(".gameover");
let scoreboard = document.querySelector(".scoreboard");
let Dino = document.querySelector(".Dino");
let obstacle = document.querySelector(".obstacle");
let newGame = document.querySelector(".newGame");
let playerinfo = document.querySelector(".playerinfo");
let startGame = document.querySelector(".startGame");
let DinoName = document.querySelector(".DinoName");
let audioStart = new Audio("assets/music.mp3");
let audioOver = new Audio("assets/gameover.mp3");

/** small resource to make controil */
score = 0; //This is use to add score
newGameScore = 0; // is use when click on newgamebtn
cross = true; //This is use to control adding score
startGameBtn = false; //this to enable the dino to move when click on Done
addscores = true;

// onkeydown function use to make control on keys as per there key code
document.onkeydown = function (e) {
  console.log("key code is ", e.keyCode); // e.keycode show the code number of which key was pressed with help of keycode make conditions

  // jump
  if (e.keyCode == 38 && startGameBtn) {
    Dino.classList.add("dinoanime");
    setTimeout(() => {
      Dino.classList.remove("dinoanime");
    }, 700);
  }
  // forward
  else if (e.keyCode == 39 && startGameBtn) {
    Dinox = parseFloat(
      window.getComputedStyle(Dino, null).getPropertyValue("left")
    );
    Dino.style.left = Dinox + 122 + "px";
    Dino.style.transform = "";
    document.querySelector(".DinoName").style.transform = "";
  }
  // Backward
  else if (e.keyCode == 37 && startGameBtn) {
    Dinox = parseFloat(
      window.getComputedStyle(Dino, null).getPropertyValue("left")
    );
    Dino.style.left = Dinox - 122 + "px";
    Dino.style.transform = " rotateY(180deg)";
    document.querySelector(".DinoName").style.transform = "rotateY(180deg)";
  }
};
// enter
// this setInterval is use track the distance betwwen dino and rino if the come close game over other wise add scores
setInterval(() => {
  dx = parseFloat(window.getComputedStyle(Dino, null).getPropertyValue("left"));
  dy = parseFloat(window.getComputedStyle(Dino, null).getPropertyValue("top"));
  ox = parseFloat(
    window.getComputedStyle(obstacle, null).getPropertyValue("left")
  );
  oy = parseFloat(
    window.getComputedStyle(obstacle, null).getPropertyValue("top")
  );

  offsetx = Math.abs(dx - ox);
  offsety = Math.abs(dy - oy);

  // gameover and continue condition
  if (offsetx < 113 && offsety < 53) {
    gameover.style.visibility = "visible";
    newGame.style.visibility = "visible";
    Dino.classList.add("gameoveranime");
    obstacle.classList.remove("obstacleanime");
    scorestop(score);
    addscores = false;
    setTimeout(() => {
      Dino.classList.toggle("removeDragaon");
    }, 1800);
    gameoverMusicControl();
    // when game over at that time the score while not add because if cross will true at game over time than score will adding
  } else if (offsetx < 145 && cross && addscores) {
    score += 1;
    updatescore(score);
    cross = false;
    setTimeout(() => {
      cross = true;
    }, 1000);
  } else {
    console.log("score will not add");
  }
}, 10);
function updatescore(score) {
  scoreboard.innerHTML = "Your Score " + score;
}
function scorestop(score) {
  if (score > 0) {
    scoreboard.innerHTML = "Your Score " + (score - 1);
  } else {
    scoreboard.innerHTML = 0;
  }
}

function newGameFunction() {
  newGame.addEventListener("click", () => {
    score = 0;
    scoreboard.innerHTML = score;
    Dino.classList.remove("gameoveranime");
    Dino.style.left = "";
    Dino.style.right = "";
    newGame.style.visibility = "hidden";
    obstacle.classList.add("obstacleanime");
    Dino.style.transform = "";
    gameover.style.visibility = "hidden";
    addscores = true;
    Dino.classList.toggle("removeDragaon");
    gamestartMusicControl();
  });
}
newGameFunction();

function startGameFunction() {
  startGame.addEventListener("click", () => {
    startGameBtn = true;
    var playerNameInput = document.querySelector(".playername");
    var playerName = playerNameInput.value;
    DinoName.innerHTML = `${playerName}`;
    playerinfo.style.visibility = "hidden";
    obstacle.classList.add("obstacleanime");
    gamestartMusicControl();
    if (playerName == "") {
      DinoName.innerHTML = `Dino`;
    }
  });
}
startGameFunction();

function gameoverMusicControl() {
  audioStart.pause();
  audioOver.play();
  setTimeout(() => {
    audioOver.pause();
  }, 1000);
  if (audioOver.pause) {
    audioOver.currentTime = 0;
    audioOver.play();
  }
}
function gamestartMusicControl() {
  audioStart.currentTime = 0;
  audioStart.play();
}
