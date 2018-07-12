$(document).ready(function(){
    /*inicia libreria de animacion */
    new WOW().init();
    
    /* navbar */ 
    let nav = $('.navbar-fixed-top');
    
    /* verificar distancia del scroll*/ 
    let distancia = $('.navbar-fixed-top').offset();

    if(distancia.top > 0){
        nav.removeClass('normal').addClass('efecto')
    };

    $(window).scroll(function(){
        let scroll = $(window).scrollTop();

        if(scroll >= 250){
            nav.removeClass('normal').addClass('efecto');
        } else {
            nav.removeClass('efecto').addClass('normal');
        }
    });

    
    /* modal*/ 
    $('section#pantallas a').on('click' , function(){
        $('#modal img').attr('src', $(this).attr('data-image-url'));
    });

 

});

/* smoothscroll */
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});