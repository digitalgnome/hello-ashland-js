$(document).ready(function() {
    var opacity = false;
    $("#btnIn").click(
        function() {
            if (opacity === false) {
                $("#btnText").html("Greetings!");
                $("#btnIn").animate({'margin-bottom': '1rem'}, 500);
                $("#description").animate({'height': '35px'}, 1000);
                $("#description").velocity({
                    'font-size': '180%',
                    'height': '100%',
                    'padding': '10px',
                    'opacity': '0.9'
                }, 3000);
                $("#description").animate({'margin-bottom': '0.5%'}, 500);
                $('h1').html('Hello Ashland JavaScript Meetup!');
                opacity = true;
            } else {
                $("#btnText").html("Click Me!");
                $("#description").velocity("reverse");
                $("#description").animate({
                    'font-size': '0.5rem',
                    'height': '0',
                    'margin-bottom': '0'
                }, 1000);
                $("#btnIn").animate({'margin-bottom': '0'}, 4500);
                $('h1').html('Ashland JavaScript Meetup');
                opacity = false;
            }
        }
    );
});