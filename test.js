// const axios = require("axios");

// const aaaa = require("./src/aaaa");

// document.addEventListener("DOMContentLoaded", async () => {
//   //   await axios.get("zzzz");

//   for(let i= 0; i<50; i++) {
//     setTimeout(makeSnow, 500 * i);
//   }

// });

// const body = document.querySelector('body');


// function makeSnow() {

//   const MIN_DURATION = 10;

//   const snow = document.createElement('div');

//   const 최대범위10 = Math.random() * 10;

//   const delay = 최대범위10
//   const opacity = Math.random();
//   const duration = Math.random() * 20 + MIN_DURATION;
//   const 크기 = 최대범위10 < 5 ? 5 : Math.floor(최대범위10);

//   snow.classList.add('snowflake');
  
//   console.log(크기);

//   snow.style.width = `${크기}px`;
//   snow.style.height = `${크기}px`;
//   snow.style.left = `${Math.random() * window.screen.width}px`;
//   snow.style.animationDelay = `${delay}s`;
//   snow.style.opacity = opacity;
//   snow.style.animation = `fall ${duration}s linear`;
  
//   body.appendChild(snow);

//   setTimeout(() => {
//     body.removeChild(snow);
//     makeSnow();

//   }, (duration + delay) * 1000)
  
// }
