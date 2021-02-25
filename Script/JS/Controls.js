document.addEventListener("keydown", (event) => {

    switch (event.keyCode) {
        case 37: // left
            moveTo(3);
            break;
        case 38: // up
            moveTo(0);
            break;
        case 39: // right
            moveTo(1);
            break;
        case 40: // down
            moveTo(2);
            break;         
        default:
            break;
    }
});

function moveTo(direction) {

    countRender = 0;

    newPositions(direction);
    sumPositions(direction);
    newPositions(direction);

    if (countRender > 0) randomValue();

    if (!checkMatrix()) renderScreen(0);
    if (checkWin()) renderScreen(1);

    renderGrid();
}

function sumPositions (direction) {

    let count = 0;

    if (direction == 0 || direction == 3) {

        for (let x = 0; x < gridWidth; x++) {
            for (let y = 0; y < gridHeight; y++) {

                if (matrix[x][y] > 0) { // Se a posição possuir algum valor não nulo

                    if (direction == 0) { 

                        if (y < (gridHeight - 1)) {
                            if (matrix[x][y] == matrix[x][y + 1]) {
                                matrix[x][y] += 1;
                                matrix[x][y + 1] = 0;   
                                count++;
                            }
                        } 
                    } 
                    if (direction == 3) {

                        if (x < (gridWidth - 1)) {
                            if (matrix[x][y] == matrix[x + 1][y]) {
                                matrix[x][y] += 1;
                                matrix[x + 1][y] = 0;   
                                count++;
                            }
                        } 
                    } 
                } // END IF 2
            } // END FOR 2
        } // END FOR 1
    } // END IF 1
    else {

        for (let x = gridWidth - 1; x >= 0; x--) {
            for (let y = gridHeight - 1; y >= 0; y--) {

                if (matrix[x][y] > 0) { // Se a posição possuir algum valor não nulo

                    if (direction == 1) {

                        if (x > 0) {
                            if (matrix[x][y] == matrix[x - 1][y]) {
                                matrix[x][y] += 1;
                                matrix[x - 1][y] = 0;  
                                count++; 
                            }
                        } 
                    } 
                    if (direction == 2) {

                        if (y > 0) {
                            if (matrix[x][y] == matrix[x][y - 1]) {
                                matrix[x][y] += 1;
                                matrix[x][y - 1] = 0;   
                                count++;
                            }
                        } 
                    } 
                } // END IF 2
            } // END FOR 2
        } // END FOR 1
    } // END ELSE

    countRender += count;
}

function newPositions(direction) {

    let count = 0;
    
    if (direction == 0 || direction == 3) {

        for (let i = 0; i < gridTotal; i++) {

            for (let x = 0; x < gridWidth; x++) {
                for (let y = 0; y < gridHeight; y++) {

                    if (matrix[x][y] > 0) { // Se a posição possuir algum valor não nulo

                        if (direction == 0) { 
                            if (y > 0) {
                                if (matrix[x][y - 1] == 0) {
                                    matrix[x][y - 1] = matrix[x][y];   
                                    matrix[x][y] = 0;
                                    count++;
                                }
                            } 
                        } 
                        if (direction == 3) {
                            if (x > 0) {
                                if (matrix[x - 1][y] == 0) {
                                    matrix[x - 1][y] = matrix[x][y];
                                    matrix[x][y] = 0; 
                                    count++;
                                }
                            } 
                        } 
                    } // END IF 2
                } // END FOR 3
            } // END FOR 2
        } // END FOR 1
    } // END IF 1
    else {  

        for (let i = 0; i < gridTotal; i++) {

            for (let x = gridWidth - 1; x >= 0; x--) {
                for (let y = gridHeight - 1; y >= 0; y--) {

                    if (matrix[x][y] > 0) { // Se a posição possuir algum valor não nulo

                        if (direction == 1) {

                            for (let i = 0; i < gridWidth; i++) {
                                if (x < (gridWidth - 1)) {
                                    if (matrix[x + 1][y] == 0) {
                                        matrix[x + 1][y] = matrix[x][y];   
                                        matrix[x][y] = 0;
                                        count++;
                                    }
                                } 
                            }
                        } 
                        if (direction == 2) {

                            for (let i = 0; i < gridHeight; i++) {
                                if (y < (gridHeight - 1)) {
                                    if (matrix[x][y + 1] == 0) {
                                        matrix[x][y + 1] = matrix[x][y];   
                                        matrix[x][y] = 0;
                                        count++;
                                    }
                                } 
                            }
                        } 
                    } // END IF 2
                } // END FOR 3
            } // END FOR 2
        } // END FOR 1
    } // END ELSE
    
    countRender += count;
}


function checkMatrix() {

    let check = true;
    let count = 0;
    let posiNull = 0;

    for (let x = 0; x < gridWidth; x++) {
        for (let y = 0; y < gridHeight; y++) {

            if (matrix[x][y] ==  0) posiNull++;
        }
    }

    for (let x = 0; x < gridWidth; x++) {
        for (let y = 0; y < gridHeight; y++) {

            // Posicoes que posuem outras posicoes nas 4 direcoes
            if (x > 0 && y > 0 && x < (gridWidth - 1) && y < (gridHeight - 1)) {

                if (matrix[x][y] == matrix[x + 1][y] ||
                    matrix[x][y] == matrix[x - 1][y] ||
                    matrix[x][y] == matrix[x][y + 1] ||
                    matrix[x][y] == matrix[x][y + 1]) count++;
            }
            // Quinas
            else if (x == 0 && y == 0) {
                if (matrix[x][y] == matrix[x + 1][y] || 
                    matrix[x][y] == matrix[x][y + 1] ) count++;
            }
            else if (x == 0 && y == (gridHeight - 1)) {
                if (matrix[x][y] == matrix[x + 1][y] || 
                    matrix[x][y] == matrix[x][y - 1] ) count++;
            }
            else if (x == (gridWidth - 1) && y == 0) {
                if (matrix[x][y] == matrix[x - 1][y] || 
                    matrix[x][y] == matrix[x][y + 1] ) count++;
            }
            else if (x == (gridWidth - 1) && y == (gridHeight - 1)) {
                if (matrix[x][y] == matrix[x - 1][y] || 
                    matrix[x][y] == matrix[x][y - 1] ) count++;
            }
            // Cantos
            else if (x == 0 && y > 0 && y < (gridHeight - 1)) {
                if (matrix[x][y] == matrix[x + 1][y] || 
                    matrix[x][y] == matrix[x][y - 1] ||
                    matrix[x][y] == matrix[x][y + 1] ) count++;
            }
            else if (y == 0 && x > 0 && x < (gridWidth - 1)) {
                if (matrix[x][y] == matrix[x + 1][y] || 
                    matrix[x][y] == matrix[x - 1][y] ||
                    matrix[x][y] == matrix[x][y + 1] ) count++;
            }
            else if (x == (gridWidth - 1) && y > 0 && y < (gridHeight - 1)) {
                if (matrix[x][y] == matrix[x - 1][y] || 
                    matrix[x][y] == matrix[x][y - 1] ||
                    matrix[x][y] == matrix[x][y + 1] ) count++;
            }
            else if (y == (gridHeight - 1) && x > 0 && x < (gridWidth - 1)) {
                if (matrix[x][y] == matrix[x + 1][y] || 
                    matrix[x][y] == matrix[x - 1][y] ||
                    matrix[x][y] == matrix[x][y - 1] ) count++;
            }
        }
    }

    if (count == 0 && posiNull == 0) check = false;

    return check;
}