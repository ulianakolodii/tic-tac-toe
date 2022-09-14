// const generateRandomChoice = () => {
// 	const randomNumber = Math.floor(Math.random() * 2);
// 	return ["X", "O"][randomNumber];
//   };

let BoxesEl = document.querySelectorAll(".field_box");

function magicCheck() {
  let arr = [
    Array.from(BoxesEl).slice(0, 3),
    Array.from(BoxesEl).slice(3, 6),
    Array.from(BoxesEl).slice(6, 9),
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

function playerChoice(BoxesEl) {
  let i = 0;
  for (let box of BoxesEl) {
    box.addEventListener(
      "click",
      function () {
        box.innerText = ["X", "O"][i % 2];
        i++;
      },
      { once: true }
    );
  }
}

playerChoice(BoxesEl);
