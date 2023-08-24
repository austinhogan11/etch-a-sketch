const easDisplay = document.querySelector('.eas-display');

const GRID_HEIGHT = 16;
const GRID_WIDTH = 16;

for (let x = 1; x <= GRID_HEIGHT; x++) {
    const row = document.createElement('div');
    row.classList.add('row');

    for (let y = 1; y <= GRID_WIDTH; y++) {
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

clearBtn = document.querySelector(".clear-btn");
clearBtn.addEventListener('click', () => {
    easBlocks.forEach(block => {
        block.style.background = "white";
    });
});
