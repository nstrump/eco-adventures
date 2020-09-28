$(document).ready(function() {
    $(".nav__menu li").on('click', function() {
        $(".nav__checkbox").prop("checked", false);
    });
});