// const generateRandomChoice = () => {
// 	const randomNumber = Math.floor(Math.random() * 2);
// 	return ["X", "O"][randomNumber];
//   };

let boxesEl = document.querySelectorAll(".field_box");
let winnerBoxEl = document.getElementById("winner_box");

function magicCheck() {
  let arr = [
    Array.from(boxesEl).slice(0, 3),
    Array.from(boxesEl).slice(3, 6),
    Array.from(boxesEl).slice(6, 9),
  ];
  if (
    arr[0][0].innerText === "X" &&
    arr[0][1].innerText === "X" &&
    arr[0][2].innerText === "X"
  ) {
    return "X";
  }
  if (
    arr[1][0].innerText === "X" &&
    arr[1][1].innerText === "X" &&
    arr[1][2].innerText === "X"
  ) {
    return "X";
  }
  if (
    arr[2][0].innerText === "X" &&
    arr[2][1].innerText === "X" &&
    arr[2][2].innerText === "X"
  ) {
    return "X";
  }
  if (
    arr[0][0].innerText === "X" &&
    arr[1][0].innerText === "X" &&
    arr[2][0].innerText === "X"
  ) {
    return "X";
  }
  if (
    arr[0][1].innerText === "X" &&
    arr[1][1].innerText === "X" &&
    arr[2][1].innerText === "X"
  ) {
    return "X";
  }
  if (
    arr[0][2].innerText === "X" &&
    arr[1][2].innerText === "X" &&
    arr[2][2].innerText === "X"
  ) {
    return "X";
  }
  if (
    arr[0][0].innerText === "X" &&
    arr[1][1].innerText === "X" &&
    arr[2][2].innerText === "X"
  ) {
    return "X";
  }
  if (
    arr[0][2].innerText === "X" &&
    arr[1][1].innerText === "X" &&
    arr[2][0].innerText === "X"
  ) {
    return "X";
  }
  if (
    arr[0][0].innerText === "O" &&
    arr[0][1].innerText === "O" &&
    arr[0][2].innerText === "O"
  ) {
    return "O";
  }
  if (
    arr[1][0].innerText === "O" &&
    arr[1][1].innerText === "O" &&
    arr[1][2].innerText === "O"
  ) {
    return "O";
  }
  if (
    arr[2][0].innerText === "O" &&
    arr[2][1].innerText === "O" &&
    arr[2][2].innerText === "O"
  ) {
    return "O";
  }
  if (
    arr[0][0].innerText === "O" &&
    arr[1][0].innerText === "O" &&
    arr[2][0].innerText === "O"
  ) {
    return "O";
  }
  if (
    arr[0][1].innerText === "O" &&
    arr[1][1].innerText === "O" &&
    arr[2][1].innerText === "O"
  ) {
    return "O";
  }
  if (
    arr[0][2].innerText === "O" &&
    arr[1][2].innerText === "O" &&
    arr[2][2].innerText === "O"
  ) {
    return "O";
  }
  if (
    arr[0][0].innerText === "O" &&
    arr[1][1].innerText === "O" &&
    arr[2][2].innerText === "O"
  ) {
    return "O";
  }
  if (
    arr[0][2].innerText === "O" &&
    arr[1][1].innerText === "O" &&
    arr[2][0].innerText === "O"
  ) {
    return "O";
  } else {
    return false;
  }
}

let i = 0;
let initial = 'X';
function boxClick(event) {
  event.target.innerText = initial;
  initial = initial === 'X' ? 'O': 'X';
  const result = magicCheck();
  if (result !== false) {
    winnerBoxEl.innerHTML = `The winner is ${result}.`;
    removeEventListeners(boxesEl);
  }
}

function removeEventListeners(boxesEl) {
  Array.from(boxesEl).forEach(
    box => box.removeEventListener('click', boxClick, { once: true })
  )
}

function addEventListeners(boxesEl) {
  Array.from(boxesEl).forEach(
    box => box.addEventListener('click', boxClick, { once: true })
  )
}
addEventListeners(boxesEl);


function playGame () {
  if (magicCheck() = false) {
    playerChoice(boxesEl)
  }
  else {
    return magicCheck();
  }
}


