const navbar = document.querySelector(".navbar");

window.onscroll = () => {scrollNavbar()};

const scrollNavbar = function () {
  if (document.documentElement.scrollTop > 380) {
    navbar.classList.remove("navbar-orange");
    navbar.classList.add("navbar-yellow");
  } else {
    navbar.classList.remove("navbar-yellow");
    navbar.classList.add("navbar-orange");
  }
}

// burger menu

const mobMenu = document.querySelector(".mobile-menu");
const mobNav = document.querySelector(".mobile-nav");
const mobLinks = document.querySelector(".mobile-navbar-links");
const mobLink = document.querySelectorAll(".mobile-navbar-link");
const backdrop = document.querySelector(".backdrop");

mobMenu.addEventListener("click", function () {
  backdrop.classList.remove("hidden");
  mobNav.classList.add("mobile-navbar-open");
  navbar.classList.add("navbar-index");
})

mobLink.forEach(function(link) {
  link.addEventListener("click", function() {
    backdrop.classList.add("hidden");
    mobNav.classList.remove("mobile-navbar-open");
    navbar.classList.remove("navbar-index");
  })
})

backdrop.addEventListener("click", function () {
  backdrop.classList.add("hidden");
  mobNav.classList.remove("mobile-navbar-open");
  navbar.classList.remove("navbar-index");
})
