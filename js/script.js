// <============== JQuery ==============> //
$(document).ready(function() {

    $(window).scroll(function() {
        var scrollValue = $(window).scrollTop();
        if (scrollValue > 70) {
            $('#home-nav-scroll').removeClass('bg-transparent');
            $('#home-nav-scroll').addClass('scrolled-nav');
            $('#red-text').removeClass('media-text');
            $('#red-text').addClass('rantau-text');
        } else {
            $('#home-nav-scroll').removeClass('scrolled-nav');
            $('#red-text').addClass('media-text');
        }

        if (scrollValue < 300) {
            $('#home-pos').addClass('nav-link-active');
        }
        // console.log(scrollValue);

    });

    // var screenWidth = $(window).width();
    // $(window).on('resize', function() {
    //     if (screenWidth < 1091) {
    //         $('#home-nav-scroll').addClass('small-screen-nav');
    //         $('#home-nav-scroll').removeClass('bg-transparent');
    //     } else {
    //         $('#home-nav-scroll').removeClass('small-screen-nav');
    //         $('#home-nav-scroll').addClass('bg-transparent');
    //     }
    // });

    var screenWidth = $(document).width();
    $(document).on('resize', function() {
        if (screenWidth < 600) {
            $('#jumbotron-sm-tile').addClass('jumbotron-small-text');
            $('#jumbotron-sm-quote').addClass('jumbotron-small-text');
        } else {
            $('#jumbotron-sm-tile').removeClass('jumbotron-small-text');
            $('#jumbotron-sm-quote').removeClass('jumbotron-small-text');
        }
    });

});
// <============== END OF JQuery ==============> //