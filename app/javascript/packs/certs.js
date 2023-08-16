const certCaret = document.querySelectorAll(".cert-caret");
const certsLeft = document.querySelectorAll(".cert-left");
const certsRight = document.querySelectorAll(".cert-right");

for (let i = 0; i < certCaret.length; i++) {
  certCaret[i].addEventListener("click", function() {
    let content = this.closest(".cert").querySelector(".cert-details");

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }

    let caretSibling = certCaret[i].previousElementSibling;

    if (certCaret[i].classList.contains("fa-caret-down")) {
      certCaret[i].classList.remove("fa-caret-down");
      certCaret[i].classList.add("fa-caret-up");
      caretSibling.style.fontWeight = "bold";
      caretSibling.style.fontSize = "24px";
    } else {
      certCaret[i].classList.remove("fa-caret-up");
      certCaret[i].classList.add("fa-caret-down");
      caretSibling.style.fontWeight = "normal";
      caretSibling.style.fontSize = "20px";
    }

  });
}

const revealCerts = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("slide-hidden-right");
  entry.target.classList.remove("slide-hidden-left");
  certObserver.unobserve(entry.target);
}

const certObserver = new IntersectionObserver(revealCerts, {
  root: null,
  threshold: 1,
});

certsLeft.forEach(function(cert) {
  certObserver.observe(cert);
  cert.classList.add("slide-hidden-left");
})

certsRight.forEach(function(cert) {
  certObserver.observe(cert);
  cert.classList.add("slide-hidden-right");
})
