jQuery(document).ready(function($) {	
  /* Ajout ce code pour régler le pb d'affichage du diaporama avec firefox */
   console.log("Avant resize");
   console.log("Dans resize");
   var wwidth = $(window).width();
   var wheight = $(window).height();
   resizeTo(800,600);

});

