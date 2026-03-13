// ===========================
// About Section Scroll Animations
// ===========================
const aboutSection = document.querySelector('#about');
const aboutContent = document.querySelector('.about-content');
const statCards = document.querySelectorAll('.stat-card');

// Options for Intersection Observer
const observerOptions = {
  root: null,           // viewport
  rootMargin: '0px',
  threshold: 0.5        // trigger when 50% visible
};

// Callback for Intersection Observer
const observerCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add active class when in view
      aboutContent.classList.add('active');
      statCards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add('active');
        }, index * 150); // stagger animation by 150ms
      });
    } else {
      // Remove active class when leaving view
      aboutContent.classList.remove('active');
      statCards.forEach(card => card.classList.remove('active'));
    }
  });
};

// Create observer
const observer = new IntersectionObserver(observerCallback, observerOptions);
observer.observe(aboutSection);
