/* Personal Image Moving Left Function */

const personalImage = document.getElementById("personal-image");

personalImage.style.height = "250px";
personalImage.style.left = "1200px";
personalImage.style.paddingTop = "100px";

function movePersonalImageLeft() {
  console.log("hello");
  const leftNumbers = personalImage.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 450) {
    personalImage.style.left = `${left - 30}px`;
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    movePersonalImageLeft();
  }
});

/* Personal Image Moving Right Function */

function movePersonalImageRight() {
  const leftNumbers = personalImage.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left < 1200) {
    personalImage.style.left = `${left + 30}px`;
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    movePersonalImageRight();
  }
});
