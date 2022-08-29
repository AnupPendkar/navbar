const navbar_item = document.querySelector(".navbar-item-container");
const dropdown = document.querySelector(".dropdown-section");
const icon = document.querySelector(".navbar-item-container i");
const height = dropdown.clientWidth + 50;

dropdown.style.top = `-${height}px`;
let active = true;
navbar_item.addEventListener('click',()=>{
    (active)?dropdown.style.top = `50px` :dropdown.style.top = `-${height}px`;
    active = !active;
    icon.classList.toggle('rotate');
})
