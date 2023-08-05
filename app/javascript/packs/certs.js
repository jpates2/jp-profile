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
  });
}
