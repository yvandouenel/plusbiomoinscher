jQuery(document).ready(function($) {	
  /* Ajout ce code pour régler le pb d'affichage du diaporama avec firefox */
   console.log("Avant resize");
  $(window).resize(function() {
    console.log("Dans resize");
    var ww = $(window).width();
    /*$('.flexslider ul li').each(function() {
      $(this).width(ww);
    });*/
  });
});

