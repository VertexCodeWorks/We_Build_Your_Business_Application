const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const dropdown = document.querySelector('.dropdown');
const navItems = document.querySelectorAll('.nav-item');

// Toggle mobile menu
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Toggle dropdown on mobile click
dropdown.addEventListener('click', () => {
  if (window.innerWidth <= 992) {
    dropdown.classList.toggle('active');
  }
});

// Close mobile menu when a link is clicked
navItems.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    dropdown.classList.remove('active');
  });
});

// Active link highlight on scroll
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (scrollY >= sectionTop) current = section.getAttribute('id');
  });

  navItems.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
