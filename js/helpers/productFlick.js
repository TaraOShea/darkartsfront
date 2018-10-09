gs.flick = function() {
    if($('.flick-images').length > 0){
        console.log("flick");
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
