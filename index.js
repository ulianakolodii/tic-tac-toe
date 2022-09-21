const FBBoxesEl = document.querySelectorAll(".FB_field-box");
const MBBoxesEl = document.querySelectorAll(".MB_field-box");
const PCBoxesEl = document.querySelectorAll(".PC_field-box");
let winnerBoxEl = document.getElementById("winner_box");
const modeFieldEL = document.getElementById("mode_container");
const PCButtonEl = document.getElementById("PC_button");
const PCFieldEl = document.getElementById("PC_field-container");
const FBButtonEl = document.getElementById("FB_button");
const FBFieldEl = document.getElementById("FB_field-container");
const MBButtonEl = document.getElementById("MB_button");
const startMBGameBtnEl = document.getElementById("btn_startMBGame");
const MBFieldEl = document.getElementById("MB_field-container");
const modeButtonEl = document.getElementById("mode_button");
modeButtonEl.style.display = "none";
FBFieldEl.style.display = "none";
PCFieldEl.style.display = "none";
MBFieldEl.style.display = "none";
Array.from(FBBoxesEl).forEach((el) => (el.innerText = ""));
Array.from(MBBoxesEl).forEach((el) => (el.innerText = ""));
Array.from(PCBoxesEl).forEach((el) => (el.innerText = ""));

function showFBMode() {
  FBFieldEl.style.display = "flex";
  PCFieldEl.style.display = "none";
  MBFieldEl.style.display = "none";
  modeFieldEL.style.display = "none";
  modeButtonEl.style.display = "flex";
}

FBButtonEl.addEventListener("click", () => {
  showFBMode();
});

function showMBMode() {
  FBFieldEl.style.display = "none";
  PCFieldEl.style.display = "none";
  MBFieldEl.style.display = "flex";
  modeFieldEL.style.display = "none";
  modeButtonEl.style.display = "flex";
}

MBButtonEl.addEventListener("click", () => {
  showMBMode();
});

function showPCMode() {
  FBFieldEl.style.display = "none";
  PCFieldEl.style.display = "flex";
  MBFieldEl.style.display = "none";
  modeFieldEL.style.display = "none";
  modeButtonEl.style.display = "flex";
}

PCButtonEl.addEventListener("click", () => {
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
let initial = "X";
function FBBoxClick(event) {
  event.target.innerText = initial;
  initial = initial === "X" ? "O" : "X";
  const result = magicCheck(FBBoxesEl);
  if (result !== false) {
    winnerBoxEl.innerHTML = `The winner is ${result}.`;
    FBRemoveEventListeners(FBBoxesEl);
  }
}

function FBRemoveEventListeners(FBBoxesEl) {
  Array.from(FBBoxesEl).forEach((box) =>
    box.removeEventListener("click", FBBoxClick, { once: true })
  );
}

function FBAddEventListeners(FBBoxesEl) {
  Array.from(FBBoxesEl).forEach((box) =>
    box.addEventListener("click", FBBoxClick, { once: true })
  );
}
FBAddEventListeners(FBBoxesEl);

let randomIndexArr = [];
let randomIndex = 0;
let randomBoxes = [];

const generateRandomIndex = () => {
  randomIndexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  let i = 0;
  for (i = 0; i < randomIndexArr.length + 1; i++) {
    console.log("randomIndexArr", randomIndexArr);
    randomIndex = Math.floor(Math.random() * randomIndexArr.length + 1);
  }
  let deletedInd = randomIndexArr.splice(
    randomIndexArr.indexOf(randomIndex),
    1
  );
  console.log("deletedInd", deletedInd);
  return randomIndex;
};

const getBoxesState = (selector = ".MB_field-box") =>
  Array.from(document.querySelectorAll(selector));

const getAvailableBoxes = () =>
  getBoxesState().filter((el) => el.innerText === "");

const getRandomNumberTo = (to = 5) => Math.floor(Math.random() * to + 1) - 1;

function MBBoxClick() {
  const availableBoxes = getAvailableBoxes();
  if (availableBoxes.length < 1) {
    return;
  }
  const randomNumber = getRandomNumberTo(availableBoxes.length - 1);
  const randomBox = availableBoxes[randomNumber];
  randomBox.innerText = initial;
  initial = initial === "X" ? "O" : "X";
  console.log(getAvailableBoxes());
  setTimeout(() => {
    MBBoxClick();
  }, 500);
  // console.log(
  //   getAvailableBoxes(),
  //   getRandomNumberTo(),
  //   getRandomNumberTo(),
  //   getRandomNumberTo(),
  //   getRandomNumberTo(),
  //   getRandomNumberTo(),
  //   getRandomNumberTo()
  // );
  // randomBoxes = [0,1,2,3,4,5,6,7,8];
  // let i = 0;
  // for (i = 0; i < randomBoxes.length + 1; i++) {
  //   console.log('randomBoxes', randomBoxes);
  //   generateRandomIndex();
  // console.log('randomIndex', randomIndex);
  // let boxChoice = randomBoxes.splice(randomIndex, 1);
  // console.log('boxChoice', boxChoice);
  // let randomBox = document.getElementById(`MBBox-${boxChoice}`);
  // console.log('randomBox', randomBox);
  // if (randomBox.innerText == "") {
  //   randomBox.innerText = initial;
  //   initial = initial === "X" ? "O" : "X";
  // } else {
  //   const result = magicCheck(MBBoxesEl);
  //   if (result !== false) {
  //     winnerBoxEl.innerHTML = `The winner is ${result}.`;
  //     MBRemoveEventListeners(MBBoxesEl);
  //   }
  // }}
}

let randomChoicessssssss = 0;
const generateRandomChoice = () => {
  randomNumber = Math.floor(Math.random() * 9);
  return randomNumber;
};

function MBRemoveEventListeners() {
  startMBGameBtnEl.removeEventListener("click", MBBoxClick, { once: true });
}

function MBAddEventListeners() {
  startMBGameBtnEl.addEventListener("click", MBBoxClick, { once: true });
}
MBAddEventListeners();

function PCBoxClick(event) {
  event.target.innerText = initial;
  initial = initial === "X" ? "O" : "X";
  const result = magicCheck(PCBoxesEl);
  if (result !== false) {
    winnerBoxEl.innerHTML = `The winner is ${result}.`;
    PCRemoveEventListeners(PCBoxesEl);
  }
}

function PCRemoveEventListeners(PCBoxesEl) {
  Array.from(PCBoxesEl).forEach((box) =>
    box.removeEventListener("click", PCBoxClick, { once: true })
  );
}

function PCAddEventListeners(PCBoxesEl) {
  Array.from(PCBoxesEl).forEach((box) =>
    box.addEventListener("click", PCBoxClick, { once: true })
  );
}
PCAddEventListeners(PCBoxesEl);

function showModeField() {
  FBFieldEl.style.display = "none";
  PCFieldEl.style.display = "none";
  MBFieldEl.style.display = "none";
  modeFieldEL.style.display = "flex";
  modeButtonEl.style.display = "none";
  winnerBoxEl.innerText = "";
  Array.from(FBBoxesEl).forEach((el) => (el.innerText = ""));
  Array.from(MBBoxesEl).forEach((el) => (el.innerText = ""));
  Array.from(PCBoxesEl).forEach((el) => (el.innerText = ""));
  PCAddEventListeners(PCBoxesEl);
  FBAddEventListeners(FBBoxesEl);
  MBAddEventListeners(MBBoxesEl);
}

modeButtonEl.addEventListener("click", () => {
  showModeField();
});
