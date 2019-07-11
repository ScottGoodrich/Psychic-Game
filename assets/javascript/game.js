var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerguess =
    options[Math.floor(Math.random() * options.length)];
        console.log(computerguess);

var wins = 0;
var losses = 0;
var remGuesses = 10;

// Save list of userguesses here:
var allUserGuesses = [];
document.onkeypress = function(evt) {
    evt = evt || window.event;

    var charCode = typeof evt.which == "number" ? evt.which : evt.keyCode;

    if (charCode) {
        allUserGuesses.push(String.fromCharCode(charCode));
    }
};
// Resetting the game:
function resetGame() {
    remGuesses = 10;
    allUserGuesses = [];
    computerguess =
        options[Math.floor(Math.random() * options.length)];
        console.log(computerguess);
 }        
// Game script:
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
        // Refreshing the game data during play:
        var html = "<h1>Guess What Letter I'm Thinking Of</h1>" + 
        "<p>Wins: " + wins + "</p>" + 
        "<p>Losses: " + losses + "</p>" +
        "<p>Your Guesses So Far: " + allUserGuesses + "</p>" +
        "<p>Guesses Remaining: " + remGuesses + "</p>";
        document.querySelector("#game").innerHTML = html;

    }