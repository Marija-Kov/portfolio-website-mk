const [red, green, blue, opacity] = [170, 247, 235, 0.9];
const [rojo, verde, azul, opacidad] = [120, 209, 135, 0.1];
let container = document.querySelector('.container');
let logo = document.querySelector("#logo");
let hello = document.querySelector('section.home');
let navLinks = document.querySelectorAll('.nav-link');
let sections = document.querySelectorAll('section');

//navigation // scroll
navLinks.forEach(link => {
    link.addEventListener('click', () => {
         document.querySelector(`.${link.getAttribute('id')}`).scrollIntoView({behavior: "smooth"});
        link.setAttribute('aria-current', 'true');
       navLinks.forEach(link0 => {
           if (link0 !== link){
               link0.removeAttribute('aria-current');
             }
           })
    })
      
})

const observer = new IntersectionObserver(entries => {
 entries.forEach(entry => {
 if(!entry.isIntersecting) {
     return
    }
    let current = document.querySelector(`#${entry.target.getAttribute("class")}`);
    current.click()
    //console.log(entry.target.getAttribute("class"));
 })
},
 {
  threshold: 0.6
 }
)


sections.forEach(section => {
    observer.observe(section)
})




//change background colour on scroll

window.addEventListener('scroll', () => {
let y = 1 + (window.scrollY || window.pageYOffset) / 150;
const [r, g, b] = [red, green/y, blue/y].map(Math.round);
const a = opacity/y/1.1;
container.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`;
})

window.addEventListener("scroll", () => {
  let y = (window.scrollY || window.pageYOffset) / 300;
  const [r, g, b] = [rojo, verde / y * 1.5, azul].map(Math.round);
  const a = opacidad * y / 1.2;
  document.body.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`;
});

window.addEventListener('scroll', () => {
   let y = (window.scrollY || window.pageYOffset) / 20;
   logo.style.opacity = 0.99/ y; 
   hello.style.opacity = 0.99/ y;
})
