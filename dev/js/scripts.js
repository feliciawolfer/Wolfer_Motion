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

function heroMotion(){
    var tl = gsap.timeline({scrollTrigger:{trigger:"#spaces", markers:false, scrub:true, end: "bottom, top 50%", start: "top, center"}})
        tl.from("#spaces", { duration:1, alpha:0, x:-200})
        .from("#people", { duration:1,scale:2.5})
        .from("#subhead", {duration:1, alpha:0, scale:-2, y:-50})
    return tl;
}


function hero2Motion(){
    var tl = gsap.timeline({scrollTrigger:{trigger:"#hero-2",scrub:true, markers:false, start:"top 60%", end:"bottom 80%"}});
    tl.from("#hero-2", {duration: 2, alpha:0, clipPath: "inset(50% 0)"})
    .from("#hero-2 h1", {duration: 2, scale:3, alpha:0},"-=1")
    .from("#hero-2 h2", {duration: 2, scale:2, alpha:0},"-=1");
    return tl;
}

function galleryMotion(){
    var tl= gsap.timeline({scrollTrigger:{trigger:"#gallery-1", scrub:true, markers:true, end: "center 20%", start: "center 90%"}});
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
mainTl.add(heroMotion())
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