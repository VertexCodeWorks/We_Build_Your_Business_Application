const mainCursor = document.querySelector(".cursor-main");
const follower1 = document.querySelector(".cursor-follow-1");
const follower2 = document.querySelector(".cursor-follow-2");

// Cursor Themes
const cursorThemeBlue = {
  mainBorder: "2px solid #00f2ff",
  mainShadow: "0 0 4px rgba(0, 242, 255, 0.8)",
  follow1Border: "2px solid rgba(0, 242, 255, 0.65)",
  follow1Shadow: "0 0 10px rgba(0, 242, 255, 0.4)",
  follow2Border: "2px solid rgba(0, 242, 255, 0.3)",
  follow2Shadow: "0 0 18px rgba(0, 242, 255, 0.2)"
};

const cursorThemeIndigo = {
  mainBorder: "2px solid #05005c",
  mainShadow: "0 0 4px rgba(14, 0, 104, 0.8)",
  follow1Border: "2px solid rgba(5, 0, 92, 0.65)",
  follow1Shadow: "0 0 10px rgba(14, 0, 104, 0.4)",
  follow2Border: "2px solid rgba(5, 0, 92, 0.3)",
  follow2Shadow: "0 0 18px rgba(14, 0, 104, 0.2)"
};

// Apply a cursor theme
function applyCursorTheme(theme) {
  mainCursor.style.borderLeft = theme.mainBorder;
  mainCursor.style.borderBottom = theme.mainBorder;
  mainCursor.style.filter = `drop-shadow(${theme.mainShadow})`;

  follower1.style.border = theme.follow1Border;
  follower1.style.boxShadow = theme.follow1Shadow;

  follower2.style.border = theme.follow2Border;
  follower2.style.boxShadow = theme.follow2Shadow;
}

// Track mouse
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let pos1X = mouseX, pos1Y = mouseY;
let pos2X = mouseX, pos2Y = mouseY;

const mainWidth = 14, mainHeight = 14;
const follow1Width = 32, follow1Height = 32;
const follow2Width = 56, follow2Height = 56;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  mainCursor.style.transform =
    `translate3d(${mouseX - mainWidth/2}px, ${mouseY - mainHeight/2}px, 0) rotate(-45deg)`;
});

function animate() {
  pos1X += (mouseX - pos1X) * 0.07;
  pos1Y += (mouseY - pos1Y) * 0.07;

  pos2X += (mouseX - pos2X) * 0.05;
  pos2Y += (mouseY - pos2Y) * 0.05;

  follower1.style.transform =
    `translate3d(${pos1X - follow1Width/2}px, ${pos1Y - follow1Height/2}px, 0)`;
  follower2.style.transform =
    `translate3d(${pos2X - follow2Width/2}px, ${pos2Y - follow2Height/2}px, 0)`;

  requestAnimationFrame(animate);
}

animate();

// === MANUAL ASSIGNMENT ===
// Assign a cursor theme to each section manually
const sectionCursorMap = {
  "hero": cursorThemeBlue,
  "about": cursorThemeIndigo,
  "skills": cursorThemeBlue,
  "portfolio": cursorThemeBlue,
  "why-choose-us": cursorThemeIndigo,
  "why-need": cursorThemeBlue,
  "services": cursorThemeIndigo,
  "contact": cursorThemeBlue
};

for (const [id, theme] of Object.entries(sectionCursorMap)) {
  const section = document.getElementById(id);
  if (!section) continue;

  section.addEventListener("mouseenter", () => applyCursorTheme(theme));
  section.addEventListener("mouseleave", () => applyCursorTheme(cursorThemeBlue)); // default cursor
}
