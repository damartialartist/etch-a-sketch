let etchCol = [];
let etchRow = [];
let sizePx = 700;
const drawContainer = document.querySelector(".draw-container");
drawContainer.setAttribute("style",`width:${sizePx}px; height:${sizePx}px`);

function createBoard(sizePx, nDim = 16) {
    drawContainer.innerHTML = "";
for (let i = 0; i < nDim; i++) {
    drawContainer.setAttribute("style", `width:${sizePx}px; height:${sizePx}px;`)
    etchRow[i] = document.createElement("div");
    etchRow[i].setAttribute("class", `row`);
    let height = sizePx/nDim;
    for (let y = 0; y < nDim; y++) {
        etchCol[y] = document.createElement("div");
        etchCol[y].setAttribute("class", `col`);
        etchCol[y].setAttribute("id", `r${i}c${y}`);
        etchCol[y].setAttribute("style", `width: 20px; height:${height}px; border-color=black;`)
        etchRow[i].appendChild(etchCol[y]);
        console.log(y);
    }
    drawContainer.appendChild(etchRow[i]);
  }
}

createBoard(500);

drawContainer.addEventListener('mouseover', (event) => {
    let target = event.target;
    console.log(target.id);
    let currBox = document.getElementById(target.id);
    currBox.style.backgroundColor = "black";
});

let dim;

const resizeBtn = document.querySelector(".header button.dim");
resizeBtn.addEventListener("click", () => {
    dim = prompt("Enter square size (n)", "");

    while (isNaN(dim) || (dim > 100)) {
        dim = prompt("Please enter a number less than 100:", "");
    }
    createBoard(sizePx, dim);
});

const eraseBtn = document.querySelector(".header button.era");
eraseBtn.addEventListener("click", () => {
    createBoard(sizePx, dim);
});