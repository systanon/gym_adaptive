 $(window).scroll(function(){
      if ($(this).scrollTop() > 600) {
          $('.menuStiky').slideDown();
      } else {
          $('.menuStiky').slideUp();
      }
});