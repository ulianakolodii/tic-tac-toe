const state = {
  value: [
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
  ],
  mode: "cc",
};

const setState = (row, column, value) => {
  state.value[row][column] = value;
};

// const getAvailableBoxes = () => state.value.filter((box) => box === undefined);
const getAvailableBoxes = () =>
  state.value
    .flat()
    .map((value, index) => ({ value, index }))
    .filter(({ value }) => value === undefined);
const getRandomNumberTo = (to = 5) => Math.floor(Math.random() * to + 1) - 1;

const matchDiagonalLeft = (arr, value = "X") => {
  return arr[0][0] === value && arr[1][1] === value && arr[2][2] === value;
};

const matchDiagonalRight = (arr, value = "X") => {
  return arr[0][2] === value && arr[1][1] === value && arr[2][0] === value;
};

const matchVertical = (arr, column, value = "X") => {
  for (let row = 0; row < 3; row++) {
    if (arr[row][column] !== value) {
      return false;
    }
  }
  return true;
};

const matchHorizontal = (arr, row, value = "X") =>
  arr[row].every((el) => el === value);

const isWinner = (arr, value) =>
  matchHorizontal(arr, 0, value) ||
  matchHorizontal(arr, 1, value) ||
  matchHorizontal(arr, 2, value) ||
  matchVertical(arr, 0, value) ||
  matchVertical(arr, 1, value) ||
  matchVertical(arr, 2, value) ||
  matchDiagonalLeft(arr, value) ||
  matchDiagonalRight(arr, value);

const whoWinner = () => {
  const available = getAvailableBoxes();
  if (available.length > 4) {
    return false;
  }
  if (isWinner(state.value, "X")) {
    return "X";
  }
  if (isWinner(state.value, "O")) {
    return "O";
  }
  return false;
};

const indexToCordinates = (index) => ({
  row: Math.floor(index / 3),
  column: index % 3,
});

const render = () => {
  const flatState = state.value.flat();
  Array.from(document.querySelectorAll(".box")).forEach((box, index) => {
    if (flatState[index]) {
      box.innerText = flatState[index];
    }
  });
};

const isComputerVsComputer = () => state.mode === "cc";
const isPlayerVsComputer = () => state.mode === "pc";
const isPlayerVsPlayer = () => (state.mode = "pp");

const winnerBoxEl = document.getElementById("winner_box");
let initial = "X";

const clearAll = () => {
  state.value = [
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
  ];
  Array.from(document.querySelectorAll(".box")).forEach((box) => {
    box.innerText = "";
  });
  winnerBoxEl.innerText = "";
  initial = "X";
};

computerVsComputer.addEventListener("click", () => {
  state.mode = "cc";
  clearAll();
});

playerVsComputer.addEventListener("click", () => {
  state.mode = "pc";
  addListeners();
  clearAll();
});

playerVsPlayer.addEventListener("click", () => {
  state.mode = "pp";
  addListeners();
  clearAll();
});

const handlerPlayerVsComputer = (event) => {
  const { row, column } = event.target.dataset;
  if (state.value[row][column] === undefined) {
    state.value[row][column] = "X";
    const available = getAvailableBoxes();
    const randomIndex = getRandomNumberTo(available.length - 1);
    if (randomIndex >= 0) {
      const { index: randomAvailableIndex } = available[randomIndex];
      const { row: randomRow, column: randomColumn } =
        indexToCordinates(randomAvailableIndex);
      state.value[randomRow][randomColumn] = "O";
    }
    render();
    const winner = whoWinner();
    if (winner) {
      winnerBoxEl.innerText = `The winner is ${winner}`;
      removeListeners();
      return;
    }
  }
};

const handlerPlayerVsPlayer = (event) => {
  const { row, column } = event.target.dataset;
  if (state.value[row][column] === undefined) {
    state.value[row][column] = initial;
    initial = initial === "X" ? "O" : "X";
  }
  render();
  const winner = whoWinner();
  if (winner) {
    winnerBoxEl.innerText = `The winner is ${winner}`;
    removeListeners();
  }
};

const addListeners = () => {
  if (isComputerVsComputer()) {
    return;
  }
  const handler =
    state.mode === "pc" ? handlerPlayerVsComputer : handlerPlayerVsPlayer;
  Array.from(document.querySelectorAll(".box")).forEach((box) => {
    box.addEventListener("click", handler, { once: true });
  });
};

const removeListeners = () => {
  Array.from(document.querySelectorAll(".box")).forEach((box) => {
    box.removeEventListener("click", handlerPlayerVsComputer, { once: true });
    box.removeEventListener("click", handlerPlayerVsPlayer, { once: true });
  });
};

const handlerCCClick = () => {
  const availableX = getAvailableBoxes();
  const randomXIndex = getRandomNumberTo(availableX.length - 1);
  if (randomXIndex >= 0) {
    const { index: randomAvailableXIndex } = availableX[randomXIndex];
    const { row: randomXRow, column: randomXColumn } = indexToCordinates(
      randomAvailableXIndex
    );
    state.value[randomXRow][randomXColumn] = "X";
  }
  const availableY = getAvailableBoxes();
  const randomYIndex = getRandomNumberTo(availableY.length - 1);
  if (randomYIndex >= 0) {
    const { index: randomAvailableYIndex } = availableY[randomYIndex];
    const { row: randomYRow, column: randomYColumn } = indexToCordinates(
      randomAvailableYIndex
    );
    state.value[randomYRow][randomYColumn] = "O";
  }
  render();
  const winner = whoWinner();
  if (winner) {
    winnerBoxEl.innerText = `The winner is ${winner}`;
    return;
  }
  setTimeout(() => {
    handlerCCClick();
  }, 500);
};

function CCAddEventListeners() {
  computerVsComputer.addEventListener("click", handlerCCClick);
}
CCAddEventListeners();
