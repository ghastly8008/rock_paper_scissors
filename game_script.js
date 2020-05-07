//inital random CPU choice function 

var things = ['rock', 'paper', 'scissor'];
function comp_choice(things){
    return things[Math.floor(Math.random()*things.length)];
}

var compSelection;

function set_cpu_choice(things){
    compSelection = comp_choice(things);
}

function set_compSelection(things){
compSelection = comp_choice(things);}

var compSelection = comp_choice(things)


//Check choices on console


function print_cpu_choice(compSelection) {
  console.log ("Computer chose " + compSelection)
  }

function print_user_choice(user) {
  console.log ("Computer chose " + user)
  }

function print_choices(user, compSelection){
  console.log("Computer chose " + compSelection + ", user chose " + user);
  }

//user button variable change
var user;
function choose(choice){
    user = choice;
}

function test(click){
    console.log ("You chose " + user);
}      

//push player choices to console

//game with button choice 

function play_round(user,compSelection) {

  if (user == compSelection) {
    console.log ("tie!");
    document.getElementById('choices').innerHTML = "Computer chose " + compSelection + ", you chose " + user;
    document.getElementById('game').innerHTML = "Tie!";
  }
  if (user == "rock" && compSelection == "scissor") {
    console.log ("You win! Rock breaks scissors!");
    document.getElementById('choices').innerHTML = "Computer chose " + compSelection + ", you chose " + user;
    document.getElementById('game').innerHTML = "You win! Rock breaks scissors!";
  }
  if (user == "rock" && compSelection == "paper") {
    console.log ("You lose! Paper covers rock!");
    document.getElementById('choices').innerHTML = "Computer chose " + compSelection + ", you chose " + user;
    document.getElementById('game').innerHTML = "You lose! Paper covers rock!";
  }
  if (user == "paper" && compSelection == "scissor") {
    console.log ("You lose! Scissor cuts paper!");
    document.getElementById('choices').innerHTML = "Computer chose " + compSelection + ", you chose " + user;
    document.getElementById('game').innerHTML = "You lose! Scissor cuts paper!";
  }
  if (user == "paper" && compSelection == "rock") {
    console.log ("You win! Paper covers rock!");
    document.getElementById('choices').innerHTML = "Computer chose " + compSelection + ", you chose " + user;
    document.getElementById('game').innerHTML = "You win! Paper covers rock!";
  }
  if (user == "scissor" && compSelection == "rock") {
    console.log ("You lose! Rock breaks scissors!");
    document.getElementById('choices').innerHTML = "Computer chose " + compSelection + ", you chose " + user;
    document.getElementById('game').innerHTML = "You lose! Rock breaks scissors!";
  }
  if (user == "scissor" && compSelection == "paper") {
    console.log ("You win! Scissor cuts paper!");
    document.getElementById('choices').innerHTML = "Computer chose " + compSelection + ", you chose " + user;
    document.getElementById('game').innerHTML = "You win! Scissor cuts paper!";
  }
}

//show result on homepage

//function print_result(){
  //document.getElementById("game_result").innerHTML = play_round(user,compSelection);
//}
/*
function game_result(user,compSelection){
  let result = play_round(user,compSelection);
  const game = document.getElementById('game');
  game.innerHTML = result;
}


var game_result;
function define_game_result(user,compSelection){
    game_result = play_round(user,compSelection);
}

function print_game_result(game_result){
  console.log(game_result);
  }
  */

