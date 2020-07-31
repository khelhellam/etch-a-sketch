const container = document.querySelector("#container");

for (let j = 0; j < 16; j++) {
    const line = document.createElement('div');
    line.classList.add('line');
  for (let i = 0; i < 16; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseover", function () {
      this.style.backgroundColor = "blue";
    });
    line.append(square);
  }

  container.append(line);

}
