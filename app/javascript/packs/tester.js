
const watchPhotoContainer = document.querySelector(".watch-photos-container");
const watchPhotos = document.querySelector(".watch-photos");
const watchPhoto = document.querySelectorAll(".watch-photo");
const watchPhotoEx = document.querySelector(".watch-photo");

const watchPhotoScoll = function() {
  let currentWatchSlide = 1;
  let interval;

  function startWatchSlider() {
  interval = setInterval(function() {
    const slideHeight = watchPhotoEx.clientHeight;
    watchPhotos.scrollTop += slideHeight;
    firstwatchSlide();
  }, pause);


    function firstwatchSlide() {
      currentWatchSlide++;
      if (currentWatchSlide > watchPhoto.length) {
        currentWatchSlide = 1;
        watchPhotos.scrollTop = 0;
      }
    }
  }

  function stopWatchSlider () {
    clearInterval(interval);
  }

  watchPhotoContainer.addEventListener("mouseenter", stopWatchSlider);
  watchPhotoContainer.addEventListener("mouseleave", startWatchSlider);

  startWatchSlider();
};

watchPhotoScoll();
