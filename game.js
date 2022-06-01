var buttonColors = ['red', 'blue', 'green', 'yellow']
var gamePattern = []
var userClickedPattern = []

//check which button was pressed
$('.btn').click(function() {
    var userChosenColor = $(this).attr('id');
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
});

//create random color, animate, and play sound
function nextSequence() {
    //select random color, push it into gamePattern
    var randomNumber = ~~(Math.random() * 4); // 0-3
    var randomChosenColor = buttonColors[randomNumber]
    gamePattern.push(randomChosenColor);
    //print the gamePattern
    console.log(gamePattern);
    //animate flash based on random color
    $(`#${randomChosenColor}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    //play sound based on random color
    var audio = new Audio(`sounds/${randomChosenColor}mp3`);
    audio.play();
}