const cursor = document.querySelector(".custom-cursor");
const cursorDot = document.querySelector(".custom-cursor-dot");

let mouseX = 0, mouseY = 0;
let currentX = 0, currentY = 0;

// Track mouse position
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  cursorDot.style.left = mouseX + "px";
  cursorDot.style.top = mouseY + "px";
});

// Smooth lag follow
function smoothFollow() {
  currentX += (mouseX - currentX) * 0.12;
  currentY += (mouseY - currentY) * 0.12;

  cursor.style.left = currentX + "px";
  cursor.style.top = currentY + "px";

  requestAnimationFrame(smoothFollow);
}
smoothFollow();

// Hover effect on clickable elements
document.querySelectorAll("a, button, .cta-btn").forEach(el => {
  el.addEventListener("mouseenter", () => {
    cursor.classList.add("cursor-hover");
  });

  el.addEventListener("mouseleave", () => {
    cursor.classList.remove("cursor-hover");
  });
});
