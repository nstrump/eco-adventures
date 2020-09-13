$(document).ready(function(){

    let glide;
    let glideStart = false;
    checkSize();    
    $(window).resize(checkSize);
  
    function checkSize() {
         console.log('checksize started');
        if ($(".info-panel__heading").css("text-align")  == "center" && glideStart === false) {
            addGlide();
            glideStart = true;
        } else if ($(".info-panel__heading").css("text-align")  != "center" && glideStart === true) {
            destroyGlide();
            restoreGrid();
            glideStart = false;
        }
        console.log('checksize ended');
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

        glide=new Glide('.glide').mount();
    }

    function destroyGlide() {
        glide.destroy();
    }

    function restoreGrid() {

        
        $(".section-gallery__directions").remove();
        $(".polaroid-frame").unwrap();
        $(".polaroid-frame").unwrap();
        $(".polaroid-frame").unwrap();
        $(".polaroid-frame").unwrap();
        $(".polaroid-frame").wrapAll('<div class="section-gallery__grid" />');



        $(".polaroid-frame").addClass(function(index) { 
            
            return ` section-gallery__item--${index + 1}`;   
        
        });
    }
    

    function modifierClassMatcher(index, className) {
        let matchedClasses = className.match(/(^|\s)section-gallery__item--\S+/g);
        return (matchedClasses || []).join('');
    }
});