let gridWidth = 4;
let gridHeight = 4;
let gridTotal = gridWidth * gridHeight;
let wonGame = false;

let countRender;

let grid = document.getElementById("grid");
let matrix = [];

for (let x = 0; x < gridWidth; x++) {

    for (let y = 0; y < gridHeight; y++) {

        let position = document.createElement("div");
        position.setAttribute("class", "position");
        position.setAttribute("id", "i-" + y + "-" + x);

        grid.appendChild(position);
    }
}

for (let x = 0; x < gridWidth; x++) {

    let arr = [];

    for (let y = 0; y < gridHeight; y++) arr.push(0);

    matrix.push(arr);
}