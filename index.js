// const generateRandomChoice = () => {
// 	const randomNumber = Math.floor(Math.random() * 2);
// 	return ["X", "O"][randomNumber];
//   };

const FBBoxesEl = document.querySelectorAll(".FB_field-box");
const MBBoxesEl = document.querySelectorAll(".MB_field-box");
const PCBoxesEl = document.querySelectorAll(".PC_field-box");
let winnerBoxEl = document.getElementById("winner_box");
const modeFieldEL = document.getElementById("mode_container")
const PCButtonEl = document.getElementById("PC_button")
const PCFieldEl = document.getElementById("PC_field-container");
const FBButtonEl = document.getElementById("FB_button")
const FBFieldEl = document.getElementById("FB_field-container");
const MBButtonEl = document.getElementById("MB_button")
const MBFieldEl = document.getElementById("MB_field-container");

function showFBMode() {
  FBFieldEl.style.display = "flex";
  PCFieldEl.style.display = "none";
  MBFieldEl.style.display = "none";
  modeFieldEL.style.display = "none";
} 

FBButtonEl.addEventListener('click', () => {
  showFBMode();
});

function showMBMode() {
  FBFieldEl.style.display = "none";
  PCFieldEl.style.display = "none";
  MBFieldEl.style.display = "flex";
  modeFieldEL.style.display = "none";
} 

MBButtonEl.addEventListener('click', () => {
  showMBMode();
});

function showPCMode() {
  FBFieldEl.style.display = "none";
  PCFieldEl.style.display = "flex";
  MBFieldEl.style.display = "none";
  modeFieldEL.style.display = "none";
} 

PCButtonEl.addEventListener('click', () => {
  showPCMode();
});

function magicCheck(boxes) {
  let arr = [
    Array.from(boxes).slice(0, 3),
    Array.from(boxes).slice(3, 6),
    Array.from(boxes).slice(6, 9),
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
function FBBoxClick(event) {
  event.target.innerText = initial;
  initial = initial === 'X' ? 'O': 'X';
  const result = magicCheck(FBBoxesEl);
  if (result !== false) {
    winnerBoxEl.innerHTML = `The winner is ${result}.`;
    removeEventListeners(FBBoxesEl);
  }
}

function removeEventListeners(FBBoxesEl) {
  Array.from(FBBoxesEl).forEach(
    box => box.removeEventListener('click', FBBoxClick, { once: true })
  )
}

function addEventListeners(FBBoxesEl) {
  Array.from(FBBoxesEl).forEach(
    box => box.addEventListener('click', FBBoxClick, { once: true })
  )
}
addEventListeners(FBBoxesEl);

function MBBoxClick(event) {
  event.target.innerText = initial;
  initial = initial === 'X' ? 'O': 'X';
  const result = magicCheck(MBBoxesEl);
  if (result !== false) {
    winnerBoxEl.innerHTML = `The winner is ${result}.`;
    removeEventListeners(MBBoxesEl);
  }
}

function removeEventListeners(MBBoxesEl) {
  Array.from(MBBoxesEl).forEach(
    box => box.removeEventListener('click', MBBoxClick, { once: true })
  )
}

function addEventListeners(MBBoxesEl) {
  Array.from(MBBoxesEl).forEach(
    box => box.addEventListener('click', MBBoxClick, { once: true })
  )
}
addEventListeners(MBBoxesEl);

function PCBoxClick(event) {
  event.target.innerText = initial;
  initial = initial === 'X' ? 'O': 'X';
  const result = magicCheck(PCBoxesEl);
  if (result !== false) {
    winnerBoxEl.innerHTML = `The winner is ${result}.`;
    removeEventListeners(PCBoxesEl);
  }
}

function removeEventListeners(PCBoxesEl) {
  Array.from(PCBoxesEl).forEach(
    box => box.removeEventListener('click', PCBoxClick, { once: true })
  )
}

function addEventListeners(PCBoxesEl) {
  Array.from(PCBoxesEl).forEach(
    box => box.addEventListener('click', PCBoxClick, { once: true })
  )
}
addEventListeners(PCBoxesEl);


