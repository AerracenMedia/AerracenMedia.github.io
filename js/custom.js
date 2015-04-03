(function() {
  "use strict";

  $(document).ready(function() {

    if (location.hash) {
      showPage(location.hash.substring(1));
    }

    $(window).on('hashchange', function() {
      showPage(location.hash.substring(1));
    });

	$("ul.slist .dropdown").click(function(e){
		var targetChildren=$(this).children(".hideable");
		$("ul.slist li.dropdown .hideable").not(targetChildren).slideUp();
		targetChildren.slideToggle();
  	});

  });

  function showPage(page) {
    $("#projects-text").removeClass("selected");
    $("#about-text").removeClass("selected");
    $("#contact-text").removeClass("selected");
    $("#" + page + "-text").addClass("selected");
  }

}());
