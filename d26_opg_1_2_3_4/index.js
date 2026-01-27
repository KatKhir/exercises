const max = 100;

function randomNumber() {
  const number = Math.floor(Math.random() * (max + 1));
  console.log(number);

  document.querySelector("#number").textContent = number;
}

randomNumber();
