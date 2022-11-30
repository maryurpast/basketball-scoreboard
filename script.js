//Initialization

let homeScore = 0;
let guestScore = 0;

let homePoints = document.getElementById("points-home");
let guestPoints = document.getElementById("points-guest");
homePoints.textContent = 0;
guestPoints.textContent = 0;

//Winner highlight

function winner() {
  let winnerHome = document.getElementById("points-cell-home");
  console.log(winnerHome);
  let winnerGuest = document.getElementById("points-cell-guest");
  console.log(winnerGuest);
  if (homeScore > guestScore) {
    winnerHome.classList.add("winner");
    winnerGuest.classList.remove("winner");
  } else if (homeScore < guestScore) {
    winnerGuest.classList.add("winner");
    winnerHome.classList.remove("winner");
  } else {
    winnerGuest.classList.remove("winner");
    winnerHome.classList.remove("winner");
  }
}

//Adding Scores

function add1ScoreHome() {
  homeScore += 1;
  homePoints.textContent = homeScore;
  winner();
}

function add2ScoreHome() {
  homeScore += 2;
  homePoints.textContent = homeScore;
  winner();
}

function add3ScoreHome() {
  homeScore += 3;
  homePoints.textContent = homeScore;
  winner();
}

function add1ScoreGuest() {
  guestScore += 1;
  guestPoints.textContent = guestScore;
  winner();
}

function add2ScoreGuest() {
  guestScore += 2;
  guestPoints.textContent = guestScore;
  winner();
}

function add3ScoreGuest() {
  guestScore += 3;
  guestPoints.textContent = guestScore;
  winner();
}

//New Game

function newGame() {
  homeScore = 0;
  guestScore = 0;
  homePoints.textContent = 0;
  guestPoints.textContent = 0;
}
