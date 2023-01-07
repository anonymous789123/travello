document.getElementById("btn").addEventListener("click", fun);
function fun(){
    document.getElementById("btn").innerHTML="Already In Cart";
}
document.getElementById("btn1").addEventListener("click", fun2);
function fun2(){
    document.getElementById("btn1").innerHTML="Already In Cart";
}
document.getElementById("btn2").addEventListener("click", fun3);
function fun3(){
    document.getElementById("btn2").innerHTML="Already In Cart";
}
const addToCartBtn = document.querySelectorAll(".our_services .services_list .theme_button a");

const slider = new Swiper(".swiper", {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    speed: 2000,
    slidesPerView: 1,
    loop: false,
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
        prev: {
            shadow: true,
            translate: [0, 0, -400],
        },
        next: {
            translate: ["100%", 0, 0],
        },
    },
});
