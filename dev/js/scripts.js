import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// gsap.from("#spaces", {
//     duration: 1,
//     alpha: 0,
//     x: -200,
//     scrollTrigger: {
//         trigger: "#spaces",
//         // markers: true,
//         scrub: true,
//         end: "bottom, top 50%",
//         start: "top, center"
//     }
// });

// gsap.from("#people", {
//     duration: 1,
//     scale: 2.5,
//     scrollTrigger: {
//         trigger: "#people",
//         // markers: true,
//         scrub: true,
//         end: "bottom",
//         start: "bottom, center"
//     }
// });

// gsap.from("#subhead", {
//     duration: 1,
//     alpha: 0,
//     // scale: -2,
//     y: -50,
//     scrollTrigger: {
//         trigger: "#subhead",
//         // markers: true,
//         scrub: true,
//         end: "top",
//         start: "50%, 60%"
//     }
// });

function headerMotion(){
    var tl = gsap.timeline({scrollTrigger:{trigger:"#people", markers:false, scrub:true, end: "bottom 70%", start: "bottom 90%"}})
        tl.from("#spaces", { duration:1, alpha:0, x:-200})
        .from("#people", { duration:1,scale:2.5, y:-55}, "-=0.75")
        .from("#subhead", {duration:1, alpha:0, y:-40},"-=1")
    return tl;
}

function historyMotion(){
    var tl = gsap.timeline({scrollTrigger:{trigger:"#history-middle", markers:true, scrub:true, end: "bottom 70%", start: "bottom bottom"}})
       tl.from("#history-middle", {duration:1, alpha:0, x:80},"-=1")
        .from("#header-1", {duration:1, alpha:0, x:80},"-=2")
        .from("#paragraph-1", {duration:1, alpha:0, x:80},"-=3")
        .from("#header-2", {duration:1, alpha:0, x:80},"-=4")
        .from("#paragraph-2", {duration:1, alpha:0, x:80},"-=5")
        .from("#header-3", {duration:1, alpha:0, x:80},"-=6")
        .from("#paragrph-3", {duration:1, alpha:0, x:80},"-=7")
    return tl;
}

function hero2Motion(){
    var tl = gsap.timeline({scrollTrigger:{trigger:"#hero-2",scrub:true, markers:false, start:"10% bottom", end:"center center"}});
     tl.to("#hero-2", {duration: 2, alpha:1, clipPath: "circle(100%)"})
       .from("#hero-2 h1", {duration: 2, scale:3, alpha:0},"-=1")
       .from("#hero-2 h2", {duration: 2, scale:2, alpha:0},"-=1");
    return tl;
}

function galleryMotion(){
    var tl= gsap.timeline({scrollTrigger:{trigger:"#gallery-1", scrub:true, markers:false, end: "center 20%", start: "center 90%"}});
     tl.from("#gallery-1", {duration: 3, clipPath: "circle(100%)",alpha: 0 })
       .from("#gallery-5", {duration: 3, clipPath: "circle(100%)",alpha: 0 },"-=1.5")
       .from("#gallery-2", {duration: 3, clipPath: "circle(100%)",alpha: 0 },"-=1.5")
       .from("#gallery-4", {duration: 3, clipPath: "circle(100%)",alpha: 0 },"-=1.5")
       .from("#gallery-3", {duration: 3, clipPath: "circle(100%)",alpha: 0 },"-=1.5")
       .from("#gallery-6", {duration: 3, clipPath: "circle(100%)",alpha: 0 })
       .from("#gallery-7", {duration: 3, alpha: 0 }, "+=8");
       return tl
}

// function galleryMotion(){
//      var tl= gsap.timeline({scrollTrigger:{trigger:"#gallery-1", scrub:true, markers:true, end: "center 20%", start: "center 90%"}});
//       tl.to("#gallery-1", {duration: 3, clipPath: "circle(100%)",alpha: 1 })
//         .to("#gallery-5", {duration: 3, clipPath: "circle(100%)",alpha: 1 },"-=1.5")
//         .to("#gallery-2", {duration: 3, clipPath: "circle(100%)",alpha: 1 },"-=1.5")
//         .to("#gallery-4", {duration: 3, clipPath: "circle(100%)",alpha: 1 },"-=1.5")
//         .to("#gallery-3", {duration: 3, clipPath: "circle(100%)",alpha: 1 },"-=1.5")
//         .to("#gallery-6", {duration: 3, clipPath: "circle(100%)",alpha: 1 })
//         .from("#gallery-7", {duration: 3, alpha: 0 }, "+=8");
//         return tl
// }


var mainTl = gsap.timeline();
mainTl.add(headerMotion())
.add(historyMotion())
.add(hero2Motion())
.add(galleryMotion());

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