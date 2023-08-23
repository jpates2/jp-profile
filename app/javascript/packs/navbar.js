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

const mobMenu = document.querySelector(".mob-menu");
const backdrop = document.querySelector(".backdrop");

mobMenu.addEventListener("click", function () {
  backdrop.classList.remove("hidden");
})

backdrop.addEventListener("click", function () {
  backdrop.classList.add("hidden");
})
