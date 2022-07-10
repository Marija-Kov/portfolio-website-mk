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
  intersect();
}

function moveGuideYOrigin(e) {
  guideYOrigin.style.top = `${e.pageY}px`;
  intersect();
}

function intersect() {
  if (
    guideXOrigin.style.left === guideY.style.left ||
    guideYOrigin.style.top === guideX.style.top ||
    (guideXOrigin.style.left === guideYOrigin.style.left &&
      guideYOrigin.style.top === guideXOrigin.style.top)
  ) {
    console.log("intersected");
  }
}

export function guides() {
  guideX.addEventListener("mousedown", () => {
  window.addEventListener("mousemove", dragGuideX);
});
guideX.addEventListener("mouseup", () => {
  window.removeEventListener("mousemove", dragGuideX);
});

guideY.addEventListener("mousedown", () => {
  window.addEventListener("mousemove", dragGuideY);
});
guideY.addEventListener("mouseup", () => {
  window.removeEventListener("mousemove", dragGuideY);
});
}

export function origins() {
  guideX.addEventListener("mousedown", () => {
   window.addEventListener("mousemove", moveGuideXOrigin);
  });
  guideX.addEventListener("mouseup", () => {
   window.removeEventListener("mousemove", moveGuideXOrigin);
  });
 guideY.addEventListener("mousedown", () => {
  window.addEventListener("mousemove", moveGuideYOrigin);
  });
 guideY.addEventListener("mouseup", () => {
  window.removeEventListener("mousemove", moveGuideYOrigin);
  });
}

export function randomGuideAndOriginPos() {
  guideX.style.top = `${Math.random() * 600}px`;
  guideY.style.left = `${(Math.random() * window.innerWidth) / 2}px`;
  guideXOrigin.style.left = `${(Math.random() * window.innerWidth) / 2}px`;
  guideYOrigin.style.top = `${Math.random() * 600}px`;
}









