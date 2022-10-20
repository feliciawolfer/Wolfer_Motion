import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.to("#hero-2", {
    duration: 5,
    clipPath: "inset(50% 0)",
    scrollTrigger: {
        trigger: "#hero-2",
        markers: true,
        scrub: true,
        end: "bottom center",
        start: "top 10%"
    }
})
gsap.to("#hero-2 h1", {
    duration: 5,
    scale:3,
    alpha:0,
    clipPath: "inset(50% 0)",
    scrollTrigger: {
        trigger: "#hero-2",
        markers: true,
        scrub: true,
        end: "bottom center",
        start: "top 10%"
    }
});
gsap.to("#hero-2", {
    duration: 5,
    scale:2,
    alpha:0,
    clipPath: "inset(50% 0)",
    scrollTrigger: {
        trigger: "#hero-2",
        markers: true,
        scrub: true,
        end: "bottom center",
        start: "top 10%"
    }
});


// function hero2Animation(){
//     var tl =gsap.timeline ();
//     tl.from("bg-img",{duration:1, scaleX:0})
//     return tl;
// }

gsap.to("#gallery-1", {
    duration: 0,
    alpha: 0
});
gsap.to("#gallery-1", {
    duration: 1,
    alpha: 1,
    scrollTrigger: {
        trigger: "#gallery-1",
        markers: true,
        scrub: true,
        end: "top center",
        start: "top 80%"
    }
});

gsap.to("#gallery-2", {
    duration: 0,
    alpha: 0
});
gsap.to("#gallery-2", {
    duration: 1,
    alpha: 1,
    scrollTrigger: {
        trigger: "#gallery-2",
        markers: true,
        scrub: true,
        end: "top center",
        start: "top 80%"
    }
});

gsap.to("#gallery-3", {
    duration: 0,
    alpha: 0
});
gsap.to("#gallery-3", {
    duration: 2,
    alpha: 1,
    scrollTrigger: {
        trigger: "#gallery-3",
        markers: true,
        scrub: true,
        end: "top center",
        start: "top 80%"
    }
});

gsap.to("#gallery-4", {
    duration: 0,
    alpha: 0
});
gsap.to("#gallery-4", {
    duration: 1,
    alpha: 1,
    scrollTrigger: {
        trigger: "#gallery-4",
        markers: true,
        scrub: true,
        end: "top center",
        start: "top 80%"
    }
});

gsap.to("#gallery-5", {
    duration: 0,
    alpha: 0
});
gsap.to("#gallery-5", {
    duration: 1,
    alpha: 1,
    scrollTrigger: {
        trigger: "#gallery-5",
        markers: true,
        scrub: true,
        end: "top center",
        start: "top 80%"
    }
});

gsap.to("#gallery-6", {
    duration: 0,
    alpha: 0
});
gsap.to("#gallery-6", {
    duration: 1,
    alpha: 1,
    scrollTrigger: {
        trigger: "#gallery-6",
        markers: true,
        scrub: true,
        end: "top center",
        start: "top 80%"
    }
});

gsap.to("#gallery-7", {
    duration: 0,
    alpha: 0
});
gsap.to("#gallery-7", {
    duration: 1,
    alpha: 1,
    scrollTrigger: {
        trigger: "#gallery-7",
        markers: true,
        scrub: true,
        end: "top center",
        start: "top 80%"
    }
});

let $nav = $('nav[data-nav]');
let isVisible = false;

$(".nav-btns").on("click", function(){
    console.log("click");
    if(isVisible === false){
        $nav.show();
        isVisible = true;
    }
    else{
        $nav.hide();
        isVisible = false;
    }
})