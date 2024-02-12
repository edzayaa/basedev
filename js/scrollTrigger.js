/*------------------------------
Init ScrollTrigger // Inicio de ScrollTrigger
------------------------------*/

/* EFECTO 1 SCROLL */
let paths = gsap.utils.toArray("#ovepiv path, #logo-smoother path, #logo-mouse");
let byGreensock = document.querySelector("#by-greensock");

let distPaths = gsap.utils.distribute({
  base: -300,
  amount: 600,
});

let logoTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".ehivoc",
    scrub: 1,
    start: "bottom 95%",
    end: "bottom center"
  }
});

logoTl.to(paths, { x: distPaths })
  .to([...paths, byGreensock], { opacity: 0 }, 0)

let gridTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".eyedak",
    scrub: 1,
    start: "top center",
    end: "bottom+=10% bottom",
  },
  defaults: {
    ease: "power1.inOut"
  }
});

gridTl.add("start")
  .from(".axodaq", {
    ease: "power1",
    scale: 3
  }, "start")
  .from(".axunoh .osufig", {
    duration: 0.6,
    xPercent: i => -((i + 1) * 40 + i * 100),
    yPercent: i => (i + 1) * 40 + i * 100
  }, "start")
  .from(".ukofeh .osufig", {
    duration: 0.6,
    xPercent: i => (i + 1) * 40 + i * 100,
    yPercent: i => (i + 1) * 40 + i * 100
  }, "start");

gsap.from(".azayof", {
  scale: 1/3,
  scrollTrigger: {
    trigger: ".azayof",
    scrub: 1
  }
});

let pinSection = document.querySelector(".ofaviv")
let pinContent1 = document.querySelector(".otuhor")
let pinContent2 = document.querySelector(".abizoy")

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

pinTl.fromTo(".otuhor", {
  x: () => document.body.clientWidth * 0.9
}, {
  x: () => -(pinContent1.offsetWidth),
  ease: "none"
}, 0)

pinTl.fromTo(".abizoy", {
  x: () => -pinContent2.offsetWidth + document.body.clientWidth * 0.1
}, {
  x: () => document.body.clientWidth, 
  ease: "none"
}, 0);
/* EFECTO 1 SCROLL */