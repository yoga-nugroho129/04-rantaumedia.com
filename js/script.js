// <============== JQuery ==============> //
$(document).ready(function() {

    $(window).scroll(function() {
        var scrollValue = $(window).scrollTop();
        if (scrollValue > 70) {
            $('#home-nav-scroll').removeClass('bg-transparent');
            $('#home-nav-scroll').addClass('scrolled-nav');
        } else {
            $('#home-nav-scroll').removeClass('scrolled-nav');
        }

        console.log(scrollValue);
    });

});
// <============== END OF JQuery ==============> //