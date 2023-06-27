const pause = 4000;


// fanfind scroll photos

const fanfindPhotoContainer = document.querySelector(".fanfind-photos-container");
const fanfindPhotos = document.querySelector(".fanfind-photos");
const fanfindPhoto = document.querySelectorAll(".fanfind-photo");
const fanfindPhotoEx = document.querySelector(".fanfind-photo");

const fanfindPhotoScoll = function() {
  let currentFanfindSlide = 1;
  let interval;

  function startFanfindSlider() {
  interval = setInterval(function() {
    const slideHeight = fanfindPhotoEx.clientHeight;
    fanfindPhotos.scrollTop += slideHeight;
    firstFanfindSlide();
  }, pause);

    function firstFanfindSlide() {
      currentFanfindSlide++;
      if (currentFanfindSlide > fanfindPhoto.length) {
        currentFanfindSlide = 1;
        fanfindPhotos.scrollTop = 0;
      }
    }
  }

  function stopFanfindSlider() {
    clearInterval(interval);
  }

  fanfindPhotoContainer.addEventListener("mouseenter", stopFanfindSlider);
  fanfindPhotoContainer.addEventListener("mouseleave", startFanfindSlider);

  startFanfindSlider();
};

fanfindPhotoScoll();


// gameon scroll photos

const gameonPhotoContainer = document.querySelector(".gameon-photos-container");
const gameonPhotos = document.querySelector(".gameon-photos");
const gameonPhoto = document.querySelectorAll(".gameon-photo");
const gameonPhotoEx = document.querySelector(".gameon-photo");

const gameonPhotoScoll = function() {
  let currentGameonSlide = 1;
  let interval;

  function startGameonSlider() {
  interval = setInterval(function() {
    const slideHeight = gameonPhotoEx.clientHeight;
    gameonPhotos.scrollTop += slideHeight;
    firstGameonSlide();
  }, pause);


    function firstGameonSlide() {
      currentGameonSlide++;
      if (currentGameonSlide > gameonPhoto.length) {
        currentGameonSlide = 1;
        gameonPhotos.scrollTop = 0;
      }
    }
  }

  function stopGameonSlider () {
    clearInterval(interval);
  }

  gameonPhotoContainer.addEventListener("mouseenter", stopGameonSlider);
  gameonPhotoContainer.addEventListener("mouseleave", startGameonSlider);

  startGameonSlider();
};

gameonPhotoScoll();


// shart scroll photos

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
