gs.search = function(){
    if( gs.searchIcon){
        gs.searchIcon.onclick = function(){
            this.parentElement.classList.toggle('open');
        };
    }
}