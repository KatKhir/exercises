"use strict"; //Slår strict mode til i JavaScript. Fanger fejl tidligere (fx hvis du glemmer let eller const)

//Finder HTML-elementet med klassen .rock, .paper og .scissor og gemmer dem i variablen rockBtn, paperBtn og scissorBtn. Disse gør at der reageres, når brugeren klikker på “rock”-knappen.
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

//Finder elementet med id player1 og player1. Disse bruges til at vise brugerens hånd og computerens hånd visuelt (via CSS-klasser).
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");

const aDraw = document.querySelector("#draw");
const youLose = document.querySelector("#lose");
const youWin = document.querySelector("#win");

//Opretter en variabel til brugerens valg og computerens valg.
let userChoice;
let computerChoice;

//Venter på, at HTML er færdigindlæst, og kalder derefter init. Sikrer at knapperne findes, før du prøver at bruge dem.
document.addEventListener("DOMContentLoaded", init);

//Tilføjer klik-events til hver knap. Funktionen sørger for at der sker noget, når brugeren klikker på knapperne.
function init() {
  rockBtn.addEventListener("click", rockClick);
  paperBtn.addEventListener("click", paperClick);
  scissorsBtn.addEventListener("click", scissorsClick);
}

//Gemmer brugerens valg som "rock" hvis det er den knap som er trykket på.
function rockClick() {
  //   console.log("ROCK");
  userChoice = "rock";
  computerChooses();
}

//Gemmer brugerens valg som "paper" hvis det er den knap som er trykket på.
function paperClick() {
  //   console.log("PAPER");
  userChoice = "paper";
  computerChooses();
}

//Gemmer brugerens valg som "scissors" hvis det er den knap som er trykket på.
function scissorsClick() {
  //   console.log("SCISSORS");
  userChoice = "scissors";
  computerChooses();
}

function computerChooses() {
  console.log("UserChioce", userChoice); //vi kan se i consolen hvad user har valgt
  const choices = ["rock", "paper", "scissors"]; //Liste over mulige valg som computeren kan vælge.
  const randomNumber = Math.floor(Math.random() * 3); //Her laves et tilfældigt helt tal: 0, 1 eller 2 som bruges til at vælge mellem "rock", "paper", "scissors".
  computerChoice = choices[randomNumber]; //Computerens valg bliver tilfældigt.
  handShakeStart(); //Starter animationen, når alle valg er taget. Denne køres inden resultatet vises.
}

function handShakeStart() {
  playAgian(); //resetter spillet og resultaterne når der trykkes på en knap igen og shake begynder
  console.log("computerChioce", computerChoice); //Vi kan se i consolen hvad computeren har valgt.
  //Fjerner gamle hånd-klasser, så vi undgår at gamle valg stadig vises.
  player1.classList.remove("rock", "paper", "scissors");
  player2.classList.remove("rock", "paper", "scissors");

  //Tilføjer shake animationen og starter den.
  player1.classList.add("shake");
  player2.classList.add("shake");

  //Venter 1,8 sekunder og kalder showResult. i CSS står der nemlig dette animation: shake 1.8s ease-in 1 forwards;. Dette gør at shake animationen kører færdigt inden vi vil vise resultatet.
  setTimeout(showResult, 1800);
}

function showResult() {
  //Stopper animationen shake.
  player1.classList.remove("shake");
  player2.classList.remove("shake");

  //Viser de rigtige hænder via CSS. Altså de valg som user og computer har taget.
  player1.classList.add(userChoice);
  player2.classList.add(computerChoice);

  //Kalder funktionen der afgør vinderen.
  decideWinner();
}

function decideWinner() {
  //Skjuler alle resultat-divs (draw, lose, win) ved at tilføje klassen hidden. Sørger for, at gamle resultater fra sidste runde ikke vises, før vi bestemmer det nye resultat.
  aDraw.classList.add("hidden");
  youLose.classList.add("hidden");
  youWin.classList.add("hidden");

  //Tjekker om brugerens valg er det samme som computerens valg.
  if (userChoice === computerChoice) {
    aDraw.classList.remove("hidden"); //Hvis user og computer har valgt det samme er spillet er uafgjort.
    console.log("It´s a draw");
    //Tjekker alle måder, hvor brugeren kan vinde.
  } else if ((userChoice === "rock" && computerChoice === "scissors") || (userChoice === "paper" && computerChoice === "rock") || (userChoice === "scissors" && computerChoice === "paper")) {
    youWin.classList.remove("hidden"); //hvis brugeren vinder vil "you win"
    console.log("You win!");
  } else {
    youLose.classList.remove("hidden"); //Hvis ikke det er uafgjort eller brugeren vinder, så taber brugeren.
    console.log("You lose...");
  }
}

//Sørger for at disse fjernes når der spilles igen.
function playAgian() {
  aDraw.classList.add("hidden");
  youLose.classList.add("hidden");
  youWin.classList.add("hidden");
}
