$(document).ready(function() {
    var opacity = false;
    $("#btnIn").click(
        function() {
            if (opacity === false) {
                $("#btnCtrl").velocity({
                    'margin': '0 auto 0'
                }, 2500);
                $("#description").velocity({
                    'font-size': '1.2em',
                    'height': '1%',
                    'margin': '5% 0 15%',
                    'padding': '10px',
                    'opacity': '0.9',
                    'text-align': 'left'
                }, 1000);
                $("#btnText").html('Hello Ashland JavaScript Meetup!');
                opacity = true;
            } else {
                $("#btnCtrl").velocity("reverse");
                $("#description").velocity("reverse");
                $("#btnText").html('Ashland JavaScript Meetup');
                opacity = false;
            }
        }
    );
});