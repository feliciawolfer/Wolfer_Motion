import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import $ from "jquery";
 
gsap.registerPlugin(ScrollTrigger);

gsap.to("#gallery-1",{duration:1, x:400, rotation:360 });
// gsap.to("#gallery-1",{ duration:1, alpha:0});

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