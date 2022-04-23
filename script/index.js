const [red, green, blue, opacity] = [170, 247, 235, 0.9];
const [rojo, verde, azul, opacidad] = [120, 209, 135, 0.1];
let container = document.querySelector('.container');
let logo = document.querySelector("#logo");

let navHome = document.querySelector("#home");
let navAbout = document.querySelector("#about");
let navWork = document.querySelector('#work');
let navContact = document.querySelector('#contact');

//navigation // scroll

navHome.addEventListener("click", () => {
  document.querySelector("header").scrollIntoView();
});
navAbout.addEventListener('click', () => {
    document.querySelector(".about").scrollIntoView();
})
navWork.addEventListener("click", () => {
  document.querySelector(".work").scrollIntoView();
});
navContact.addEventListener("click", () => {
  document.querySelector(".contact").scrollIntoView();
});

//change background on scroll

window.addEventListener('scroll', () => {
let y = 1 + (window.scrollY || window.pageYOffset) / 150;
const [r, g, b] = [red, green/y, blue/y].map(Math.round);
const a = opacity/y/1.1;
container.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`;
})

window.addEventListener("scroll", () => {
  let y = (window.scrollY || window.pageYOffset) / 300;
  const [r, g, b] = [rojo, verde/y*1.5, azul].map(Math.round);
  const a = opacidad *y/1.2;
  document.body.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`;
});

window.addEventListener('scroll', () => {
   let y = (window.scrollY || window.pageYOffset) / 20;
   logo.style.opacity = 0.99/y; 
   hello.style.opacity = 0.99/y;
})
