let userScore = 0;
let comScore = 0;
const userPara = document.querySelector("#user-score");
const comPara = document.querySelector("#com-score");
const choice = document.querySelectorAll(".choices");
const msge = document.querySelector("#msg");
const comChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
};
const draw = () => {
  console.log("Game draw");
  msge.innerText = "Game draw!";
  msge.style.backgroundColor = "#081b31";
};
const showWinner = (userWin, userchoice, getComChoice) => {
  if (userWin) {
    userScore++;
    userPara.innerText = userScore;
    msge.innerText = `You won! ${userchoice} beats ${getComChoice}`;
    msge.style.backgroundColor = "green";
  } else {
    comScore++;
    comPara.innerText = comScore;
    msge.innerText = `You lost! ${getComChoice} beats ${userchoice}`;
    msge.style.backgroundColor = "red";
  }
};
const playGame = (userchoice) => {
  console.log("user choice", userchoice);
  const getComChoice = comChoice();
  console.log("comp choice", getComChoice);
  if (userchoice === getComChoice) {
    draw();
  } else {
    let userWin = true;
    if (userchoice === "rock") {
      userWin = getComChoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      userWin = getComChoice === "scissors" ? false : true;
    } else {
      userWin = getComChoice === "rock" ? false : true;
    }
    showWinner(userWin, userchoice, getComChoice);
  }
};
choice.forEach((choices) => {
  choices.addEventListener("click", () => {
    const userchoice = choices.getAttribute("id");
    playGame(userchoice);
  });
});
