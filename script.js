const canvas = document.getElementById("canvas");
const increaseButton = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeElement = document.getElementById("size");
const colorElement = document.getElementById("color");
const clearElement = document.getElementById("clear");
const context = canvas.getContext("2d");

let size = 5;
let pressed = false;

let color = "#7168F2";
let x = undefined;
let y = undefined;

canvas.addEventListener("mousedown", (event) => {
  pressed = true;

  x = event.offsetX;
  y = event.offsetY;
});

canvas.addEventListener("mouseup", (event) => {
  pressed = false;

  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", (event) => {
  if (pressed) {
    const x2 = event.offsetX;
    const y2 = event.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  context.beginPath();
  context.arc(x, y, size, 0, Math.PI * 2);
  context.fillStyle = color;
  context.fill();
}

function drawLine(x1, y1, x2, y2) {
  context.beginPath();
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.strokeStyle = color;
  context.lineWidth = size * 2;
  context.stroke();
}

increaseButton.addEventListener("click", () => {
  size += 5;

  if (size > 40) {
    size = 40;
  }

  updateSizeOnScreen();
});

decreaseBtn.addEventListener("click", () => {
  size -= 5;

  if (size < 5) {
    size = 5;
  }

  updateSizeOnScreen();
});

colorElement.addEventListener("change", (event) => {
  color = event.target.value;
});

clearElement.addEventListener("click", () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
});

function updateSizeOnScreen() {
  sizeElement.innerText = size;
}
