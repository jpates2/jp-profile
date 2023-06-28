const contactTalk = document.querySelector(".contact-talk");

contactTalk.addEventListener("click", function () {
  this.classList.toggle("active");
  let content = this.nextElementSibling;
  if (content.style.maxHeight){
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
    console.log(content.scrollHeight);
  }
})
