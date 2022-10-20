import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.from("#spaces", {
    duration: 1,
    alpha: 0,
    x: -200,
    scrollTrigger: {
        trigger: "#spaces",
        // markers: true,
        scrub: true,
        end: "bottom, top 50%",
        start: "top, center"
    }
});

gsap.from("#people", {
    duration: 1,
    scale: 2.5,
    scrollTrigger: {
        trigger: "#people",
        // markers: true,
        scrub: true,
        end: "bottom",
        start: "bottom, center"
    }
});

gsap.from("#subhead", {
    duration: 1,
    alpha: 0,
    // scale: -2,
    y: -50,
    scrollTrigger: {
        trigger: "#subhead",
        // markers: true,
        scrub: true,
        end: "top",
        start: "50%, 60%"
    }
});

// gsap.from("#history-middle", {

//     scrollTrigger: {
//         trigger: "#history-middle",
//         markers: true,
//         scrub: true,
//         end: "center, 70%",
//         start: "80%, 99%"
//     }
// });

gsap.to("#hero-2", {
    duration: 5,
    alpha:0,
    clipPath: "inset(50% 0)",
    scrollTrigger: {
        trigger: "#hero-2",
        // markers: true,
        scrub: true,
        end: "bottom center",
        start: "top 10%"
    }
});
gsap.to("#hero-2 h1", {
    duration: 5,
    scale:3,
    alpha:1,
    // clipPath: "inset(50% 0)",
    scrollTrigger: {
        trigger: "#hero-2",
        // markers: true,
        scrub: true,
        end: "bottom center",
        start: "top 10%"
    }
});
gsap.to("#hero-2 h2", {
    duration: 5,
    scale:2,
    alpha:1,
    // clipPath: "inset(50% 0)",
    scrollTrigger: {
        trigger: "#hero-2",
        // markers: true,
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
        // markers: true,
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
        // markers: true,
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
        // markers: true,
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
        // markers: true,
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
        // markers: true,
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
        // markers: true,
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
        // markers: true,
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