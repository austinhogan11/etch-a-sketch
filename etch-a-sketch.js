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
        easDisplay.append(row);
    }

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
        easDisplay.removeChild(row);
    });
}

function reloadGrid(currentSize, newSize) {
    removeGrid(currentSize);
    createGrid(newSize);
}

let size = DEFAULT_GRID_SIZE;
createGrid(size);

const clearBtn = document.querySelector(".clear-btn");
clearBtn.addEventListener('click', () => {
    easBlocks.forEach(block => {
        block.style.background = "white";
    });
});

const sizeBtns = document.querySelectorAll(".size-btn");
sizeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.textContent === "Small") {
            reloadGrid(size, 15);
            size = 15;
        } else if (btn.textContent === "Medium") {
            reloadGrid(size, 30);
            size = 30;
        } else {
            reloadGrid(size, 45);
            size = 45;
        }
    });
});
