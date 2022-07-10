import { ham, nav, close } from './variables.js';

const hamMenu = function hamMenu() { ham.addEventListener("click", () => {
  nav.style = "display: block";
  ham.style = "display: none";
  close.addEventListener("click", () => {
    nav.style = "display: none";
    ham.style = "display: block";
  });
});}

export default hamMenu;