function navToggle() {
    var navToggleNav = document.getElementById("nav");
    var html = document.getElementById("html");
    var nav__btn = document.getElementById("nav__btn");  
    navToggleNav.classList.toggle("_active");
    html.classList.toggle("_overflow");
    nav__btn.classList.toggle("btn");
}

function toggleItem(id) {
    var item = document.getElementById(id);
    item.classList.toggle("_active");

}

