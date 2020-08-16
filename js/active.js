//////////////////////////////////
//JQUERY
//////////////////////////////////
$(document).ready(function() {
    
    $(".card").click(function() {
        if ($(this).hasClass("active")) {
            
        } else {
            $(".card").removeClass(" active");
            $(".card__banner").removeClass("fadeIn--fast");
            $(this).addClass(" active");
            $(this).children(".card__banner").addClass("fadeIn--fast");
        }
     });

    $(".card__btn").click(function() {
        if($(this).parent().hasClass("card__info-spanner")) {
            $(this).siblings(".card__info").css("display", "none");
            $(this).parent().removeClass(" card__info-spanner");
            $(this).text("Learn More");  
        } else {
            $(this).parent().addClass(" card__info-spanner");
            $(this).siblings(".card__info").css("display", "block");
            $(this).text("Close");
        }
    });
});
