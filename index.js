const navtoggle = document.querySelector('.navtoggler');
const nav = document.querySelector('.navbar');
const btnclose = document.querySelector('.button');
document.getElementsByClassName('.navbar')
const slider = document.getElementsByClassName('.slider')


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

function Next1(){
    next();
    slider.setInterval(next, 4000);
   
}
Next1();