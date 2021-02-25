function randomValue() {

    let check = true;

    while (check) {

        check = false;

        let value = Math.floor(Math.random() * 8) + 1;

        if (value == 8) value = 2;
        else value = 1;

        let randomX = Math.floor(Math.random() * gridWidth);
        let randomY = Math.floor(Math.random() * gridHeight);

        if (matrix[randomX][randomY] == 0) {
            matrix[randomX][randomY] = value;

            renderPosition("i-" + randomX + "-" + randomY, value);
        }
        else check = true;
    }
}

function renderGrid(){

    for (let x = 0; x < gridWidth; x++) {

        for (let y = 0; y < gridHeight; y++) {
            renderPosition( "i-" + x + "-" + y, matrix[x][y]);
        }
    }
}

function renderPosition( id, value) {

    let color;
    let div = document.getElementById(id);

    if (value > 0) div.innerHTML = Math.pow(2, value);

    switch (value) {

        case 0:
            color = "transparent";
            div.innerHTML = "";
            break;
        case 1: 
            color = "rgb(138, 185, 255)";
            break;
        case 2: color = "rgb(89, 157, 255)"; 
            break;
        case 3: color = "rgb(38, 127, 255)"; 
            break;
        case 4: color = "rgb(0, 102, 250)"; 
            break;
        case 5: color = "rgb(133, 96, 235)"; 
            break;
        case 6: color = "rgb(99, 54, 224)"; 
            break;
        case 7: color = "rgb(125, 0, 209)"; 
            break;
        case 8: color = "rgb(143, 40, 166)"; 
            break;
        case 9: color = "rgb(104, 0, 128)"; 
            break;
        case 10: color = "rgb(138, 0, 138)"; 
            break;
        case 11: color = "rgb(138, 0, 114)"; 
            break;
        case 12: color = "rgb(97, 0, 80)";   
            break;
        case 13: color = "rgb(138, 0, 92)";    
            break;
        case 14: color = "rgb(69, 0, 46)";    
            break;
        case 15: color = "rgb(82, 0, 38)";    
            break;
        case 16: color = "rgb(61, 1, 18)";    
            break;
        case 17: color = "rgb(43, 0, 1)";    
            break;
        case 18: color = "rgb(54, 21, 0)";    
            break;
        case 19: color = "rgb(31, 20, 0)";    
            break;
        case 20: color = "rgb(15, 14, 0)";    
            break;
        default:  
            color = "rgb( 0, 0, 0)";     
            break;
    }

    div.style.background = color;
}

function renderScreen(type) {

    let screen = document.getElementById("info");

    let text = "";

    if (type == 0) text = "<b>GAME OVER</b>";
    if (type == 1) text = "<b>YOU WIN!</b>";

    screen.innerHTML = text;
    screen.style.display = "block";

}

function checkWin () {

    let check = false;

    for (let x = 0; x < gridWidth; x++) {
        for (let y = 0; y < gridHeight; y++) {
            if (matrix[x][y] == 11 && !wonGame) {
                wonGame = true;
                check = true;
            }
        }
    }

    return check;
}