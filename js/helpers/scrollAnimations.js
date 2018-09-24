gs.animateOnScroll = function() {
    var elems;
    var windowHeight;
    function init() {
      elems = document.querySelectorAll('.hidden');
      windowHeight = window.innerHeight;
      addEventHandlers();
      checkPosition();
    }
    function addEventHandlers() {
      window.addEventListener('scroll', checkPosition);
      window.addEventListener('resize', init);
    }
    function checkPosition() {
      for (var i = 0; i < elems.length; i++) {
        var positionFromTop = elems[i].getBoundingClientRect().top + 100;
        if (positionFromTop - windowHeight <= 0) {
          elems[i].className = elems[i].className.replace(
            'hidden',
            'inview'
          );
        }
      }
    }
    return {
      init: init
    };
  };
  gs.animateOnScroll().init();