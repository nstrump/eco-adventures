(function popupTabTrap() {

    const  focusableElements =
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const modal = document.querySelector('#modal-window');
    const nav = document.querySelector('#nav');

    const popupArray = [nav, modal];

    for(let i = 0; i < popupArray.length; i++) {

        let firstFocusableElement = popupArray[i].querySelectorAll(focusableElements)[0]; // get first element to be focused inside modal
        let focusableContent = popupArray[i].querySelectorAll(focusableElements);
        let lastFocusableElement = focusableContent[focusableContent.length - 1]; // get last element to be focused inside modal
        
        document.addEventListener('keydown', function(e) {
            let isTabPressed = e.key === 'Tab' || e.code === 9;
            let checkbox = document.querySelector('#nav-toggle:checked');           

            if (!isTabPressed) {
                return;
            }

            if ((i===0 && checkbox !== null) || i===1) {
                if (e.shiftKey) { // if shift key pressed for shift + tab combination
                    if (document.activeElement === firstFocusableElement) {
                        lastFocusableElement.focus(); // add focus for the last focusable element
                        e.preventDefault();
                    }
                } else { // if tab key is pressed
                    if (document.activeElement === lastFocusableElement) { // if focused has reached to last focusable element then focus first focusable element after pressing tab
                        firstFocusableElement.focus(); // add focus for the first focusable element
                        e.preventDefault();
                    }
                }
            }       
        });
    
        firstFocusableElement.focus();
    }
})();