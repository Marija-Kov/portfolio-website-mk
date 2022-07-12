import { guideX, guideXOrigin, guideY, guideYOrigin } from './variables.js';

function dragGuideX(e) {
  guideX.style.left = "0px";
  let maxH = guideY.offsetHeight;
  if (e.pageY < maxH){
   guideX.style.top = `${e.pageY}px`
  }else{
   guideX.style.top = `${e.maxH}px`
  }
  console.log(guideY.offsetHeight)
}

function dragGuideY(e) {
  guideY.style.top = "0px";
  let maxW = window.innerWidth;
  if(e.pageX < maxW){
   guideY.style.left = `${e.pageX}px`;  
  } else {
    guideY.style.left = `${maxW - 1}px`;
  }
  console.log(maxW);
}

function moveGuideXOrigin(e) {
  guideXOrigin.style.left = `${e.pageX}px`;
}

function moveGuideYOrigin(e) {
  guideYOrigin.style.top = `${e.pageY}px`;
}

// function intersect() {
//   if (
//     guideXOrigin.style.left === guideY.style.left ||
//     guideYOrigin.style.top === guideX.style.top ||
//     (guideXOrigin.style.left === guideYOrigin.style.left &&
//       guideYOrigin.style.top === guideXOrigin.style.top)
//   ) {
//     console.log("intersected");
//   }
// }

export function guidesInit() {
  guideX.addEventListener("pointerdown", () => {
  document.addEventListener("pointermove", dragGuideX);
});
guideX.addEventListener("pointerup", () => {
  document.removeEventListener("pointermove", dragGuideX);
});

guideY.addEventListener("pointerdown", () => {
  document.addEventListener("pointermove", dragGuideY);
});
guideY.addEventListener("pointerup", () => {
  document.removeEventListener("pointermove", dragGuideY);
});
}

export function originsInit() {
  guideX.addEventListener("pointerdown", () => {
   guideX.addEventListener("pointermove", moveGuideXOrigin);
  });
  guideX.addEventListener("pointerup", () => {
   guideX.removeEventListener("pointermove", moveGuideXOrigin);
  });
 guideY.addEventListener("pointerdown", () => {
  guideY.addEventListener("pointermove", moveGuideYOrigin);
  });
 guideY.addEventListener("pointerup", () => {
  guideY.removeEventListener("pointermove", moveGuideYOrigin);
  });
}

export function randomGuideAndOriginPos() {
  guideX.style.top = `${Math.random() * 600}px`;
  guideY.style.left = `${(Math.random() * window.innerWidth) / 2}px`;
  guideXOrigin.style.left = `${(Math.random() * window.innerWidth) / 2}px`;
  guideYOrigin.style.top = `${Math.random() * 600}px`;
}









