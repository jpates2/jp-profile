addEventListener("load", (event) => {
  window.scrollTo(0, 0)
  console.log("Reload");
});

const bannerHeader = document.querySelector(".banner-header");
const profileInfo = document.querySelector(".profile-info")

const btnScrollToHome = document.querySelector("#home");
const btnScrollToProject = document.querySelector("#projects");
const btnScrollToAbout = document.querySelector("#about");
const btnScrollToCert = document.querySelector("#cert");
const btnScrollToContact = document.querySelector("#contact");
const homeSection = document.querySelector(".home-section");
const projectSection = document.querySelector(".project-section");
const aboutSection = document.querySelector(".about-section");
const certSection = document.querySelector(".cert-section");
const contactSection = document.querySelector(".contact-section");


// Welcome

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

const hiddenProfile = function () {
  setTimeout(function() {
    profileInfo.classList.remove("hidden");
    profileInfo.classList.add("fade-in");
  }, 1200);
}

const hiddenProjects = function () {
  setTimeout(function() {
    projectSection.classList.remove("hidden");
    aboutSection.classList.remove("hidden");
    certSection.classList.remove("hidden");
    contactSection.classList.remove("hidden");
    projectSection.classList.add("fade-in");
    // projectSection.classList.remove("hidden-delay");
  }, 2000);
}

welcomeText();
hiddenProfile();
hiddenProjects();


// Smooth scrolling

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

btnScrollToCert.addEventListener("click", function(e) {
  certSection.scrollIntoView({
    behavior: "smooth"
  })
})
