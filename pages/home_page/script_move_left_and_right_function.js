/* Personal Image Moving Left Function */

const personalimage = document.getElementById("personalimage");

personalimage.style.height = "250px";
personalimage.style.left = "1200px";
personalimage.style.paddingTop = "100px";

function movePersonalImageLeft() {
  console.log("hello");
  const leftNumbers = personalimage.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 450) {
    personalimage.style.left = `${left - 30}px`;
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    movePersonalImageLeft();
  }
});

/* Personal Image Moving Right Function */

function movePersonalImageRight() {
  const leftNumbers = personalimage.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left < 1200) {
    personalimage.style.left = `${left + 30}px`;
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    movePersonalImageRight();
  }
});
