// business logic

var currentscore = 0;
var turn = 0;


var Roll = function () {
  this.total =  0;
  this.dice = 0;
}

Roll.prototype.addroll = function () {
  this.roll =  Math.floor(Math.random() * 6) + 1;
  if (this.roll === 1) {
    this.total = -1;
  }
  this.total += this.roll;
};

var player1 = 0;
var player2 = 0;

var rollDice =  new Roll();
var rollDice2 = new Roll();

// front end;
$(document).ready(function() {
  $('form#player1').submit(function(event){
    event.preventDefault();
    rollDice.addroll()
    $('#dice1').text(rollDice.roll);
    $('#score1').text(rollDice.total);
  });

  $('form#player2').submit(function(event) {
    event.preventDefault();
    rollDice2.addroll();
    $('#dice2').text(rollDice2.roll);
    $('#score2').text(rollDice2.total);

  });
});
