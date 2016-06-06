$(document).ready(function() {
    //caches a jQuery object containing the header element
    var header = $(".navbar, .navbar-brand");
    if ($(window).width() < 992) {
        header.addClass("post-main");
        
    } else {
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
           
                if (scroll >= 600) {
                    header.addClass("post-main");
                } else {
                    header.removeClass("post-main");
                }
            });


        };
});
