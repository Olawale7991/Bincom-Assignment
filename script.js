let currentMenu = 'home';

function openMenu() {
    document.getElementById('nav-menu').style.right = '0';
}

function closeMenu() {
    document.getElementById('nav-menu').style.right = '-350px';
}

function setMenu(menu) {
    currentMenu = menu;
    ['home', 'about', 'services', 'work', 'contact'].forEach((section) => {
        document.getElementById(`underline-${section}`).style.display = (menu === section) ? 'block' : 'none';
    });
}