// ===============================
// WHY YOU NEED SECTION – SCROLL ANIMATION
// ===============================

const whyCards = document.querySelectorAll(".why-card");

const whyObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        entry.target.style.transitionDelay = `${index * 0.08}s`;
      }
    });
  },
  { threshold: 0.15 }
);

whyCards.forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(50px)";
  card.style.transition = "all 0.9s ease";
  whyObserver.observe(card);
});

// ===============================
// MOBILE TAP FLIP SUPPORT
// ===============================

whyCards.forEach((card) => {
  card.addEventListener("click", () => {
    const inner = card.querySelector(".why-inner");
    inner.classList.toggle("mobile-flip");
  });
});
