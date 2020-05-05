//random CPU choice
var things = ['rock', 'paper', 'scissor'];
var compSelection = things[Math.floor(Math.random()*things.length)];

//popup player selection
let playerSelection = prompt("Let's play, rock, paper, or scissor?");

//make button selection = playerSelection

function buttontest() {
  document.getElementById("demo").innerHTML = "Hello World";
}

/*
function button_Selection(choice){
  var button = document.getElementById('button') .Value;
}

  let choice = button_Selection(playerSelection,compSelection);
  const button = document.getElementById('choice');
  button.innerHTML = choice;

*/
  //choice output to console
function player_choice(playerSelection) {
    console.log ("You chose " + playerSelection)
    }

function random_choice(compSelection) {
    console.log ("Computer chose " + compSelection)
    }


player_choice(playerSelection);
random_choice(compSelection);


//game output to consol
function play_round(playerSelection,compSelection) {
  if (playerSelection == compSelection) {
    console.log ("tie!")
  }
  if (playerSelection == "rock" && compSelection == "scissor") {
    console.log ("You win! Rock breaks scissors!")
  }
  if (playerSelection == "rock" && compSelection == "paper") {
    console.log ("You lose! Paper cover rock!")
  }
  if (playerSelection == "paper" && compSelection == "scissor") {
    console.log ("You lose! Scissor cuts paper!")
  }
  if (playerSelection == "paper" && compSelection == "rock") {
    console.log ("You win! Paper covers rock!")
  }
  if (playerSelection == "scissor" && compSelection == "rock") {
    console.log ("You lose! Rock breaks scissors!")
  }
  if (playerSelection == "scissor" && compSelection == "paper") {
    console.log ("You win! Scissor cuts paper!")
  }
}

var user;
function choose(choice){
    user = choice;
}

function test(click){
    alert("You chose " + user);
}        


//correct game result function
  function gameresult (playerSelection,compSelection)
  {
     if (playerSelection == compSelection) {
       return "Tie!";
      }
     if (playerSelection == "rock" && compSelection == "scissor") {
      return "You win! Rock breaks scissors!";
      }
     if (playerSelection == "rock" && compSelection == "paper") {
      return "You lose! Paper cover rock!";
        }
     if (playerSelection == "paper" && compSelection == "scissor") {
      return "You lose! Scissor cuts paper!";
          }
     if (playerSelection == "paper" && compSelection == "rock") {
      return "You win! Paper covers rock!";
          }
     if (playerSelection == "scissor" && compSelection == "rock") {
       return "You lose! Rock breaks scissors!";
          }
     if (playerSelection == "scissor" && compSelection == "paper") {
        return "You win! Scissor cuts paper!";
          }   
     else {
        return "Invalid submission!";
              } 
  }
  
console.log (gameresult(playerSelection,compSelection));
  
//write gameresult result to homepage
let result2 = gameresult(playerSelection,compSelection);
const game = document.getElementById('game');
game.innerHTML = result2;


