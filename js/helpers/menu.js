gs.menu = function(){
    gs.menuIcon.onclick = function(){
        this.classList.toggle('open');
        if(gs.searchIcon){gs.searchIcon.classList.toggle('open');}
        gs.menuContainer.classList.toggle('nav-open');
        gs.header.classList.toggle('open');
        for(var i=0; i < gs.menuItems.length; i++){
            gs.animateMenu(gs.menuItems[i], i);
        }
    };
}

gs.animateMenu = function(el, i){
    setTimeout(function () {
        el.classList.toggle('active');
    },i*120);
}