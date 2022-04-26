const [red, green, blue, opacity] = [170, 247, 235, 0.9];
const [rojo, verde, azul, opacidad] = [120, 209, 135, 0.1];
let container = document.querySelector('.container');
let logo = document.querySelector("#logo");
let hello = document.querySelector('section.home');
let navLinks = document.querySelectorAll('.nav-link');
let sections = document.querySelectorAll('section');

let guideX = document.querySelector('.guideX');
let guideXOrigin = document.querySelector(".guideX-origin");
let guideY = document.querySelector(".guideY");
let guideYOrigin = document.querySelector(".guideY-origin");

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
 })
},
 {
  threshold: 0.6
 }
)
sections.forEach(section => {
    observer.observe(section)
})

//draggable guide lines:

function dragGuideX(e) {
   guideX.style.top = `${e.pageY}px`; 
   guideX.style.left = "0px";
}

guideX.addEventListener('mousedown', () => {
   window.addEventListener('mousemove', dragGuideX);
});
guideX.addEventListener('mouseup', () => {
   window.removeEventListener('mousemove', dragGuideX);
});

function dragGuideY(e) {
  guideY.style.left = `${e.pageX}px`;
  guideY.style.top = "0px";
}

guideY.addEventListener("mousedown", () => {
  window.addEventListener("mousemove", dragGuideY);
});
guideY.addEventListener("mouseup", () => {
  window.removeEventListener("mousemove", dragGuideY);
});

//move guide origin to cursor position on guide:

function moveGuideXOrigin(e) {
    guideXOrigin.style.left = `${e.pageX}px`;
    intersect();
}
guideX.addEventListener('mousedown', () => {
   window.addEventListener('mousemove', moveGuideXOrigin);
});
guideX.addEventListener("mouseup", () => {
  window.removeEventListener("mousemove", moveGuideXOrigin);
});

function moveGuideYOrigin(e) {
  guideYOrigin.style.top = `${e.pageY}px`;
  intersect();
}
guideY.addEventListener("mousedown", () => {
  window.addEventListener("mousemove", moveGuideYOrigin);
  
});
guideY.addEventListener("mouseup", () => {
  window.removeEventListener("mousemove", moveGuideYOrigin);
});

//randomize starting position of guides and their origins

function randomGuideAndOriginPos(){
    guideX.style.top = `${Math.random() * 600}px`;
    guideY.style.left = `${Math.random() * window.innerWidth}px`;
    guideXOrigin.style.left = `${Math.random() * window.innerWidth}px`;
    guideYOrigin.style.top = `${Math.random() * 600}px`;
}

randomGuideAndOriginPos();

//detect guide/origin intersection:

function intersect(){
    if (guideXOrigin.style.left === guideY.style.left ||
        guideYOrigin.style.top === guideX.style.top ||
        (guideXOrigin.style.left === guideYOrigin.style.left &&
         guideYOrigin.style.top === guideXOrigin.style.top)){
            console.log('intersected')
        }

}



//change background colour on scroll:

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

//fade elements on scroll:

window.addEventListener('scroll', () => {
   let y = (window.scrollY || window.pageYOffset) / 20;
   logo.style.opacity = 0.99/ y; 
   hello.style.opacity = 0.99/ y;
})
