let container = document.querySelector(".container");
let symbol = "O";
let lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

createGrid();

let boxes = document.querySelectorAll(".box");

for (let i = 0; i < boxes.length; i++) {
  const box = boxes[i];
  box.addEventListener("click", insertSymbol);
}

function insertSymbol(e) {
  this.removeEventListener("click", insertSymbol);
  symbol === "X" ? (symbol = "O") : (symbol = "X");
  this.innerHTML = symbol;
  checkLines();
}

function checkLines() {
  // const [b0,b1,b2,b3,b4,b5,b6,b7,b8] = boxes;
  // if(b0.innerHTML === b1.innerHTML && b1.innerHTML === b2.innerHTML && b0.innerHTML != "") {
  //     b0.style.background = "tomato";
  //     b1.style.background = "tomato";
  //     b2.style.background = "tomato";
  // }
  // if(b3.innerHTML === b4.innerHTML && b4.innerHTML === b5.innerHTML && b3.innerHTML != "") {
  //     b3.style.background = "tomato";
  //     b4.style.background = "tomato";
  //     b5.style.background = "tomato";
  // }
  lines.forEach(function (line) {
    let box1 = boxes[line[0]];
    let box2 = boxes[line[1]];
    let box3 = boxes[line[2]];

    if (
      box1.innerHTML === box2.innerHTML &&
      box1.innerHTML === box3.innerHTML &&
      box1.innerHTML != ""
    ) {
      box1.style.background = "tomato";
      box2.style.background = "tomato";
      box3.style.background = "tomato";
    }
  });

  stopClicks();
}

function stopClicks() {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].removeEventListener("click", insertSymbol);
  }
}

function createGrid() {
  let text = "";
  for (let i = 0; i < 9; i++) {
    text += '<div class="box"></div>';
  }
  container.innerHTML = text;
}