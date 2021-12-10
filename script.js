const container = document.querySelector("#container");
let rows = document.getElementsByClassName("rows");
let cell = document.getElementsByClassName("cell");
const btn = document.querySelector("button")

let cellsNum = gridSize();

function createGrid(cellNum) {
    createRows(cellNum);
    createColumns(cellNum);
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



function gridSize(btn) {
    let cellNum = 110;
    while (cellNum > 100) {
        cellNum = prompt("How many squares per side for the new grid, max 100!");
    }

    return cellNum;
}

btn.addEventListener("click", function () {
    for (let i = 0; i < cell.length; i++) {
        cell[i].classList.remove("hovered");
        
    }
})


createGrid(cellsNum);
hoverCell();