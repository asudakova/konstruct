const header = document.querySelector('.header');
const sticky = header.offsetTop;
window.onscroll = () => {
   if (window.pageYOffset > sticky){
      header.classList.add('header_active');
   } else {
      header.classList.remove('header_active');
   }
};

document.querySelector('.main-scroll').addEventListener('click', function(e){
   e.preventDefault(); //чтобы просто прокручивалось к эл-ту, а не переходило по ссылке
   document.querySelector(this.getAttribute('href')).scrollIntoView({
      block: 'start',
      behavior: 'smooth'
   });
});

const anchors = document.querySelectorAll('.anchors-scroll');
const headerHeight = header.clientHeight;
anchors.forEach(anchor => {
   anchor.addEventListener('click', function(e){
      e.preventDefault();
      const el = this.getAttribute('href');
      const target = document.querySelector(el).offsetTop - headerHeight - 10;
      window.scrollTo({
         top: target,
         behavior: 'smooth'
      });
      if (burgerIcon.classList.contains('active')){
         menu.classList.remove('active');
         burgerIcon.classList.remove('active');
      }
   });
});

const burgerIcon = document.querySelector('.menu__icon');
const menu = document.querySelector('.menu__body');
const menuLinks = document.querySelector('.menu__link');
burgerIcon.addEventListener('click', () => {
   menu.classList.toggle('active');
   burgerIcon.classList.toggle('active');
   document.body.classList.toggle('lock');
});



