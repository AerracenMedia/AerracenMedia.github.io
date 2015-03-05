(function() {
  "use strict";

  $(document).ready(function() {

    if (location.hash) {
      showPage(location.hash.substring(1));
    }

    $(window).on('hashchange', function() {
      showPage(location.hash.substring(1));
    });

  });

  function showPage(page) {
    $("#projects-text").removeClass("selected");
    $("#about-text").removeClass("selected");
    $("#contact-text").removeClass("selected");
    $("#" + page + "-text").addClass("selected");
  }

}());
