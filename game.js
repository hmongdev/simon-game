var buttonColors = ['red', 'blue', 'green', 'yellow']
var gamePattern = []
var userClickedPattern = []

//check which button was pressed //handler function
$('.btn').click(function () {
    //stores id of button that was clicked
    var userChosenColor = $(this).attr('id');
    //pushes id into array
    userClickedPattern.push(userChosenColor);
    //check what the array contains
    console.log(userClickedPattern);
    playSound(userChosenColor);
});

//create random color, animate, and play sound
function nextSequence() {
    //select random color, push it into gamePattern
    var randomNumber = ~~(Math.random() * 4); // 0-3
    var randomChosenColor = buttonColors[randomNumber]
    gamePattern.push(randomChosenColor);
    //animate flash based on random color
    $(`#${randomChosenColor}`).fadeIn(100).fadeOut(100).fadeIn(100);
    //play sound based on random color
    playSound(randomChosenColor);
}


//plays sounds for colors
function playSound(color) {
    //play sound based on color  
    var audio = new Audio(`sounds/${color}.mp3`);
    audio.play();
}