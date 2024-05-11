// mobile menu
let menu=document.querySelector('header .menu');
let li=Array.from(document.querySelectorAll('header .menu > li'));

document.getElementById('hamicon').addEventListener('click',function () {
  menu.classList.add('active');
  document.getElementById('menuOverlay').classList.add('active');
  document.getElementById('menuOverlay').addEventListener('click',function () {
    this.classList.remove('active');
    menu.classList.remove('active');
  })
})
document.getElementById('closeMenu').addEventListener('click',function () {
  menu.classList.remove('active');
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
var menuSwiper = new Swiper(".brands", {
  loop: true,
  autoplay: true,
  slidesPerView: 4,
  spaceBetween:50,
  breakpoints:{
    1200:{
      slidesPerView:3
    },
    992:{
      slidesPerView:2
    },
    576:{
      slidesPerView:1
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
},
});
var menuSwiper = new Swiper(".testimonials", {
  loop: true,
  autoplay: true,
  slidesPerView: 3,
  spaceBetween:50,
  breakpoints:{
    1200:{
      slidesPerView:2
    },
    768:{
      slidesPerView:1
    },
    576:{
      slidesPerView:1
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
},
});
// animation

ScrollReveal().reveal('.top', {
  duration: 2000,
  origin: 'top',
  distance: '100px',
  delay: 500,
  easing: 'ease-out'
});

ScrollReveal().reveal('.left', {
  duration: 2000,
  origin: 'left',
  distance: '100px',
  delay: 500,
  easing: 'ease-out'
});