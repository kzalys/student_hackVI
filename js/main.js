$(document).ready(function() {
    resize();
});

$(window).resize(function() {
    resize();
})


$(window).scroll(function() {
    parallax();
})

function parallax() {
    var wScroll = $(window).scrollTop();

    $('.parallax--quick').css('top', (wScroll * 0.5) + 'px');
    $('.parallax--medium').css('top', (wScroll * 0.3) + 'px');
    $('.parallax--slow').css('top', (wScroll * 0.7) + 'px');

    $('.saturn').css('top', (wScroll * 0.6 + $(window).height() / 5) + 'px');

    // $('.title').css('top', (wScroll * 0.3) + 'px');
}

function resize() {
    $('.saturn').height(640 * $(window).height() / 1094);
    $('.saturn').width(640 * $(window).height() / 1094);
    const ratioDelta =  ($(window).width() / $(window).height()) / (16 / 9);
    console.log($(window).height());
    // $('.saturn').css('right', (10 * ratioDelta) + "%");
    // $('.saturn').css('top', (20 * ratioDelta) + "%");
    parallax();
}