$(document).ready(function () {
    $(".about-button").click(
        function () {
            $('#about-text').addClass("selected"); 
            $('#projects-text').removeClass("selected");
            $('#contact-text').removeClass("selected");
        }            
    );

  $(".projects-button").click(
        function () {
             $('#projects-text').addClass("selected"); 
            $('#about-text').removeClass("selected");
             $('#contact-text').removeClass("selected");
        }            
    );

  $(".contact-button").click(
        function () {
            $('#contact-text').addClass("selected"); 
            $('#about-text').removeClass("selected");
             $('#projects-text').removeClass("selected");
        }            
    );
});
