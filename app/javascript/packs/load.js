const hiddenSections = document.querySelectorAll(".reveal-section");

const revealSection = function(entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section-hidden");
  sectionObserver.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0
})

hiddenSections.forEach(function(section) {
  sectionObserver.observe(section);
  // section.classList.add("section-hidden")
})
