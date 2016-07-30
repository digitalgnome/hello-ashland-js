$(document).ready(function() {
    var opacity = false;
    $("#btnIn").click(
        function() {
            if (opacity === false) {
                $("#btnCtrl").clearQueue().stop().animate({
                    'margin': '0 auto 0'
                }, 2500);
                $("#description").animate({
                    'font-size': '1.2em',
                    'height': '1%',
                    'margin': '5% 0 15%',
                    'padding': '10px',
                    'opacity': '1',
                    'text-align': 'left'
                }, 2500);
                $("#btnText").html('Hello Ashland JavaScript Meetup!');
                opacity = true;
            } else {
                $("#btnCtrl").clearQueue().stop().animate({
                    'margin': '15% auto 15%'
                }, 2500);
                $("#description").animate({
                    'font-size': '1.2em',
                    'height': '0',
                    'margin': '0',
                    'padding': '0',
                    'opacity': '0',
                    'text-align': 'left'
                }, 1000);
                $("#btnText").html('Ashland JavaScript Meetup');
                opacity = false;
            }
        }
    );
});