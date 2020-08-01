const topcontainer = document.querySelector("#container");
const container = document.querySelector("#box");
const STANDART = 960;

let color = () => {
  return "black";
};

function createResizeButton() {
  const button = document.createElement("button");
  button.textContent = "Resize";
  button.addEventListener("click", reBuild);
  topcontainer.prepend(button);
}

function createColorButton() {
  const button = document.createElement("button");
  button.textContent = "Color";
  button.addEventListener("click", function () {
    color = () => {
        let randomColor =
        `rgb(${getRandom(256)}, ` +
        `${getRandom(256)}, ` +
        `${getRandom(256)})`;
        console.log(randomColor);
        return randomColor;
    };
  });
  topcontainer.prepend(button);
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
        this.style.backgroundColor = color();
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

function getRandom(num) {
    return Math.floor(Math.random() * 256);
}


(function init() {
  createColorButton();
  createResizeButton();
  build(16);
})();
