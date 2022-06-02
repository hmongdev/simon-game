var buttonColors = ['red', 'blue', 'green', 'yellow']
var gamePattern = []
var userClickedPattern = []
var level = 0;
var started = false;

//detect keboard press to begin game
$(document).on('touchstart', function () {
    if (!started) {
        //displays level #
        $('#level-title').text(`Level ${level}`);
        nextSequence();
        //start game
        started = true;
    }
});


//check which button was pressed //handler function
$('.btn').click(function () {
    //stores id of button that was clicked
    var userChosenColor = $(this).attr('id');
    //pushes color into array
    userClickedPattern.push(userChosenColor);
    console.log(`User color is: ${userChosenColor}`);

    //check what the array contains
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
});

//check userChosenColor === randomChosenColor
function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        $('#message').text('Correct!')
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {
        $('#message').text('Better Luck Next Time!');
        //playSound if user gets answer wrong
        playSound('wrong');

        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        //message if user got answer wrong
        $("#level-title").text("Game Over, Press Any Key to Restart");

        //restarts the game loop
        startOver();
    }
}

//create random color, animate, and play sound
function nextSequence() {
    // once nextSequence() is triggered, reset the userClickedPattern to an empty array ready for the next level.
    userClickedPattern = [];
    //update level
    level++;
    $('#level-title').text(`Level ${level}`);

    //select random color, push it into gamePattern
    var randomNumber = ~~(Math.random() * 4); // 0-3
    var randomChosenColor = buttonColors[randomNumber]
    gamePattern.push(randomChosenColor);
    console.log(`Random color is: ${randomChosenColor}`);

    //animate flash based on random color
    $(`#${randomChosenColor}`).fadeIn(100).fadeOut(100).fadeIn(100);

    //play sound based on random color
    playSound(randomChosenColor);
}


//plays sounds for colors
function playSound(name) {
    //play sound based on color name  
    var audio = new Audio(`sounds/${name}.mp3`);
    audio.play();
}

//animates when button is pressed
function animatePress(currentColor) {
    //adds pressed class
    $(`#${currentColor}`).addClass('pressed');
    //removes pressed class AFTER delay
    setTimeout(function () {
        $(`#${currentColor}`).removeClass('pressed');
    }, 100);
}
//reset values of level, gamePattern, and started variables
function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}