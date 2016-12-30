window.onload = function() {

  $("#arrow-down-1, #btn-about-me").click(function() {
      /*$('html, body').animate({scrollTop: $("#about-me-anchor").offset().top},
        {
            duration:500,
            queue:false
        });*/
        window.open("test.html");
  });

  $("#arrow-down-2, #btn-projects").click(function() {
      $('html, body').animate({scrollTop: $("#projects-anchor").offset().top},
        {
            duration:500,
            queue:false
        });
  });


};
