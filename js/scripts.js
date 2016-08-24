function roll() {
    return Math.floor(Math.random() * 6) + 1;
}

function update() {
    var die0 = document.getElementById("die0"),
        die1 = document.getElementById("die1"),
        score = document.getElementById("score"),
        d0,
        d1;

        d0 = roll();
        d1 = roll();
        die0.innerHTML = d0;
        die1.innerHTML = d1;

        if (d0 !== 1 && d1 !== 1) {
            score.innerHTML = parseInt(score.innerHTML, 10) + d0 + d1;
        }

        if (d0 !== 1 && d1 !== 1 && d0 === d1) {
            score.innerHTML = parseInt(score.innerHTML, 10) + d0 + d1;
        }

        if (d0 === 1 || d1 === 1) {
            score.innerHTML = 0;
        }
}

 $(document).ready(function() {
   $('form#firstD').submit(function(event) {
     event.preventDefault();
   });
   $('form#secondD').submit(function(event) {
     event.preventDefault();
});
