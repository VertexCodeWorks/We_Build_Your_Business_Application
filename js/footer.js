const footer = document.querySelector('.reveal-footer');

const footerObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      footer.classList.add('show');
    } else {
      footer.classList.remove('show');
    }
  });
}, { threshold: 0.25 });

footerObserver.observe(footer);
