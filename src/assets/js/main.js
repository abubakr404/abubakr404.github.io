const loader = document.querySelector(".loader");
const header = document.querySelector("header");
const sections = document.querySelectorAll("main > section");
const navToggler = document.querySelector("#navToggler");
const navLinks = document.querySelectorAll(".siteNav .navLink");
const heroImgsContainer = document.querySelector(".hero .imgs-container");
const workCards = document.querySelectorAll(".work-card");
const portfolioImgsContainer = document.querySelectorAll(
  ".portfolio .imgs-container"
);
const worksImgs = heroImgsContainer.querySelectorAll("img");
const workLink = document.querySelector(".work-link");

const cardBlogs = document.querySelectorAll(".blogs .card");

let lastKnownScrollPosition = 0;
let lastRandomNumber = 0;
let viwerDone = false;
// let navSwapDone = false;
let ticking = false;

import {
  classShuffleTT,
  classTogglerTT,
  classAdderTT,
  classRemoverTT,
} from "./helpers/tuti.js";

window.onload = () => {
  filled(window.scrollY);
  // loader.style = `opacity: 0; width: 0%; height: 0%; z-index: -1;`;
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
  if (portfolio.offsetTop <= window.scrollY && !viwerDone) {
    stopRandomWorks();
    viwerDone = true;
  }
});

window.addEventListener("scroll", (event) => {
  lastKnownScrollPosition = window.scrollY;
  sections.forEach((section) => {
    if (
      section.offsetTop <= lastKnownScrollPosition &&
      section.offsetTop + section.offsetHeight >= lastKnownScrollPosition
    ) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (section.id === link.dataset.ref) link.classList.add("active");
      });
    }
  });
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

let filled = function (e) {
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

let workViewer = setInterval(randomWorks, 29000);
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
  heroImgsContainer.classList.add("done");
}

portfolioImgsContainer.forEach((imgContainer) => {
  imgContainer.addEventListener("click", (e) => {
    imgContainer.parentElement.parentElement.parentElement.classList.toggle(
      "zoomed"
    );
  });
});

workCards.forEach((work) => {
  let screenes = work.querySelectorAll(".screen");
  let imgs = work.querySelectorAll(".imgs-container img");
  classShuffleTT(screenes, "active");
  screenes.forEach((screen) => {
    screen.addEventListener("click", (e) => {
      imgs.forEach((img) => {
        img.classList.remove("active");
        if (img.dataset.type === screen.dataset.type)
          img.classList.add("active");
      });
    });
  });
});

workLink.addEventListener("click", (event) => {
  stopRandomWorks();
});

cardBlogs.forEach((blog) => {
  let more = blog.querySelector("button.more");
  let img = blog.querySelector(".blog-container>img");
  let close = blog.querySelector(".blog-container .close");
  classAdderTT(more, "zoomed", blog);
  classTogglerTT(img, "zoomed", blog);
  classRemoverTT(close, "zoomed", blog);
});

classShuffleTT(navLinks, "active");
