import $ from "jquery";
import gsap from "gsap";

gsap.to("#gallery-1", {duration:0, alpha: 0});
gsap.to("#gallery-1", {duration:1, alpha: 1});

gsap.to("#gallery-2", {duration:0, alpha: 0});
gsap.to("#gallery-2", {duration:1, alpha: 1});

gsap.to("#gallery-3", {duration:0, alpha: 0});
gsap.to("#gallery-3", {duration:1, alpha: 1});

gsap.to("#gallery-4", {duration:0, alpha: 0});
gsap.to("#gallery-4", {duration:1, alpha: 1});

gsap.to("#gallery-5", {duration:0, alpha: 0});
gsap.to("#gallery-5", {duration:1, alpha: 1});

gsap.to("#gallery-6", {duration:0, alpha: 0});
gsap.to("#gallery-6", {duration:1, alpha: 1});


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