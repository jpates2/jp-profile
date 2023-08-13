const certCaret = document.querySelectorAll(".cert-caret");

for (let i = 0; i < certCaret.length; i++) {
  certCaret[i].addEventListener("click", function() {
    console.log("click test");
    let content = this.closest(".cert").querySelector(".cert-details");
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }

    if (certCaret[i].classList.contains("fa-caret-down")) {
      certCaret[i].classList.remove("fa-caret-down");
      certCaret[i].classList.add("fa-caret-up");
    } else {
      certCaret[i].classList.remove("fa-caret-up");
      certCaret[i].classList.add("fa-caret-down");
    }

  });
}
