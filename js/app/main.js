var gs = gs || {};
gs.intro = document.getElementById("intro");
gs.content = document.getElementById("content");
gs.logo = document.getElementById("logo");
gs.logotxt = document.getElementById("logo-text");
gs.logoicon = document.getElementById("logo-icon");
gs.logosvg = document.getElementById("logo-svg");
gs.logosml = document.getElementById("logo-sml");
gs.header = document.getElementById("header");
gs.menuIcon = document.getElementById("nav-btn");
gs.menuContainer = document.getElementById("hidden-nav");
gs.menuItems = document.getElementsByClassName("menu-item");
gs.initBGImgLoaded = false;

function onReady() {
    gs.initAnimation();
    gs.preloadImage('https://static1.squarespace.com/static/5693a9207086d7242736259c/t/5693b1faa128e6b30eb606f5/1452519934351/DarkArtsBirthday-32.jpg?format=2500w');
    gs.logoScrollResize();
    gs.stickyMenu();
    gs.flick();
    gs.menu();
    gs.animateHTML();
}

function onResize() {
    gs.logoScrollResize();
    gs.stickyMenu();
    gs.flick();
}

function onScroll() {
    gs.stickyMenu();
}

$(document).ready(onReady);
$(window).resize(onResize);
$(window).scroll(onScroll);