gs.flick = function() {
    console.log("flick");
    if($('.product-images').length > 0){
        gs.carousel = $('.product-images').flickity({
            cellSelector: '.product-image', 
            contain: true,
            adaptiveHeight: false,
            prevNextButtons: false,
            pageDots: true
        });
        gs.carousel.flickity();
        gs.flickEnabled = true;
    }   
}
