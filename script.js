const burgerElement = document.querySelector('.burger');
const bodyElement = document.body;
const menuElement = document.querySelector('.nav_list');
const overlayElement = document.querySelector('.overlay');
const linkMenuElement =document.querySelectorAll('.nav-link');

const closeMenu = () => {
    menuElement.classList.remove("nav_list_is_open");
    overlayElementy.classList.remove("overlay_is-visible");
    bodyElement.classList.remove("body_no-scroll");
  };
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
    closeMenu();
});
linkMenuElement.forEach((link)=>{
    link.addEventListener('click',()=>{
        closeMenu(); 
    })
})
// switcher language

// Добавляем обработчик события на изменение языка
document.getElementById('language-select').addEventListener('change', function () {
    const selectedLanguage = this.value; // Получаем выбранный язык: "eng" или "ru"
    setLanguage(selectedLanguage);
});

// Функция для изменения языка
function setLanguage(lang) {
    // Находим все элементы с атрибутами data-eng и data-ru
    document.querySelectorAll('[data-eng]').forEach(el => {
        // Меняем текст элемента на значение атрибута data-lang
        el.textContent = el.getAttribute(`data-${lang}`);
    });
}