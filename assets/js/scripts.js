// mobile menu
let menu=document.querySelector('header .menu');
let li=Array.from(document.querySelectorAll('header .menu  > ul > li'));

document.getElementById('hamicon').addEventListener('click',function () {
  menu.classList.add('active');
  document.getElementById('hamicon').classList.add('active');
  document.getElementById('menuOverlay').classList.add('active');
  document.getElementById('menuOverlay').addEventListener('click',function () {
    this.classList.remove('active');
    menu.classList.remove('active');
  })
})
document.getElementById('closeMenu').addEventListener('click',function () {
  menu.classList.remove('active');
  document.getElementById('hamicon').classList.remove('active');
  document.getElementById('menuOverlay').classList.remove('active');
})

li.forEach((item)=>{
  item.addEventListener('click',function () {
    item.querySelector('ul').classList.toggle('active');
    item.querySelector('svg').classList.toggle('active');
    item.querySelector('a').classList.toggle('mobileactive');
  })
})

// fancybox

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});
// swiper
var menuSwiper = new Swiper(".team", {
  loop: true,
  autoplay: true,
  slidesPerView: 3,
  spaceBetween:40,
  breakpoints:{
    1200:{
      slidesPerView:2
    },
    992:{
      slidesPerView:2
    },
    576:{
      slidesPerView:1
    }
  }
});