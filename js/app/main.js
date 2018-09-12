var gs = gs || {};
gs.intro = document.getElementById("intro");
gs.content = document.getElementById("content");
gs.logo = document.getElementById("logo");
gs.logotxt = document.getElementById("logo-text");
gs.logoicon = document.getElementById("logo-icon");
gs.logosvg = document.getElementById("logo-svg");
gs.logosml = document.getElementById("logo-sml");
gs.header = document.getElementById("header");

function onReady() {
 gs.logoScrollResize();
 gs.stickyMenu();
 gs.flick();
}

function onResize() {
    gs.logoScrollResize();
    gs.flick();
}

function onScroll() {
    gs.stickyMenu();
}

$(document).ready(onReady);
$(window).resize(onResize);
$(window).scroll(onScroll);