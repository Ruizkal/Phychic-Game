var wins =0;
var losses =0;
var guessesleft = 9;
var guessesSoFar = [];
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  
 document.onkeyup = function(event) {
 	var userGuess = String.fromCharCode(event.keyCode).tolowerCase();
 	var computerGuess =computerChoices[Math.random()*computerChoices.length)];
    guessesSoFar.push(userGuess);

    if (userGuess == computerGuess) {
    	wins++;
    	alert('Wow! Get out my processor');
    	guessesleft = 9;
    	guessesSoFar.length =0;

     
 }
      else if (guessesleft == 0){
      	losses++;
      	alert('Take the L and Try again? This is really fun!')
      	guessesleft =9;
      	guessesSoFar.length = 0;
      }
      else if (userGuess !== computerGuess){
      	guessesleft--;
      }
       }
        var html = "<h1>The Psychic Game</h1>" + 
        "<p>Guess what letter I'm thinking of!</p>" +
        "<p>Total Wins: " + 
        wins + 
        "</p>" +
        "<p>Total Losses: " + 
        losses + 
        "</p>" +
        "<p>Guesses Left: " + 
        guessesLeft + 
        "</p>" +
        "<p>Your Guesses so far: " +
        guessesSoFar +
        "</p>"
        ;
        document.querySelector('#game').innerHTML = html;
    }
    
    }