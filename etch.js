let etchCol = [];
let etchRow = [];
let sizePx = 700;
const drawContainer = document.querySelector(".draw-container");
drawContainer.setAttribute("style",`width:${sizePx}px; height:${sizePx}px`);

for (let i = 0; i < 16; i++) {
    etchRow[i] = document.createElement("div");
    etchRow[i].setAttribute("class", `row`);
    let height = sizePx/16;
    for (let y = 0; y < 16; y++) {
        etchCol[y] = document.createElement("div");
        etchCol[y].setAttribute("class", `col`);
        etchCol[y].setAttribute("id", `r${i}c${y}`);
        etchCol[y].setAttribute("style", `width: 20px; height:${height}px; border-color=black;`)
        etchRow[i].appendChild(etchCol[y]);
        console.log(y);
    }
    drawContainer.appendChild(etchRow[i]);
}

drawContainer.addEventListener('mouseover', (event) => {
    let target = event.target;
    console.log(target.id);
    let currBox = document.getElementById(target.id);
    currBox.style.backgroundColor = "black";
});

