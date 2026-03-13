const whyProItems = document.querySelectorAll(".why-pro-item");

const whyProObserver = new IntersectionObserver(
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

whyProItems.forEach((item) => {
  item.style.opacity = "0";
  item.style.transform = "translateY(40px)";
  item.style.transition = "all 0.8s ease";
  whyProObserver.observe(item);
});
