import{gsap}from"gsap";import{ScrollTrigger}from"gsap/ScrollTrigger";import $ from"jquery";gsap.registerPlugin(ScrollTrigger),gsap.to("#gallery-1",{duration:1,x:400,rotation:360});let $nav=$("nav[data-nav]"),isVisible=!1;$(".nav-btns").on("click",(function(){console.log("click"),!1===isVisible?($nav.show(),isVisible=!0):($nav.hide(),isVisible=!1)}));