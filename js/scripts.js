// business logic
var currentscore = 0;
var turn = 0;

function Roll() {
  // debugger;
  this.roll =  Math.floor(Math.random() * 6) + 1;


}

function Player() {
  this.totalScore = 0;
}

var playerOne = new Player();
var playerTwo = new Player();

var scoreChecker = function() {
  var rollDice =  new Roll();
  var score = currentScore + new Roll();

  if(rollDice === 1)
  {
    if(turn === 0)
    {
      turn = 1;
      currentScore = 0;
    }
    else
    {
      turn = 0;
      currentScore = 0;
    }
  }
  else
  {
    if(turn === 0)
    {
      currentscore += rollDice;
    }
    else
    {
      turn = 0;
    }
  }
}



// front end
$(document).ready(function() {
  $('form#player1').submit(function(event){
    var rollDice =  new Roll();
    // var score1 = new Roll(score)
    $('#dice1').text(rollDice.roll);
    $('#score1').text(score1.score);
    event.preventDefault();
  });
  $('form#player2').submit(function(event) {
    var rollDice2 =  new Roll();
  $('#dice2').text(rollDice2.roll);
  event.preventDefault();
  });
});
