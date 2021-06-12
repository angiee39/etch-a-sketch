// Grid size(px)
let gridSize = 480

// Make grid
function makeGrid(input) {

    for (i = 0; i < input; i++) {
        const grid = document.querySelector('#grid');
        const div = document.createElement('div');
        grid.appendChild(div);
        div.setAttribute('id', 'row');
        div.style.display = 'flex';
    }
    for (j = 0; j < input; j++) {
        const rows = document.querySelectorAll('#row')
        rows.forEach((row) => {
            const column = document.createElement('div');
            row.appendChild(column);
            column.setAttribute('id', 'column');
            column.setAttribute('style', `height: ${gridSize/input}px; width: ${gridSize/input}px`); 
            column.addEventListener('mouseout', function (e) {
                column.style.backgroundColor = "cornsilk"
            });
        });  
    }
};

// Clear grid
function clearGrid() {
    const grid2 = document.querySelector('#grid')
    while (grid2.firstChild) {
        grid2.removeChild(grid2.firstChild);
    }
};

// User input
function userIn() {
    
    while (true)
    {
        let userInput = window.prompt("Enter grid size:");
        let uInput = parseInt(userInput);
        
        if (uInput >= 1 && uInput <= 64) {
            makeGrid(uInput)
            break; 
        }
        if (!prompt()) {
            makeGrid(16)
            break;
        }
    }
};

// Refresh
btn.addEventListener('click', function (e) {
    clearGrid();
    userIn();
});

makeGrid(16)

