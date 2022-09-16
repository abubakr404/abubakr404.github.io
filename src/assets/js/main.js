const loader = document.querySelector(".loader");
const header = document.querySelector("header");
const navToggler = document.querySelector("#navToggler");
const imgsContainer = document.querySelector(".imgs-container");
const worksImgs = imgsContainer.querySelectorAll("img");
const workLink = document.querySelector(".work-link");

let lastKnownScrollPosition = 0;
let lastRandomNumber = 0;
let done = false;
let ticking = false;

window.onload = () => {
  filled(window.scrollY);
  loader.style = `opacity: 0; width: 0%; height: 0%; z-index: -1;`;
  worksImgs[lastRandomNumber].classList.add("active");
};

navToggler.addEventListener("click", (event) => {
  if (header.offsetTop < lastKnownScrollPosition) {
    header.classList.toggle("open");
  } else if (header.offsetTop >= lastKnownScrollPosition) {
    header.classList.toggle("open");
    header.classList.toggle("filled");
  }
});

window.addEventListener("scroll", (event) => {
  if (portfolio.offsetTop <= window.scrollY && !done) {
    stopRandomWorks();
    done = true;
  }
});

addEventListener("scroll", (event) => {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      filled(lastKnownScrollPosition);
      ticking = false;
    });
    ticking = true;
  }
});

filled = function (e) {
  if (header.offsetTop < e && !header.classList.contains("filled")) {
    header.classList.add("filled");
  } else if (header.offsetTop >= e && !header.classList.contains("open")) {
    header.classList.remove("filled");
  }
};

//  function to generate random number of array, and that is last generated number

function getRandomImgN(lastNumber) {
  let randomNumber = Math.floor(Math.random() * worksImgs.length);
  if (lastNumber != randomNumber) {
    lastRandomNumber = randomNumber;
    return randomNumber;
  } else {
    return getRandomImgN(lastNumber);
  }
}

workViewer = setInterval(randomWorks, 29000);
// random works i function to select random image and add active class to it

function randomWorks() {
  let randomImage = worksImgs[getRandomImgN(lastRandomNumber)];
  worksImgs.forEach((img) => {
    img.classList.remove("active");
  });
  randomImage.classList.add("active");
}

function stopRandomWorks() {
  clearInterval(workViewer);
  imgsContainer.classList.add("done");
}

workLink.addEventListener("click", (event) => {
  stopRandomWorks();
});
