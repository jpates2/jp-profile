const portPhotoContainer = document.querySelector(".port-project-photo-container");
const photosContainer = document.querySelector(".photos-container");
const portPhoto = document.querySelectorAll(".port-project-photo");
const portPhotoEx = document.querySelector(".port-project-photo");

const photoScoll = function() {
  const height = 64;
  const animationSpeed = 1000;
  const pause = 4000;
  let currentSlide = 1;
  let interval;

  function startSlider() {
  interval = setInterval(function() {
    const slideHeight = portPhotoEx.clientHeight;
    photosContainer.scrollTop += slideHeight;
    firstSlide();
  }, pause);

    function firstSlide() {
      currentSlide++;
      if (currentSlide > portPhoto.length) {
        currentSlide = 1;
        photosContainer.scrollTop = 0;
      }
    }
  }

  function stopSlider() {
    clearInterval(interval);
  }

  portPhotoContainer.addEventListener("mouseenter", stopSlider);
  portPhotoContainer.addEventListener("mouseleave", startSlider);

  startSlider();
};

photoScoll();
