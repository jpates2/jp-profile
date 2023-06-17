const bannerHeader = document.querySelector(".banner-header");

const welcomeText = function () {
  const welcomeContent = ["w", "e", "l", "c", "o", "m", "e"];
  let welcomeContentArray = [];

  for (let i = 0; i < welcomeContent.length; i++) {
    welcomeTask(i);
  }

  function welcomeTask(i) {
    setTimeout(function() {
      welcomeContentArray.push(welcomeContent[i])
      bannerHeader.textContent = welcomeContentArray.join("");
    }, 200 * i);
  }
}

welcomeText();
