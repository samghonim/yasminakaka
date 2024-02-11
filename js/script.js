// Flickity carousel
$(function() {
    $('.main-carousel').flickity({
        // options
        cellAlign: 'left',
        contain: true
    });
});

// Open all external links in new tab
$(document.links).filter(function() {
    return this.hostname != window.location.hostname;
}).attr('target', '_blank');

// Add background color behind fixed nav
// $(window).scroll(function() {
//     if($(window).scrollTop() > 0) {
//        $('nav').addClass('scrolled');
//     }
//     else {
//        $('nav').removeClass('scrolled');
//     }
//  });

// Add background color behind fixed recommendation-sidebar
$(window).scroll(function() {
    var sidebarTop = $('.recommendation-sidebar').offset().top;
    var scrollTop = $(window).scrollTop();
    if (scrollTop >= sidebarTop) {
       $('.recommendation-sidebar').addClass('scrolled');
    }
    else {
       $('.recommendation-sidebar').removeClass('scrolled');
    }
});