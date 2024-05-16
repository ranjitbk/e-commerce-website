import { gsap } from "gsap";

export default function initGsap() {
// 	var tl = gsap.timeline();
// //sequenced one-after-the-other
// tl.to(".box1", {duration: 2, x: 100}, 1.5) //notice that there's no semicolon!
// .to(".box2", {duration: 1, y: 200}, "-=0.75")
// .to(".box3", {duration: 3, rotation: 360}, "+=1");

gsap.registerEffect({
	name: "fade",
    defaults: {duration: 2}, //defaults get applied to the "config" object passed to the effect below
    effect: (targets, config) => {
    	return gsap.to(targets, {duration: config.duration, opacity: 0});
    }
});

//now we can use it like this:
//gsap.effects.fade(".box");

document.querySelectorAll(".box").forEach(function(box) {
	box.addEventListener("mouseenter", function() {
		gsap.effects.fade(this);
	});
});

}