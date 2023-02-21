import { gsap, Power4, Expo } from "gsap";

export default class Animation {
  constructor(pathName) {
    this.name = pathName;
  }

  _setElement() {
    return new Promise((resolve) => {
      const setName = document.querySelector(".js-text");
      setName.innerHTML = this.name;
      //テキストをspanに分割
      const textSplit = function (names) {
        return [...names].map((str) => `<span>${str}</span>`).join("");
      };
      //分割したspanをセット
      setName.innerHTML = textSplit(setName.textContent).toUpperCase();
      gsap.set(setName.children, { y: 300 });

      resolve();
    });
  }

  animate() {
    const startTl = gsap.timeline();

    startTl
      .to(".loading", {
        opacity: 1,
        pointerEvents: "auto",
        ease: Power4.easeOut,
        duration: 0.03,
      })
      .to(".js-text span", {
        y: 0,
        ease: Expo.easeOut,
        stagger: {
          from: "start",
          amount: 0.3,
        },
      })
      .to(".js-text span", {
        y: -300,
        delay: 0.7,
        ease: Expo.easeIn,
        stagger: {
          from: "start",
          amount: 0.3,
        },
      })
      .to(".loading", {
        opacity: 0,
        pointerEvents: "none",
        ease: Power4.easeOut,
        delay: 0.7,
        duration: 0.5,
        onComplete: () => {
          gsap.to(".js-text span", {
            y: 300,
            duration: 0.001,
          });
        },
      });
  }

  init() {
    this.animate();
  }
}
