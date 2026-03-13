// ===============================
// PORTFOLIO SCROLL ANIMATION
// ===============================

const portfolioCards = document.querySelectorAll(".portfolio-card");

const portfolioObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        entry.target.style.transitionDelay = `${index * 0.1}s`;
      }
    });
  },
  { threshold: 0.2 }
);

portfolioCards.forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(50px)";
  card.style.transition = "all 0.9s ease";
  portfolioObserver.observe(card);
});
