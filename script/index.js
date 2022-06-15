const [red, green, blue, opacity] = [170, 227, 245, 0.9];
const [rojo, verde, azul, opacidad] = [120, 209, 135, 0.1];

let container = document.querySelector('.container');
let hello = document.querySelector('section.home');
let navLinks = document.querySelectorAll('.nav-link');
let about = document.querySelector(".about");
let sections = document.querySelectorAll('section');

let guideX = document.querySelector('.guideX');
let guideXOrigin = document.querySelector(".guideX-origin");
let guideY = document.querySelector(".guideY");
let guideYOrigin = document.querySelector(".guideY-origin");

let ham = document.querySelector('#ham');
let nav = document.querySelector('nav');
let close = document.querySelector('#close');



//NAVIGATE ON SCROLL / SCROLL ON NAV LINK CLICK:

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

//HAMBURGER MENU:

ham.addEventListener('click', () => {
    nav.style = "display: block";
    ham.style = "display: none";
    close.addEventListener('click', () => {
     nav.style = "display: none";
     ham.style = "display: block";   
    })
})

//DRAGGABLE GUIDE LINES:

function dragGuideX(e) {
   guideX.style.top = `${e.pageY}px`; 
   guideX.style.left = "0px";
   console.log('move')
}

guideX.addEventListener('mousedown', () => {
   window.addEventListener('mousemove', dragGuideX);
});
guideX.addEventListener('mouseup', () => {
   window.removeEventListener('mousemove', dragGuideX);
});

guideX.addEventListener("touchstart", () => {
  guideX.addEventListener("touchmove", dragGuideX);
  console.log('start')
});
guideX.addEventListener("touchend", () => {
  guideX.removeEventListener("touchmove", dragGuideX);
console.log("end");
});

function dragGuideY(e) {
  guideY.style.left = `${e.pageX}px`;
  guideY.style.top = "0px";
  console.log("move");
}

guideY.addEventListener("mousedown", () => {
  window.addEventListener("mousemove", dragGuideY);
});
guideY.addEventListener("mouseup", () => {
  window.removeEventListener("mousemove", dragGuideY);
});

guideY.addEventListener("touchstart", () => {
  window.addEventListener("touchmove", dragGuideY);
  console.log("start");
});
guideY.addEventListener("touchend", () => {
  window.removeEventListener("touchmove", dragGuideY);
  console.log("end");
});
//MOVE GUIDE ORIGIN TO CURSOR POSITION ON THE GUIDE:

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

guideX.addEventListener("touchstart", () => {
  window.addEventListener("touchmove", moveGuideXOrigin);
});
guideX.addEventListener("touchend", () => {
  window.removeEventListener("touchmove", moveGuideXOrigin);
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

guideY.addEventListener("touchstart", () => {
  window.addEventListener("touchmove", moveGuideYOrigin);
});
guideY.addEventListener("touchend", () => {
  window.removeEventListener("touchmove", moveGuideYOrigin);
});



//RANDOMIZE STARTING POSITION OF GUIDES/ORIGINS

function randomGuideAndOriginPos(){
    guideX.style.top = `${Math.random() * 600}px`;
    guideY.style.left = `${Math.random() * window.innerWidth/2}px`;
    guideXOrigin.style.left = `${Math.random() * window.innerWidth/2}px`;
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



//CHANGE BACKGROUND COLOUR ON SCROLL:

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

//FADE ELEMENTS ON SCROLL:

window.addEventListener('scroll', () => {
   let y = (window.scrollY || window.pageYOffset) / 20;
   about.style.opacity = 0.05 * y;
})

//PARALLAX .work

window.addEventListener('scroll', ()=> {
  let workBase = document.querySelector(".work-base");
  let rate = ((window.scrollY || window.pageYOffset) * -0.5);
  workBase.style.transform = `translate3d(0px, ${rate}px, 0px)`;
})











