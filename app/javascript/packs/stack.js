const stackSquares = document.querySelector(".stack-squares-container");

const revealStack = function(entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("stack-square-opacity");
  stackObserver.unobserve(entry.target);
  console.log("test");
};

const stackObserver = new IntersectionObserver(revealStack, {
  root: null,
  threshold: 0.2
})

stackObserver.observe(stackSquares);
