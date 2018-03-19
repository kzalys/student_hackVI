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

    var fastDelta = 0.4;
    var mediumDelta = 0.6;
    var slowDelta = 0.8;

    var meteorXRatio = 0.466;
    var falconXRation = 2.145;

    $('.parallax--fast').css('top', (wScroll * fastDelta) + 'px');
    $('.parallax--medium').css('top', (wScroll * mediumDelta) + 'px');
    $('.parallax--slow').css('top', (wScroll * slowDelta) + 'px');

    var falconLeft = $('#falcon').css('left');
    var meteorLeft = $('#meteor').css('left');
    
    $('#falcon').css('left', falconLeft - (wScroll * fastDelta / falconXRation) + 'px');
    $('#meteor').css('left', meteorLeft - (wScroll * mediumDelta / meteorXRatio) + 'px');
}
