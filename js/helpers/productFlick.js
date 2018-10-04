gs.flick = function() {
    console.log("flick");
    if($('.flick-images').length > 0){
        gs.carousel = $('.flick-images').flickity({
            cellSelector: '.flick-image', 
            contain: true,
            adaptiveHeight: false,
            prevNextButtons: false,
            pageDots: true
        });
        gs.carousel.flickity();
        gs.flickEnabled = true;
    }   
}
