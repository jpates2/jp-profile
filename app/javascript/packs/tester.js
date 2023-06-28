
const profPhotoContainer = document.querySelector(".prof-photos-container");
const profPhotos = document.querySelector(".prof-photos");
const profPhoto = document.querySelectorAll(".prof-photo");
const profPhotoEx = document.querySelector(".prof-photo");

const profPhotoScoll = function() {
  let currentProfSlide = 1;
  let interval;

  function startProfSlider() {
  interval = setInterval(function() {
    const slideHeight = profPhotoEx.clientHeight;
    profPhotos.scrollTop += slideHeight;
    firstProfSlide();
  }, pause);


    function firstProfSlide() {
      currentProfSlide++;
      if (currentProfSlide > profPhoto.length) {
        currentProfSlide = 1;
        profPhotos.scrollTop = 0;
      }
    }
  }

  function stopProfSlider () {
    clearInterval(interval);
  }

  profPhotoContainer.addEventListener("mouseenter", stopProfSlider);
  profPhotoContainer.addEventListener("mouseleave", startpProfSlider);

  startProfSlider();
};

profPhotoScoll();
