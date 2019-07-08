var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerguess = options[Math.floor(Math.random() * options.length)];
        console.log(computerguess);

var wins = 0;
var losses = 0;
var remGuesses = 10;

// Save list of userguesses here:
var allUserguesses = [];
document.onkeypress = function(evt) {
    evt = evt || window.event;

    var charCode = typeof evt.which == "number" ? evt.which : evt.keyCode;

    if (charCode) {
        allUserguesses.push(String.fromCharCode(charCode));
    }
};

function resetGame() {
    console.log(computerguess);
    remGuesses = 10;
    allUserguesses = [];
 }        

document.onkeyup = function () {
    var userguess = String.fromCharCode(event.keyCode).toLowerCase();

    console.log(userguess);

        if (userguess === computerguess) {
                wins++;
                alert("Correct!");
                resetGame();
        }
        else {
            remGuesses--;
            alert("Try again!");
        }
        if (remGuesses < 1) {
            losses++;
            alert("Game Over!");
            resetGame();
        }

        var html = "<h1>Guess What Letter I'm Thinking Of</h1>" + 
        "<p>Wins: " + wins + "</p>" + 
        "<p>Losses: " + losses + "</p>" +
        "<p>Your Guesses So Far: " + allUserguesses + "</p>" +
        "<p>Guesses Remaining: " + remGuesses + "</p>";
        document.querySelector("#game").innerHTML = html;

    }