const etchMouse = document.getElementById('etch');

function etchDraw(e) {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    if (e.target == etchMouse) { return }
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    }


function createGrid(gridSize) {
    for (i = 0; i < Math.pow(gridSize, 2); i++) {
        let gridDiv = document.createElement('div');
        document.getElementById('etch').appendChild(gridDiv);
    }
}

function resetGrid() {
    while (etchMouse.firstChild) {
        etchMouse.removeChild(etchMouse.firstChild)
    }
    etchMouse.style.gridTemplateColumns = 'repeat(16, 1fr)';
    etchMouse.style.gridTemplateRows = 'repeat(16, 1fr)';  
    createGrid(16);
};


function newGrid() {
       while (etchMouse.firstChild) {
        etchMouse.removeChild(etchMouse.firstChild);
    }
let numGrid = document.getElementById("inputText").value;
if (numGrid > 150) {
    alert("Please enter a number between 1 and 150");
    resetGrid();}
else {etchMouse.style.gridTemplateColumns = 'repeat('+ numGrid + ', 1fr)';
etchMouse.style.gridTemplateRows = 'repeat('+ numGrid + ', 1fr)';
createGrid(numGrid);}
};


document.addEventListener('DOMContentLoaded',createGrid(16));
etchMouse.addEventListener('mouseover', etchDraw);
document.getElementById('reset').onclick=resetGrid;
document.getElementById('create').addEventListener('click', newGrid);