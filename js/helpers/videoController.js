gs.videoListener = function(){
    for(var i = 0; i < gs.videoBtns.length; i++){
        gs.videoBtns[i].onclick = function(){
            gs.loadVideo(this);
            gs.currentVideoAnimations();
        }
    }
}

gs.loadVideo = function(el){
    gs.activeVideo = el.parentNode;
    gs.activeVideoOpenBtn = gs.activeVideo.getElementsByClassName('video-section__load-player-button')[0];
    gs.activeVideoCloseBtn = gs.activeVideo.getElementsByClassName('video-section__player-close')[0];
    gs.activeVideoBG = gs.activeVideo.getElementsByClassName('video-section__cover-overlay')[0];
    gs.activeVideoIframe = gs.activeVideo.getElementsByClassName('video-section__iframe')[0];
    gs.activeVideoID = gs.activeVideo.getAttribute('data-video-id');

    gs.activeVideoIframe.innerHTML = '<iframe src="http://player.vimeo.com/video/'+gs.activeVideoID+'?title=0&amp;byline=0&amp;portrait=0&amp;autoplay=1" width="643" height="360" frameborder="0"></iframe>'
    
}

gs.currentVideoAnimations = function(el){
    //video play btn animation
    gs.activeVideoOpenBtn.classList.add('animated');
    gs.activeVideoOpenBtn.classList.add('pulse');
    //video scroll too
    TweenLite.to(window, 0.8, {scrollTo:{y:gs.activeVideo.offsetTop - gs.header.offsetHeight}, ease: Power3.easeInOut, onComplete: function(){
        gs.activeVideoCloseBtn.style.display = 'inline-block';
        gs.activeVideoIframe.style.display = 'block';
    }});
    //VIDEO BG animation
    gs.activeVideoBG.style.display = 'block';

    //CLOSE VIDEO
    gs.activeVideoCloseBtn.onclick = function(){
        gs.closeActiveVideo();
    }
}

gs.closeActiveVideo = function(){
    gs.activeVideoIframe.innerHTML = '';
    gs.activeVideoCloseBtn.style.display = 'none';
    gs.activeVideoIframe.style.display = 'none';
    gs.activeVideoBG.style.display = 'none';
    gs.activeVideoOpenBtn.classList.remove('animated');
    gs.activeVideoOpenBtn.classList.remove('pulse');
}