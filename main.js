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
function changeHeaderWhenScroll() {

  if(scrollY > 0) {
    header.classList.add("scroll")
  } else {
    header.classList.remove("scroll")
  }
}

//Testimonials carousel slider swiper
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
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
  #contact .links, #contact .text,
  footer .brand, footer .social-links`, {interval: 100})

//Back To Top
const backToTopButton = document.querySelector('.back-to-top');
function backToTop() {

  if(scrollY >= 1000) {
    backToTopButton.classList.add("show")
  }else {
    backToTopButton.classList.remove("show")
  }
}

//Active menu when in section
const sections = document.querySelectorAll('main section[id]');
function activeMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;

  for(const section of sections) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    const checkpointStart = checkpoint >= sectionTop;
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

    if (checkpointStart && checkpointEnd) {
      document.querySelector(`a[href*=${sectionId}]`).classList.add('active');
    } else {
      document.querySelector(`a[href*=${sectionId}]`).classList.remove('active');
    }
  }
}

//When Scroll
window.addEventListener("scroll", function() {
  changeHeaderWhenScroll();
  backToTop();
  activeMenuAtCurrentSection();
})