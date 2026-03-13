// ===== Mouse Spotlight Movement =====
const hero = document.getElementById("hero");
const spotlight = document.createElement("div");
spotlight.className = "mouse-spotlight";
hero.appendChild(spotlight);

hero.addEventListener("mousemove", (e) => {
  const rect = hero.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;

  hero.style.setProperty("--mouse-x", `${x}%`);
  hero.style.setProperty("--mouse-y", `${y}%`);
});

// ===== Fade In on Load =====
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".hero-text").style.opacity = 1;
  document.querySelector(".hero-image").style.opacity = 1;
});
