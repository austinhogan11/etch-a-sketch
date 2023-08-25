const DEFAULT_GRID_SIZE = 16;
const easDisplay = document.querySelector('.eas-display');
const easGrid = document.querySelector('.eas-grid');
function createGrid(size) {

    for (let x = 1; x <= size; x++) {
        const row = document.createElement('div');
        row.classList.add('row');

        for (let y = 1; y <= size; y++) {
            const col = document.createElement('div');
            col.classList.add('col');

            const content = document.createElement('div');
            content.classList.add('content');

            col.appendChild(content);
            row.appendChild(col);
        }
        easGrid.append(row);
    }
    easDisplay.append(easGrid);

    easBlocks = document.querySelectorAll(".col");
    easBlocks.forEach(block => {
        block.addEventListener("mouseenter", (e) => {
            e.target.style.background = 'aquamarine';
        });

    });
}

function removeGrid(size) {
    rows = document.querySelectorAll(".row");
    cols = document.querySelectorAll(".col");

    rows.forEach(row => {
        cols.forEach(col => {
            col.remove(col);
        });
        easGrid.removeChild(row);
    });
}

function reloadGrid(currentSize, newSize) {
    removeGrid(currentSize);
    createGrid(newSize);
}

let size = DEFAULT_GRID_SIZE;
createGrid(size);

clearBtn = document.querySelector(".clear-btn");
clearBtn.addEventListener('click', () => {
    easBlocks.forEach(block => {
        block.style.background = "white";
    });
});

sizeBtn = document.querySelector(".size-btn");
sizeBtn.addEventListener('click', () => {
    newSize = parseInt(prompt('Enter new grid size: '));
    reloadGrid(size, newSize);
    size = newSize;
});
