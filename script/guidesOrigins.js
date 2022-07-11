import { guideX, guideXOrigin, guideY, guideYOrigin } from './variables.js';

function dragGuideX(e) {
  guideX.style.top = `${e.pageY}px`;
  guideX.style.left = "0px";
  console.log("move");
}

function dragGuideY(e) {
  guideY.style.left = `${e.pageX}px`;
  guideY.style.top = "0px";
  console.log("move");
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
  guideX.addEventListener("pointermove", dragGuideX);
});
guideX.addEventListener("pointerup", () => {
  guideX.removeEventListener("pointermove", dragGuideX);
});

guideY.addEventListener("pointerdown", () => {
  guideY.addEventListener("pointermove", dragGuideY);
});
guideY.addEventListener("pointerup", () => {
  guideY.removeEventListener("pointermove", dragGuideY);
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









