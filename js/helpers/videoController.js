gs.videoListener = function(){
    for(var i = 0; i < gs.videoBtns.length; i++){
        gs.videoBtns[i].onclick = function(){
            gs.videoBtnClick(this);
        }
    }
}

gs.videoBtnClick = function(el){
    el.classList.add('animated');
    el.classList.add('pulse');
}