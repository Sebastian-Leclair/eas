// Grid Container
const gridContainer = document.querySelector("#gridContainer");
gridContainer.style.display = "grid";
gridContainer.style.height = "500px";
gridContainer.style.width = "500px";

const colorSelector = document.querySelector("#color-picker");
const defaultColor = "#0000ff";

// Initial Grid
for (let i = 0; i < 256; i++) {
    const gridDiv = document.createElement("div");
    gridDiv.style.border = "0px";
    gridDiv.style.backgroundColor = "white";
    gridContainer.style.gridTemplateColumns = "repeat(16, 1fr)";
    gridContainer.style.gridTemplateRows = "repeat(16, 1fr)";
    gridDiv.addEventListener("mouseover", () => gridDiv.style.backgroundColor = document.getElementById("color-picker").value);
    gridContainer.appendChild(gridDiv);
}

// User Input Grid
const button = document.querySelector("#gridNumber");
button.addEventListener("click", () => {
    let gridSize = prompt("How big do you want the grid to be?")

    if (gridSize > 50) {
        alert("The grid size can't be larger than 50");
        return;
    }

    while(gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

    for (let i = 0; i < (gridSize * gridSize); i++) {
        const gridDiv = document.createElement("div");
        gridDiv.style.border = "0px";
        gridDiv.style.backgroundColor = "white";
        gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
        gridDiv.addEventListener("mouseover", () => gridDiv.style.backgroundColor = document.getElementById("color-picker").value);
        gridContainer.appendChild(gridDiv);
    }
})