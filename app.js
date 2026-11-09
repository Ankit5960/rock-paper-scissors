let playerscore = 0;
let computerscore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#message");

const playerscoreDisplay = document.querySelector("#player-score");
const computerscoreDisplay = document.querySelector("#computer-score");

const gencomputerchoice = () => {
  // rock paper scissors
  const options = ["rock", "paper", "scissors"];
  const randomnumber = Math.floor(Math.random() * 3);
  return options[randomnumber];
};

const drawgame = () => {
  console.log("It's a draw!");
  msg.textContent = "It's a draw!";
  msg.style.backgroundColor = "#081b31";
};

const showwinner = (userwin, userchoice, computerChoice) => {
  if (userwin) {
    playerscore++;
    playerscoreDisplay.textContent = playerscore;
    console.log("You win!");
    msg.textContent = `You win! ${userchoice} beats ${computerChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    computerscore++;
    computerscoreDisplay.textContent = computerscore;
    console.log("Computer wins!");
    msg.textContent = `Computer wins! ${computerChoice} beats ${userchoice}`;
    msg.style.backgroundColor = "red";
  }
  console.log(`Player Score: ${playerscore}, Computer Score: ${computerscore}`);
};

const playGame = (userChoice) => {
  console.log("user choice = ", userChoice);

  // generate computer choice
  const computerChoice = gencomputerchoice();
  console.log("computer choice = ", computerChoice);

  if (userChoice === computerChoice) {
    drawgame();
  } else {
    let userwin = true;

    if (userChoice === "rock") {
      computerChoice === "paper" ? (userwin = false) : (userwin = true);
    } else if (userChoice === "paper") {
      computerChoice === "scissors" ? (userwin = false) : (userwin = true);
    } else {
      computerChoice === "rock" ? (userwin = false) : (userwin = true);
    }

    showwinner(userwin, userChoice, computerChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
