$(window).scroll(function () {
    if ($(window).width() > 768) {
        if ($(window).scrollTop() >= 50) {
        $('.navbar').addClass('nav-light');
        $('.mynav-link').css('color', '#000000');
        } else {
        $('.navbar').removeClass('nav-light');
        $('.mynav-link').css('color', '#FFFFFF');
        }
    } else {
        if ($(window).scrollTop() >= 50) {
        $('.navbar').addClass('nav-light');
        } else {
        $('.navbar').removeClass('nav-light');
        }
    }
});

$(document).ready(function() {
    if ($(window).width() < 768) {
        $('.mynav-link').css('color', '#000000');
    }
});