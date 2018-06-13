(function ($) {
    $(document).ready(function(){
        var screenWidth = $(window).width();
        // if window width is smaller than 800 remove the autoplay attribute
        // from the video
        if (screenWidth < 800){
            $('video').removeAttr('autoplay');
        } else {
            $('video').attr('autoplay');
        }
    });
}