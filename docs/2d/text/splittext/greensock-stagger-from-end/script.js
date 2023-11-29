gsap.registerPlugin(GSDevTools, SplitText)
let split
let animation = gsap.timeline({})

function init() {
	gsap.set(".wrapper", {autoAlpha:1})
	split = new SplitText("h1", {type:"chars"})
	animation.from(split.chars, {opacity:0, y:50, ease:"back(4)", stagger:{
		from:"end", //try "center" and "edges"
		each:0.05
	}})
	GSDevTools.create({animation:animation})
}

window.addEventListener("load", init)