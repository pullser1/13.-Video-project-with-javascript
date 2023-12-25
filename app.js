// select variable
const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");
const preloader = document.querySelector(".preloader");

// create addEventlistenner on btn
btn.addEventListener("click", function () {
     if (!btn.classList.contains("slide")) {
          btn.classList.add("slide");
          video.pause();
     } else {
          btn.classList.remove("slide");
          video.play();
     }
});

// Preloader
window.addEventListener("load", function () {
     preloader.classList.add("hide-preloader");
});
