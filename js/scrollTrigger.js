/*------------------------------
Init ScrollTrigger // Inicio de ScrollTrigger
------------------------------*/

/* EFECTO 1 SCROLL */
let paths = gsap.utils.toArray("#avekit path, #logo-smoother path, #logo-mouse");
let byGreensock = document.querySelector("#by-greensock");

let distPaths = gsap.utils.distribute({
  base: -300,
  amount: 600,
});

let logoTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".oyufuq",
    scrub: 1,
    start: "bottom 95%",
    end: "bottom center"
  }
});

logoTl.to(paths, { x: distPaths })
  .to([...paths, byGreensock], { opacity: 0 }, 0)

let gridTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".aqezir",
    scrub: 1,
    start: "top center",
    end: "bottom+=10% bottom",
  },
  defaults: {
    ease: "power1.inOut"
  }
});

gridTl.add("start")
  .from(".eyugug", {
    ease: "power1",
    scale: 3
  }, "start")
  .from(".efatos .ohozap", {
    duration: 0.6,
    xPercent: i => -((i + 1) * 40 + i * 100),
    yPercent: i => (i + 1) * 40 + i * 100
  }, "start")
  .from(".oyuzop .ohozap", {
    duration: 0.6,
    xPercent: i => (i + 1) * 40 + i * 100,
    yPercent: i => (i + 1) * 40 + i * 100
  }, "start");

gsap.from(".ukahec", {
  scale: 1/3,
  scrollTrigger: {
    trigger: ".ukahec",
    scrub: 1
  }
});

let pinSection = document.querySelector(".ovojih")
let pinContent1 = document.querySelector(".ujotis")
let pinContent2 = document.querySelector(".ipuvek")

let pinTl = gsap.timeline({
  scrollTrigger: {
    pin: true,
    trigger: pinSection,
    scrub: true,
    start: "top top",
    end: () => `$+=${pinContent1.offsetWidth}`,
    invalidateOnRefresh: true
  }
});

pinTl.fromTo(".ujotis", {
  x: () => document.body.clientWidth * 0.9
}, {
  x: () => -(pinContent1.offsetWidth),
  ease: "none"
}, 0)

pinTl.fromTo(".ipuvek", {
  x: () => -pinContent2.offsetWidth + document.body.clientWidth * 0.1
}, {
  x: () => document.body.clientWidth, 
  ease: "none"
}, 0);
/* EFECTO 1 SCROLL */