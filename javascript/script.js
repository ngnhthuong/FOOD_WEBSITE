// croll sticky navigation

$(document).ready(function() {
    var header = $('header');
    var isSticky = false;

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll > 0 && !isSticky) {
            header.addClass('sticky');
            isSticky = true;
        } else if (scroll === 0 && isSticky) {
            header.removeClass('sticky');
            isSticky = false;
        }
    });
});