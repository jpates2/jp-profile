const certsCaret = document.querySelectorAll(".cert-caret");
const certsLeft = document.querySelectorAll(".cert-left");
const certsRight = document.querySelectorAll(".cert-right");
const certsBadge = document.querySelectorAll(".cert-badge");

// Collapsible content
for (let i = 0; i < certsCaret.length; i++) {
  certsCaret[i].addEventListener("click", function() {
    let content = this.closest(".cert").querySelector(".cert-details");

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }

    let caretSibling = certsCaret[i].previousElementSibling;

    if (certsCaret[i].classList.contains("fa-caret-down")) {
      certsCaret[i].classList.remove("fa-caret-down");
      certsCaret[i].classList.add("fa-caret-up");
      caretSibling.style.fontWeight = "bold";
      caretSibling.style.fontSize = "24px";
    } else {
      certsCaret[i].classList.remove("fa-caret-up");
      certsCaret[i].classList.add("fa-caret-down");
      caretSibling.style.fontWeight = "normal";
      caretSibling.style.fontSize = "20px";
    }

  });
}


// Slide on scroll
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


// Show cert on hover
for (let i = 0; i < certsBadge.length; i++) {
  certsBadge[i].addEventListener("mouseover", function() {
    certsBadge[i].closest(".cert-details").querySelector(".cert-img").classList.remove("hidden");
  })
};

for (let i = 0; i < certsBadge.length; i++) {
  certsBadge[i].addEventListener("mouseout", function() {
    certsBadge[i].closest(".cert-details").querySelector(".cert-img").classList.add("hidden");

  })
};
