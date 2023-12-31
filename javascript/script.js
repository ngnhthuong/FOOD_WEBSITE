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

// croll hidden chatbox

document.addEventListener("DOMContentLoaded", function() {
    var chatboxIcon = document.querySelector(".hidden__chatbox");
    var footer = document.querySelector("footer");

    window.addEventListener("scroll", function() {
        var footerOffset = footer.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;

        // Khi gần tới footer, ẩn chatbox icon
        if (footerOffset < windowHeight / 1.05) {
            chatboxIcon.style.display = "none";
        } else {
            chatboxIcon.style.display = "block";
        }
    });
});