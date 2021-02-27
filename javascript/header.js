var nav_menu_button = document.getElementById('nav-menu-button');
var nav_menu_list = document.getElementById('nav-menu-list');
var cover = document.getElementById('cover');
var cancel = document.getElementById('cancel');
var header = document.getElementById('header');
var eyeball = document.getElementById('eyeball');

nav_menu_button.addEventListener('click',()=>{
    nav_menu_list.style.display = 'block';
    cover.style.display = 'block';
})
nav_menu_list.addEventListener('click',()=>{
    nav_menu_list.style.display = 'none';
    cover.style.display = 'none';
})

cover.addEventListener('click',()=>{
    nav_menu_list.style.display = 'none';
    cover.style.display = 'none';
})

cancel.addEventListener('click',()=>{
    nav_menu_list.style.display = 'none';
    cover.style.display = 'none';
})


header.addEventListener('mousemove',(event)=>{
    eyeball.style.marginLeft = (event.offsetX/window.screen.width)*26 + "px"
    eyeball.style.marginTop = (event.offsetY/window.screen.height)*30 + "px"
})