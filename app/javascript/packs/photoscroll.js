// const $slider = $("#slider");
// let $slideContainer = $slider.find('.slides');
// let $slides = $slideContainer.find('.slide');

const portPhotoContainer = document.querySelector(".port-project-photo-container");
const portPhotos = document.querySelector(".port-photos");
const portPhoto = document.querySelectorAll(".port-project-photo");
const portPhotoEx = document.querySelector(".port-project-photo");

const photoScoll = function() {

  const height = 64;
  const animationSpeed = 1000;
  const pause = 6000;
  let currentSlide = 1;
  let margTop = 0;


  let interval;

  function startSlider() {
  interval = setInterval(function() {
    const slideHeight = portPhotoEx.clientHeight;
    portPhotoContainer.scrollTop += slideHeight;

    // margTop += height;
    // console.log(margLeft);
    // portPhotos.style.marginTop = `${String(margTop)}vh`;

    // portPhotos.animate({
    //     "margin-left": "-=" + width
    //   }, animationSpeed, firstSlide);

    firstSlide();
  }, pause);

    function firstSlide() {
      currentSlide++;
      if (currentSlide > portPhoto.length) {
        portPhotoContainer.scrollTop = 0;

        currentSlide = 1;
        portPhotos.style.marginTop = `0vh`;
        margTop = 0;

        // portPhotoContainer.css("margin-left", 0);
      }
    }
  }

  function stopSlider(){
    clearInterval(interval);
  }

  portPhotoContainer.addEventListener("mouseenter", stopSlider);
  portPhotoContainer.addEventListener("mouseleave", startSlider);

  startSlider();
};

photoScoll();
