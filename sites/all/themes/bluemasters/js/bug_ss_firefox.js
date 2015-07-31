jQuery(document).ready(function($) {	
  /* Ajout ce code pour régler le pb d'affichage du diaporama avec firefox */
   console.log("Avant resize");
   console.log("Dans resize");
   
   $('.flexslider ul li img').each(function() {
     $(this).width(920);
     $(this).height(316);
   });

});

