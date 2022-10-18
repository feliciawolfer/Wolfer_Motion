import $ from "jquery";
import gsap from "gsap";

gsap.to("#gallery-1", {duration:1, x:400, rotation:360})

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