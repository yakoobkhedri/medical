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
// scroll event
window.addEventListener('scroll',()=>{
  if (window.scrollY>40) {
    document.querySelector('header').style.backgroundColor='white';
    document.querySelector('header').style.boxShadow=' 0 0 50px 0 rgba(0, 0, 0, 0.1)'
  } else {
    document.querySelector('header').style.backgroundColor='transparent';
    document.querySelector('header').style.boxShadow='none'
  }
})
// fancybox

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});
// swiper
var teamSwiper= new Swiper(".teamSwiper", {
  loop: true,
  spaceBetween: 35,
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    }
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var days= new Swiper(".days", {
  loop: true,
  spaceBetween: 35,
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// tabs

let tabs = Array.from(document.getElementsByClassName('tabs'))
let tabContent = Array.from(document.querySelectorAll('.tabContent > div'));

tabs.forEach((tab) => {
    tab.addEventListener('click', function() {
      tabs.forEach((tabs) => {tabs.classList.remove('active')});
      tab.classList.add('active')
        let tabId = tab.dataset.id;
        tabContent.forEach((content) => {
            let contentId = content.dataset.id;
            if (tabId === contentId) {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        })
    })
})