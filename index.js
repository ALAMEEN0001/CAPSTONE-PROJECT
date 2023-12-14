const navtoggle = document.querySelector('.navtoggler');

const btnclose = document.querySelector('.button');
document.getElementsByClassName('.navbar')
const slider = document.getElementsByClassName('.slider')
var nav = document.getElementById('site-menu');
var header = document.getElementById('top');
var btn = document.getElementById('menuBtn');
var nav = document.getElementById('menu');

navtoggle.addEventListener('click', () => {
  
 nav.classList.toggle('hidden');
    navtoggle.classList.toggle('hidden');
    btnclose.classList.toggle('hidden');
    

});
btnclose.addEventListener('click', () => {
    nav.classList.toggle('hidden');
    navtoggle.classList.toggle('hidden');
    btnclose.classList.toggle('hidden');
});


window.addEventListener('scroll', function() {
  if (window.scrollY >=400) { // adjust this value based on site structure and header image height
    nav.classList.add('nav-sticky');
    header.classList.add('pt-scroll');
  } else {
    nav.classList.remove('nav-sticky');
    header.classList.remove('pt-scroll');
  }
});

function navToggle() {
   

        btn.classList.toggle('open');
        nav.classList.toggle('flex');
        nav.classList.toggle('hidden');
    }

function Next1(){
    next();
    slider.setInterval(next, 4000);
   
}
Next1();