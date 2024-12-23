const burgerElement = document.querySelector('.burger');
const bodyElement = document.body;
const menuElement = document.querySelector('.nav_list');
const overlayElement = document.querySelector('.overlay');
const linkMenuElement =document.querySelectorAll('.nav-link');

function toggleMenu(){
    burgerElement.classList.toggle('burger_active');
    bodyElement.classList.toggle('body_no-scroll');
    menuElement.classList.toggle('nav_list_is_open');
    overlayElement.classList.toggle('overlay_is-visible');
};
burgerElement.addEventListener('click',() =>{
    toggleMenu();
});
overlayElement.addEventListener('click',()=>{
    toggleMenu();
});
linkMenuElement.forEach((link)=>{
    link.addEventListener('click',()=>{
        toggleMenu(); 
    })
})