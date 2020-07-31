const container = document.querySelector("#container");
const STANDART = 960;

function createButton() {
  const button = document.createElement("button");
  button.textContent = "Resize";
  button.addEventListener("click", reBuild);
  container.prepend(button);
}

function build(size) {
  for (let j = 0; j < size; j++) {
    const line = document.createElement("div");
    line.classList.add("line");
    line.style.height = `${STANDART / size}px`;
    for (let i = 0; i < size; i++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.addEventListener("mouseover", function () {
        this.style.backgroundColor = "blue";
      });
      square.style.width = `${STANDART / size}px`;
      square.style.height = `${STANDART / size}px`;
      line.append(square);
    }
    container.append(line);
  }
}

function reBuild() {
  let size = prompt("Size?");
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
  build(size);
}

(function init() {
  createButton();
  build(16);
})();
