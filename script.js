$(document).ready(function(){
  $('.menu-trigger').click(function(){ //when menu-trigger is clicked, function happens
    $('nav ul').slideToggle(500); //500 milliseconds to slide in and out. Equals .5 seconds

  }); //end slide toggle command

  $(window).resize(function(){
      if ( $(window).width() > 700 ){
          $().removeAttr('style');

      }

    });
});
