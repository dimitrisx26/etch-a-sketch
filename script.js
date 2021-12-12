const container = document.querySelector("#container");
let rows = document.getElementsByClassName("rows");
let cell = document.getElementsByClassName("cell");
const btn = document.querySelector(".btn");
const btn16 = document.querySelector(".btn16");
const btn32 = document.querySelector(".btn32");
const btn64 = document.querySelector(".btn64");

let cellsNum = 16;
createGrid(cellsNum);

function createGrid(cellNum) {
    createRows(cellNum);
    createColumns(cellNum);
    resizeGrid(cellNum);
    hoverCell();
}

function createRows(rowNum) {
    for (let i = 0; i < rowNum; i++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "rows";
    }
}

function createColumns(cellNum) {
    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
        };
    };
}


function hoverCell() {
    for (let i = 0; i < cell.length; i++) {
        cell[i].addEventListener("mouseover", function () {
            cell[i].classList.add("hovered");
        });
    }
}

function resizeGrid(cellNum) {
    for (let i = 0; i < cell.length; i++) {
        cell[i].classList.add("cell" + cellNum);
    }
}

btn.addEventListener("click", function () {
    for (let i = 0; i < cell.length; i++) {
        cell[i].classList.remove("hovered");
    }
})

btn16.addEventListener("click", function () {
    container.innerHTML = "";
    createGrid(16);
})

btn32.addEventListener("click", function () {
    container.innerHTML = "";
    createGrid(32);
})

btn64.addEventListener("click", function () {
    container.innerHTML = "";
    createGrid(64);
})
