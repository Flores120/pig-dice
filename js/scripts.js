// business logic
var score = 0;
var totalscore = 0;
var totalscore2 = 0;
var turn = 0;

var Roll = function () {
  this.total =  0;
  this.dice = 0;
  this.roll = 0;
}

Roll.prototype.addroll = function () {
  this.roll =  Math.floor(Math.random() * 6) + 1;
    if (this.roll === 1) {
      this.total = 0;
      alert('Next Player');
  } if (this.roll !== 1){
    this.total += this.roll;
}
};

var rollDice =  new Roll();
var rollDice2 = new Roll();


// front end;
// player1
$(document).ready(function() {
  $('form#player1').submit(function(event){
    event.preventDefault();
    if(turn === 0)
    {
      rollDice.addroll()
    }
    $('#dice1').append("  " + rollDice.roll + "  ");
    $('#cScore1').text(rollDice.total);
  });

// player2
  $('form#player2').submit(function(event) {
    event.preventDefault();
    if (turn === 0){
    rollDice2.addroll();
  }
    $('#dice2').append("  " + rollDice2.roll + "  ");
    $('#cScore2').text(rollDice2.total);
  });
  // hold button
    $('form#hold1').submit(function(event){
      event.preventDefault();
      totalscore += rollDice.total;
      rollDice.total = 0;
      $('#totalScore1').text(totalscore);
      $('#totalScore1').text();
      alert("Player 2's turn");
      if (totalscore >= 50){
        $(".winner1").show();
      }
    });
    $('form#hold2').submit(function(event){
      event.preventDefault();
      totalscore2 += rollDice2.total;
      rollDice2.total = 0;
      $('#totalScore2').text(totalscore2);
      $('#totalScore2').text();
      alert("Player 1's turn");
      if (totalscore2 >= 50){
        $(".winner2").show();
      }
    });
});
