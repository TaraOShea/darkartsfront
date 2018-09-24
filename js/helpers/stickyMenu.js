//http://jsfiddle.net/woun56vk/203/
gs.logoScrollResize = function(){
    if(document.getElementsByClassName("home").length > 0){
        gs.logoH = window.innerHeight;
        gs.logoW = Math.floor(gs.logo.offsetWidth);
        gs.heightAtMax = 90;
        gs.widthAtMax = 100;

        gs.stick = gs.logo.offsetHeight + gs.logo.offsetTop;
        gs.maxScrollDistance = gs.intro.offsetHeight - gs.widthAtMax;
        
        gs.widthDiff = gs.logoW - gs.widthAtMax;
        gs.pixelsPerScroll = (gs.widthDiff / gs.maxScrollDistance);

        gs.heightDiff = gs.logoH - gs.heightAtMax;
        gs.heightPixelsPerScroll = (gs.heightDiff / gs.maxScrollDistance);
    }
}

gs.stickyMenu = function() {
    if(document.getElementsByClassName("home").length > 0){
        gs.scrollTopPos = Math.min(window.pageYOffset, gs.maxScrollDistance);
        gs.scrollChangePx =  Math.floor(gs.scrollTopPos * gs.pixelsPerScroll);
        gs.zoomedWidth = gs.logoW - gs.scrollChangePx;

        gs.heightscrollTopPos = Math.min(window.pageYOffset, gs.maxScrollDistance);
        gs.heightScrollChangePx =  Math.floor(gs.heightscrollTopPos * gs.heightPixelsPerScroll);
        gs.zoomedHeight = gs.logoH - gs.heightScrollChangePx;

        gs.logo.style.maxWidth = gs.zoomedWidth +"px";
        gs.logo.style.height = gs.zoomedHeight +"px";

        if(window.pageYOffset >= gs.intro.offsetHeight - gs.heightAtMax) {
            gs.logo.style.maxWidth = (gs.zoomedWidth*2)+20 +"px";
            gs.logo.style.height = gs.zoomedHeight +"px";

            gs.logosvg.style.marginTop = "-90px";
            gs.logotxt.style.display = "none";
            gs.logoicon.style.display = "none";
            gs.logosml.style.display = "block";

            gs.header.classList.add('alt');
        } else {
            gs.logosvg.style.marginTop = "0px";
            gs.logotxt.style.display = "block"; 
            gs.logoicon.style.display = "block";
            gs.logosml.style.display = "none";
            gs.header.classList.remove('alt');
        }
    } else {
        console.log("here");
    }
}