//new array
var buttonColours = ["red", "blue", "green", "yellow"];
//array for gamememory
var gamePattern = [];
//function for random number genirator.
function nextSequene(){

  var randomNumber = Math.floor(Math.random()*4);

  randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);
}
