// Your code here

// Your code here
const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";
dodger.style.bottom = "0";
dodger.style.left = "100px";

const moveDodgerLeft = () => {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
};

const moveDodgerRight = () => {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);
  if (left < 360) {
    dodger.style.left = `${left + 1}px`;
  }
};
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (event.key === "ArrowRight") {
    moveDodgerRight();
  }
  console
