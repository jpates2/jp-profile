const certCaret = document.querySelectorAll(".cert-caret");

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
