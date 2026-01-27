let number = Math.floor(Math.random() * 101);

function checkGuess() {
  let userGuess = Number(document.getElementById("guessInput").value);
  let feedback = document.getElementById("feedback");

  if (userGuess < number) {
    feedback.textContent = "For lavt!";
  } else if (userGuess > number) {
    feedback.textContent = "For højt!";
  } else {
    feedback.textContent = "Du gættede tallet!";
    document.getElementById("celebration").style.display = "block";
  }
}
