//Open and Close Menu
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

for(const element of toggle) {
  element.addEventListener('click', function() {
    nav.classList.toggle('show');
  })
}

//Close the menu when clicking on any item
const links = document.querySelectorAll('nav ul li a');

for(const link of links) {
  link.addEventListener('click', function() {
    nav.classList.remove('show');
  })
}

//Add 'scroll' class on scroll down
const header = document.querySelector("#header");

window.addEventListener("scroll", function() {
  if(scrollY > 0) {
    header.classList.add("scroll")
  } else {
    header.classList.remove("scroll")
  }
})

//Testimonials carousel slider swiper
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
});

//ScrollReveal
ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 500,
  reset: true
}).reveal(`#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .social-links`, {interval: 100})