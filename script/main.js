$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 400, function(){
        window.location.hash = hash;
      });
    }
  });
});

$(window).scroll(function() {
	var scroll = $(window).scrollTop();
  
  if (scroll > 250) {
  	$(".nav_small_bg, .details_header_small_container").addClass("active animated fadeInDown");
  }
  else {
  	$(".nav_small_bg, .details_header_small_container").removeClass("active animated fadeInDown");
  }
});