//http://jsfiddle.net/woun56vk/203/
gs.logoScrollResize = function(){
    gs.logoH = Math.floor(gs.logo.offsetHeight);
    gs.logoW = Math.floor(gs.logo.offsetWidth);
    gs.heightAtMax = 90;
    gs.widthAtMax = 100;

    gs.stick = gs.logo.offsetHeight + gs.logo.offsetTop;
    gs.maxScrollDistance = gs.intro.offsetHeight - gs.widthAtMax;
    
    gs.widthDiff = gs.logoW - gs.widthAtMax;
    gs.pixelsPerScroll = (gs.widthDiff / gs.maxScrollDistance);

    gs.heightDiff = gs.logoH - gs.heightAtMax;
    gs.heightPixelsPerScroll = (gs.heightDiff / gs.maxScrollDistance);

    // if(document.body.scrollHeight < window.innerHeight && document.getElementsByClassName("home").length > 0){
    //     gs.content.style.paddingTop = gs.intro.offsetHeight +"px";  
    // }
}

gs.stickyMenu = function() {
    if(document.getElementsByClassName("home").length > 0){
        var scrollTopPos = Math.min(window.pageYOffset, gs.maxScrollDistance);
        var scrollChangePx =  Math.floor(scrollTopPos * gs.pixelsPerScroll);
        var zoomedWidth = gs.logoW - scrollChangePx;

        var heightscrollTopPos = Math.min(window.pageYOffset, gs.maxScrollDistance);
        var heightScrollChangePx =  Math.floor(heightscrollTopPos * gs.heightPixelsPerScroll);
        var zoomedHeight = gs.logoH - heightScrollChangePx;

        // var zoomedWidth = gs.logoW - (scrollChangePx*2);
        // if(zoomedWidth >= gs.widthAtMax) {
            gs.logo.style.maxWidth = zoomedWidth +"px";
            gs.logo.style.height = zoomedHeight +"px";
        // }
        // if (window.pageYOffset <= gs.maxScrollDistance && (window.innerHeight + window.scrollY) <= (document.body.offsetHeight) - document.getElementById("footer").offsetHeight) {
        //     gs.content.style.paddingTop = (gs.maxScrollDistance*2)  - window.pageYOffset +"px";
        // } 

        if(window.pageYOffset >= gs.intro.offsetHeight - gs.heightAtMax) {
            gs.logo.style.maxWidth = (zoomedWidth*2)+20 +"px";
            gs.logo.style.height = zoomedHeight +"px";
            gs.logosvg.style.marginTop = "-90px";
            gs.logotxt.style.display = "none";
            gs.logoicon.style.display = "none";
            gs.logosml.style.display = "block";
            gs.header.style.background = "#FFFFFF";
        } else {
            gs.logosvg.style.marginTop = "0px";
            gs.logotxt.style.display = "block"; 
            gs.logoicon.style.display = "block";
            gs.logosml.style.display = "none";
            gs.header.style.background = "transparent";
        }
    } else {
        console.log("here");
        // gs.logo.style.maxWidth = gs.widthAtMax +"px"; 
        // gs.content.style.paddingTop = gs.header.offsetHeight +"px"; 
    }
}