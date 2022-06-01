var buttonColors = ['red', 'blue', 'green', 'yellow']
var gamePattern = []

function nextSequence() {
    var randomNumber = ~~(Math.random() * 4); // 0-3
    var randomChosenColor = buttonColors[randomNumber]
    gamePattern.push(randomChosenColor);
    //animate flash based on randomChosenColor
    $(`#${randomChosenColor}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    //play sound based on buttonColors
    var audio = new Audio(`sounds/${randomChosenColor}.mp3`);
    audio.play();
}