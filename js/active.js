//////////////////////////////////
//JQUERY
//////////////////////////////////
$(document).ready(function() {
    
    $(".card").click(function() {
        $(".card").removeClass(" active");
        $(".card__banner").removeClass("fadeIn--fast");
        $(this).addClass(" active");
        $(this).children(".card__banner").addClass("fadeIn--fast");
     });
});
