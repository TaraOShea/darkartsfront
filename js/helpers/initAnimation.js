gs.initAnimation = function(){
    if(document.getElementsByClassName("home").length > 0){ 
        TweenMax.set(gs.logo, {scale: 0, rotation: 45 });
        TweenMax.set(gs.menuIcon, {scale: 0 });
        TweenMax.to(gs.logo, 1.8, {scale: 1, rotation: 0, ease: Power4.easeInOut, onComplete: function(){ 
                // if(gs.initBGImgLoaded){
                    gs.intro.className += " into-loaded";
                    TweenMax.to(gs.menuIcon, 0.4, {scale: 1, ease: Power4.easeInOut, delay: 0.4 });
                // } 
            }
        });
    }
}
gs.OnImageLoaded = function(img) {
    gs.initBGImgLoaded = true;
}
gs.preloadImage = function (src) {
    var img = new Image ();
    img.onload = function () {
        gs.OnImageLoaded(this)
    };
    img.src = src;
}

