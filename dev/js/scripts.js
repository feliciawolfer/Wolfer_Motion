import { gsap } from "gsap";

gsap.from("#line-1",{duration:.5,x:-200,alpha:0});
gsap.from("#line-2",{duration:.5,x:-100,alpha:0, delay:0.5});
gsap.from("#line-3",{duration:.5,x:-150,alpha:0});
gsap.from("#line-4",{duration:.5,x:-200,alpha:0,delay:0.5});

gsap.from("#availability-btn",{duration:.5,x:200,alpha:0,delay:1});

let availabilityBtn = document.querySelector("availability-btn");

availabilityBtn.addEventListener("mouseover", function(){
    gsap.to("availability-btn",{duration:1,scale:2});
})

availabilityBtn.addEventListener("mouseout", function(){
    gsap.to("availability-btn",{duration:1,scale:1});
})