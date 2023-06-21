const nextScroll = document.querySelector(".next");
const prevScroll = document.querySelector(".prev");
const slide = document.querySelector(".project");
const projectContainer = document.querySelector(".project-container");
const projects = document.querySelector(".projects");

nextScroll.addEventListener("click", function() {
  console.log("scroll test");
  const slideWidth = slide.clientWidth;
  projects.scrollLeft += slideWidth;
})

prevScroll.addEventListener("click", function() {
  const slideWidth = slide.clientWidth;
  projects.scrollLeft -= slideWidth;
})
