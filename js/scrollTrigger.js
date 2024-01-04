/*------------------------------
Init ScrollTrigger // Inicio de ScrollTrigger
------------------------------*/
const tl = gsap.timeline({
scrollTrigger: {
    trigger: ".trigger",
    start: "top top",
    end: "+=1000",
    scrub: 1,
    pin: true,
    markers: true
}
});
tl.to(".box", {yPercent: 350, duration: 1})
tl.to(".box", {rotation: 360, duration: 3})
tl.to(".box", {xPercent: 350, duration: 1})