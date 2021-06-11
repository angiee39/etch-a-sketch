// Make 16x16 grid
for (i = 0; i < 16; i++) {
    const grid = document.querySelector('#grid');
    const div = document.createElement('div');
    grid.appendChild(div);
    div.setAttribute('id', 'row');
    div.style.display = 'flex';
}

for (j = 0; j < 16; j++) {
    const rows = document.querySelectorAll('#row')
    rows.forEach((row) => {
        const column = document.createElement('div');
        row.appendChild(column);
        column.setAttribute('id', 'column');
    });  
}

