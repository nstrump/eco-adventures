$(document).ready(function(){

    $(".info-panel__heading").on(checkSize());
       

    function checkSize() {
         
        if ($(".info-panel__heading").css("text-align")  == "center") {
            addGlide();
        } else {
            removeGlide();
        }
    }

    function adjustSize() {

    }

    function addGlide() {
    
        $(".section-gallery__grid").addClass(" glide");
        $(".section-gallery__grid").removeClass("section-gallery__grid");
        $(".polaroid-frame").removeClass(modifierClassMatcher);
        $(".polaroid-frame" ).wrapAll( '<div class="glide__track" data-glide-el="track" />');
        $(".polaroid-frame" ).wrapAll( '<ul class="glide__slides" />');
        $(".polaroid-frame" ).wrap( '<li class="glide__slide"><li/>');
        $(".glide__slides").after('<p class="section-gallery__directions">We think you\'ll want to swipe right on these trip photos.</p>');
        new Glide('.glide').mount();
    }

    function removeGlide() {
        $(".section-gallery__directions").remove();
        $(".polaroid-frame").unwrap();
        $(".glide__slides").remove();
        $(".glide__track").remove();
        $(".glide").remove();
        $(".polaroid-frame").wrapAll('<div class="section-gallery__grid" />');
    }

    function modifierClassMatcher(index, className) {
        let matchedClasses = className.match(/(^|\s)section-gallery__item--\S+/g);
        return (matchedClasses || []).join('');
    }
});

