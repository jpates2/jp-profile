
const shartPhotoContainer = document.querySelector(".shart-photos-container");
const shartPhotos = document.querySelector(".shart-photos");
const shartPhoto = document.querySelectorAll(".shart-photo");
const shartPhotoEx = document.querySelector(".shart-photo");

const shartPhotoScoll = function() {
  let currentShartSlide = 1;
  let interval;

  function startShartSlider() {
  interval = setInterval(function() {
    const slideHeight = shartPhotoEx.clientHeight;
    shartPhotos.scrollTop += slideHeight;
    firstShartSlide();
  }, pause);


    function firstShartSlide() {
      currentShartSlide++;
      if (currentShartSlide > shartPhoto.length) {
        currentShartSlide = 1;
        shartPhotos.scrollTop = 0;
      }
    }
  }

  function stopShartSlider () {
    clearInterval(interval);
  }

  shartPhotoContainer.addEventListener("mouseenter", stopShartSlider);
  shartPhotoContainer.addEventListener("mouseleave", startShartSlider);

  startShartSlider();
};

shartPhotoScoll();
