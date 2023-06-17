// window.onbeforeunload = function () {
//   document.body.scrollTo(0, 0);
//   console.log("Current scroll X/Y", scrollX, scrollY);

// }

addEventListener("load", (event) => {
  window.scrollTo(0, 0)
  console.log("Reload");
});

const bannerHeader = document.querySelector(".banner-header");

const welcomeText = function () {
  const welcomeContent = ["w", "e", "l", "c", "o", "m", "e"];
  let welcomeContentArray = [];

  for (let i = 0; i < welcomeContent.length; i++) {
    welcomeTask(i);
  }

  function welcomeTask(i) {
    setTimeout(function() {
      welcomeContentArray.push(welcomeContent[i])
      bannerHeader.textContent = welcomeContentArray.join("");
    }, 200 * i);
  }
}

welcomeText();


const btnScrollToHome = document.querySelector("#home");
const btnScrollToProject = document.querySelector("#projects");
const btnScrollToAbout = document.querySelector("#about");
const btnScrollToContact = document.querySelector("#contact");
const homeSection = document.querySelector(".home-section");
const projectSection = document.querySelector(".project-section");
const aboutSection = document.querySelector(".about-section");
const contactSection = document.querySelector(".contact-section");

btnScrollToProject.addEventListener("click", function(e) {
  projectSection.scrollIntoView({
    behavior: "smooth"
  })
})

btnScrollToAbout.addEventListener("click", function(e) {
  aboutSection.scrollIntoView({
    behavior: "smooth"
  })
})

btnScrollToHome.addEventListener("click", function(e) {
  homeSection.scrollIntoView({
    behavior: "smooth"
  })
})

btnScrollToContact.addEventListener("click", function(e) {
  contactSection.scrollIntoView({
    behavior: "smooth"
  })
})
