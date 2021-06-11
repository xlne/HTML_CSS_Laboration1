$(function () {
    if ($(window).width() <= 700) {
        var stickyHeaderTop = $('#stickyHeader').offset().top;

        $(window).scroll(function () {
            if ($(window).scrollTop() > stickyHeaderTop) {
                $('#stickyHeader').css({
                    position: 'fixed', top: '0px',
                    width: '100%', 'background-color': 'rgb(238, 217, 190)'
                });
            } else {
                $('#stickyHeader').css({ position: 'static', top: '0px' });
            }
        });
    }
});