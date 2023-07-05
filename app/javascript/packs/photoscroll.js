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


// watch scrolls photo

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


// profile photo scroll

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
  profPhotoContainer.addEventListener("mouseleave", startProfSlider);

  startProfSlider();
};

profPhotoScoll();


// unused dots

// const dots = document.querySelectorAll(".dot");
// const dotsContainer = document.querySelector(".project-dots");
// const project = document.querySelectorAll(".project");
// const projectContainer = document.querySelector(".projects");

// dotsContainer.addEventListener("click", function(e) {
//   const clicked = e.target.closest(".dot");

//   // guard clause
//   if (!clicked) return;

//   // remove active classes
//   dots.forEach(d => d.classList.remove("dot-active"));
//   // project.forEach(p => p.classList.remove("project-active"));

//   // activate tab
//   clicked.classList.add("dot-active");

//   // activate content
//   // document.querySelector(`.project-${clicked.dataset.tab}`).classList.add("project-active");

//   const slideWidth = project.clientWidth;
//   projectContainer.scrollLeft += `${slideWidth * clicked.dataset.tab}`;
// })
