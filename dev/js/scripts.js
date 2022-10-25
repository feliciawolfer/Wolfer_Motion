import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// const showAnim = gsap.from('.main-tool-bar', { 
//     yPercent: -100,
//     paused: true,
//     duration: 0.2
//   }).progress(1);
  
//   ScrollTrigger.create({
//     start: "top top",
//     end: 99999,
//     onUpdate: (self) => {
//       self.direction === -1 ? showAnim.play() : showAnim.reverse()
//     }
//   });

function heroMotion(){
    var tl = gsap.timeline({scrollTrigger:{trigger:"#spaces", markers:false, scrub:true, end: "bottom 45%", start: "top 60%"}})
        tl.from("#spaces", { duration:1, alpha:0, x:-200})
        .from("#people", { duration:1,scale:2.5},"-=1")
        .from("#subhead", {duration:1, alpha:0, y:-50},"-=1")
        .from("#history-middle", {duration:1, alpha:0, y:-50},)
    return tl;
}

function historytextMotion(){
    var tl = gsap.timeline({scrollTrigger:{trigger:"#header-1", markers:false, scrub:true, end: "bottom 45%", start: "top 80%"}})
        tl.from("#header-1", { duration:1, alpha:0, x:-200})
        .from("#paragraph-1", { duration:1, alpha:0, x:200})
        .from("#header-2", { duration:1, alpha:0, x:-200})
        .from("#paragraph-2", { duration:1, alpha:0, x:200})
        .from("#header-3", { duration:1, alpha:0, x:-200})
        .from("#paragraph-3", { duration:1, alpha:0, x:200})
    return tl;
}


function hero2Motion(){
    var tl = gsap.timeline({scrollTrigger:{trigger:"#hero-2",scrub:true, markers:false, start:"top bottom", end:"center 60%"}});
    tl.from("#hero-2", {duration: 2, alpha:0, clipPath: "inset(50% 0)"})
    .from("#hero-2 h1", {duration: 2, scale:10, color:"pink"},"-=.85")
    .from("#hero-2 h2", {duration: 2, scale:10, color:"pink"},"-=.95");
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
mainTl.add(heroMotion())
.add(historytextMotion())
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