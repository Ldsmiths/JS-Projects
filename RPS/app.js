let playerScore = document.getElementById("playerScore");
let cpuStore = document.getElementById("cpuStore");
let messageContent = document.getElementById("messageContent");
let btnRock = document.getElementById("rock");
let btnScissors = document.getElementById("scissors");
let btnPaper = document.getElementById("paper");
let resetScore = document.getElementById("reset");
let buttons = [btnRock, btnPaper, btnScissors];
let cpuImg = document.getElementById("cpuImg");
let rockImg = "<img src='images/rock.png'>";

buttons.forEach((button) => button.addEventListener("click", playRound));
resetScore.addEventListener("click",resetGame);

function computerSelection(){
  let num = Math.random();
  let text = "";
  if (num <= 0.33){
    text = "rock";
    cpuImg.innerHTML = "CPU plays: <img src='images/" + text + ".png'>"
  }
  else if (num > 0.33 && num <= 0.66){
   text = "paper";
   cpuImg.innerHTML = "CPU plays: <img src='images/" + text + ".png'>"
  }
  else if(num > 0.66){
    text = "scissors";
    cpuImg.innerHTML = "CPU plays: <img src='images/" + text + ".png'>"
  }
  console.log(num);
  return text;
}

function resetGame() {
insertText.innerHTML = "";
playerScore.innerHTML = 0;
cpuScore.innerHTML = 0;
cpuImg.innerHTML = ""
}

function playRound(e) {
  let playerSelection = e.target.id;
  let playerCounter = Number(playerScore.innerHTML);
  let computerCounter = Number(cpuScore.innerHTML);

  switch (playerSelection + "-" + computerSelection()) {
    case "rock-rock":
    case "paper-paper":
    case "scissors-scissors":
      insertText.innerHTML = "Draw";
      break;
    case "rock-paper":
    case "paper-scissors":
    case "scissors-rock":
      cpuScore.innerHTML = `${computerCounter + 1}`;
      insertText.innerHTML = "You Lose";
      break;
    case "rock-scissors":
    case "paper-rock":
    case "scissors-paper":
      playerScore.innerHTML = `${playerCounter +1}`;
      insertText.innerHTML = "You win";
      break;
  }
  if (playerCounter === 5) {
    alert("You win!");
    resetGame();
  }
  else if (computerCounter === 5) {
    alert("CPU wins!");
    resetGame();
  }
}


