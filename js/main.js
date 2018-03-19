// Timer

var countDownDate = new Date("Apr 26, 2018 09:00:00").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (hours < 10)
        hours = "0" + hours;
    if (days < 10)
        days = "0" + days;
    if (minutes < 10)
        minutes = "0" + minutes;
    if (seconds < 10)
        seconds = "0" + seconds;

    document.getElementById("daysNumber").innerHTML = days;
    document.getElementById("hoursNumber").innerHTML = hours;
    document.getElementById("minutesNumber").innerHTML = minutes;
    document.getElementById("secondsNumber").innerHTML = seconds;

}, 1000);

// Map

function initMap() {
    var venue = { lat: 53.470350850357946, lng: -2.240422239629993 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: venue
    });
    var marker = new google.maps.Marker({
        position: venue,
        map: map
    });
}

// Parallax

$(window).scroll(function () {
    parallax();
})

function parallax() {
    var wScroll = $(window).scrollTop();

    $('#hero').css('top', (wScroll * 0.5) + 'px');
    $('#background').css('top', (wScroll * 0.7) + 'px');
    // console.log($('.parallax--slow').css(top));


    // $('.title').css('top', (wScroll * 0.3) + 'px');
}

// function resize() {
//     const ratioDelta = ($(window).width() / $(window).height()) / (16 / 9);
//     console.log($(window).height());
//     parallax();
// }