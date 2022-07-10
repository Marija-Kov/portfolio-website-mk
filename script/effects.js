import { red, green, blue, opacity, rojo, verde, azul, opacidad, about, container, sections, navLinks } from './variables.js';

export function bkgChange() {
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
}

export function navOnScroll() {
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      document
        .querySelector(`.${link.getAttribute("id")}`)
        .scrollIntoView({ behavior: "smooth" });
      link.setAttribute("aria-current", "true");
      navLinks.forEach((link0) => {
        if (link0 !== link) {
          link0.removeAttribute("aria-current");
        }
      });
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        let current = document.querySelector(
          `#${entry.target.getAttribute("class")}`
        );
        current.click();
      });
    },
    {
      threshold: 0.6,
    }
  );
  sections.forEach((section) => {
    observer.observe(section);
  });

}

export function fadeScroll() { window.addEventListener('scroll', () => {
   let y = (window.scrollY || window.pageYOffset) / 20;
   about.style.opacity = 0.05 * y;
  });
}


export function wrkParallax() {
 window.addEventListener('scroll', ()=> {
  let workBase = document.querySelector(".work-base");
  let rate = ((window.scrollY || window.pageYOffset) * -0.5);
  workBase.style.transform = `translate3d(0px, ${rate}px, 0px)`;
 })
}