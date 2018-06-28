$(document).ready(function () {
    var count = 0;
    var time = 0;
    var results = null;
    var timer;

    var jokes = [
        "You're so slow, the bird grew a beard while racing... go look..., GOTCHA!!! didn't I?",
        "You're so slow, we had to measure your 10 second race with a calendar",
        "You're so slow, you came in 2nd in a 1 man race",
        "You're so slow, you have to chase the zombies",
        "You're slower than a slow cooker",
        "You're slower than a 1 legged dog on tranquilizers",
        "You're slower than Daenerys Targaryen on her way to Westeros",
        "You gotta get those fingers to the gym asap my nigga! You too slow!",
        "You've got some supreme slownest in those fingers son! You gotta do some finger cardio!",
        "You've got limitted edition slow fingers! go claim your Ginnes record!",
    ]


    function initialize() {
        time = setInterval(game, 100);
    }

    function stop() {
        clearInterval(time);
    }

    function game() {
        if (count >= 1000 && count < 2000) {
            $('.rsg').html('READY');
        } else if (count >= 2000 && count < 3000) {
            $('.rsg').html('SET');
        } else if (count >= 3000 && count < 4000) {
            $('.rsg').html('GO');
        }
        else {
            $('.rsg').html('')
        }
        if (time >= 1300 && !result) {
            time += 100;
            $('.time').html(time / 1000)
        }
        count += 100;
    }

    function stop() {
        clearInterval(time)
    }
    function reset() {
        count = 0;
        time = 0;
        result = null;

        console.log('reseting');

        $('.result').addClass('hide').html('');
        $('.bird').css({
            'top': '50%',
            'left': 0
        })
        $('.time').html(0);
        initialize();
    }

    $(window).keydown(function (e) {
        let position = $('.bird').offset();
        let target = $('.crossing-line').offset();

        if (count > 3000) {
            if (position.left + 20 > target.left) {
                if (time >= 10000 && !result) {
                    result = 'lost';
                    stop();
                    showResult('YOU LOSE!');
                }
                if (time < 10000 && !result) {
                    result = 'won';
                    stop();
                    showResult('YOU WIN!');
                }
            }
            if (e.keycode === 37) {
                if (position.left > 0) {
                    $('.bird').css('left', math.max(position.left - 50, 0))
                }
            }
            if (e.keycode === 38) {
                if (position.left > 0) {
                    $('.bird').css('top', math.max(position.left - 50, 0))
                }
            }
            if (e.keycode === 39) {
                if (position.left + $('.bird').width() < window.innerWidth) {
                    $('.bird').css('left', math.min(position.left + 50,
                        window.innerWidth - $('.bird').width()));
                }
            }
            if (e.keycode === 40) {
                if (position.top + $('.bird').height() < window.innerHeight) {
                    $('.bird').css('top', math.min(position.top + 50,
                        window.innerWidth - $('.bird').width()));
                }
            }


        }
    });
    initialize();
})
