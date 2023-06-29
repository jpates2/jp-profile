const oneWindow = document.querySelector(".one-window");
const bubbleOne = document.querySelector(".bubble-one");
const closeOne = document.querySelector(".close-one");
const overlayOne = document.querySelector(".overlay-one");

const closeOneWindow = function() {
  oneWindow.classList.add("hidden");
  overlayOne.classList.add("hidden");
};

const openOneWindow = function() {
  oneWindow.classList.remove("hidden");
  overlayOne.classList.remove("hidden");
}

bubbleOne.addEventListener("click", openOneWindow);

closeOne.addEventListener("click", closeOneWindow);

overlayOne.addEventListener("click", closeOneWindow);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !oneWindow.classList.contains("hidden")) {
    closeOneWindow();
  }
});


const twoWindow = document.querySelector(".two-window");
const bubbleTwo = document.querySelector(".bubble-two");
const closeTwo = document.querySelector(".close-two");
const overlayTwo = document.querySelector(".overlay-two");

const closeTwoWindow = function() {
  twoWindow.classList.add("hidden");
  overlayTwo.classList.add("hidden");
};

const openTwoWindow = function() {
  twoWindow.classList.remove("hidden");
  overlayTwo.classList.remove("hidden");
}

bubbleTwo.addEventListener("click", openTwoWindow);

closeTwo.addEventListener("click", closeTwoWindow);

overlayTwo.addEventListener("click", closeTwoWindow);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !twoWindow.classList.contains("hidden")) {
    closeTwoWindow();
  }
});


const threeWindow = document.querySelector(".three-window");
const bubbleThree = document.querySelector(".bubble-three");
const closeThree = document.querySelector(".close-three");
const overlayThree = document.querySelector(".overlay-three");

const closeThreeWindow = function() {
  threeWindow.classList.add("hidden");
  overlayThree.classList.add("hidden");
};

const openThreeWindow = function() {
  threeWindow.classList.remove("hidden");
  overlayThree.classList.remove("hidden");
}

bubbleThree.addEventListener("click", openThreeWindow);

closeThree.addEventListener("click", closeThreeWindow);

overlayThree.addEventListener("click", closeThreeWindow);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !threeWindow.classList.contains("hidden")) {
    closeThreeWindow();
  }
});


const fourWindow = document.querySelector(".four-window");
const bubbleFour = document.querySelector(".bubble-four");
const closeFour = document.querySelector(".close-four");
const overlayFour = document.querySelector(".overlay-four");

const closeFourWindow = function() {
  fourWindow.classList.add("hidden");
  overlayFour.classList.add("hidden");
};

const openFourWindow = function() {
  fourWindow.classList.remove("hidden");
  overlayFour.classList.remove("hidden");
}

bubbleFour.addEventListener("click", openFourWindow);

closeFour.addEventListener("click", closeFourWindow);

overlayFour.addEventListener("click", closeFourWindow);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !fourWindow.classList.contains("hidden")) {
    closeFourWindow();
  }
});


const fiveWindow = document.querySelector(".five-window");
const bubbleFive = document.querySelector(".bubble-five");
const closeFive = document.querySelector(".close-five");
const overlayFive = document.querySelector(".overlay-five");

const closeFiveWindow = function() {
  fiveWindow.classList.add("hidden");
  overlayFive.classList.add("hidden");
};

const openFiveWindow = function() {
  fiveWindow.classList.remove("hidden");
  overlayFive.classList.remove("hidden");
}

bubbleFive.addEventListener("click", openFiveWindow);

closeFive.addEventListener("click", closeFiveWindow);

overlayFive.addEventListener("click", closeFiveWindow);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !fiveWindow.classList.contains("hidden")) {
    closeFiveWindow();
  }
});


const sixWindow = document.querySelector(".six-window");
const bubbleSix = document.querySelector(".bubble-six");
const closeSix = document.querySelector(".close-six");
const overlaySix = document.querySelector(".overlay-six");

const closeSixWindow = function() {
  sixWindow.classList.add("hidden");
  overlaySix.classList.add("hidden");
};

const openSixWindow = function() {
  sixWindow.classList.remove("hidden");
  overlaySix.classList.remove("hidden");
}

bubbleSix.addEventListener("click", openSixWindow);

closeSix.addEventListener("click", closeSixWindow);

overlaySix.addEventListener("click", closeSixWindow);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !sixWindow.classList.contains("hidden")) {
    closeSixWindow();
  }
});
