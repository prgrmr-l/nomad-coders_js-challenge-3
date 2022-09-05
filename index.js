const userNum = document.querySelector(".userNum");
const comNum = document.querySelector(".comNum");
const playBtn = document.querySelector(".playBtn");
const resultScreen = document.querySelector(".resultScreen");
const outcome = document.querySelector(".outcome");

function inputUserNum(event) {
  event.preventDefault();
  parseInt(document.querySelector(".userNum").value);
}

function playBtnAction(event) {
  const inUserNum = parseInt(document.querySelector(".userNum").value);
  const outComNum = parseInt(Math.random() * parseInt(inUserNum) * 3 + 1);
  event.preventDefault();
  comNum.value = outComNum;
  resultScreen.innerText = `You chose ${inUserNum},the machine chose ${outComNum}`;
  if (outComNum === inUserNum) {
    outcome.innerText = "You Won!";
  } else if (outComNum !== inUserNum) outcome.innerText = "You lost!";
}

playBtn.addEventListener("click", playBtnAction);
document.addEventListener("submit", inputUserNum);
