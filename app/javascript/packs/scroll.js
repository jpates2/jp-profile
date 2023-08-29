// const nextScroll = document.querySelector(".next");
// const prevScroll = document.querySelector(".prev");
// const slide = document.querySelector(".project");
// const projectContainer = document.querySelector(".project-container");
// const projects = document.querySelector(".projects");

// nextScroll.addEventListener("click", function() {
//   const slideWidth = slide.clientWidth;
//   projects.scrollLeft += slideWidth;
// })

// prevScroll.addEventListener("click", function() {
//   const slideWidth = slide.clientWidth;
//   projects.scrollLeft -= slideWidth;
// })

const slider = function () {
  const slides = document.querySelectorAll('.project');
  const btnNext = document.querySelector('.next');
  const btnPrev = document.querySelector('.prev');

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    console.log(curSlide);
    goToSlide(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    console.log(curSlide);
    goToSlide(curSlide);
  };

  const init = function () {
    goToSlide(0);
  };
  init();

  // Event handlers
  btnNext.addEventListener('click', nextSlide);
  btnPrev.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });
};
slider();
