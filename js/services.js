const serviceCards = document.querySelectorAll('.service-card');

window.addEventListener('scroll', () => {
  serviceCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (cardTop < screenHeight - 100) {
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }
  });
});
