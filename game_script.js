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

var human_score = 0;
var cpu_score = 0;
var win = 5;


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
    human_score ++;
    //end_game(human_score,cpu_score);
    document.getElementById('human_score').innerHTML = human_score;
    } 
    
  if (user == "rock" && compSelection == "paper") {
    console.log ("You lose! Paper covers rock!");
    document.getElementById('choices').innerHTML = "Computer chose " + compSelection + ", you chose " + user;
    document.getElementById('game').innerHTML = "You lose! Paper covers rock!";
    cpu_score ++;
    //end_game(human_score,cpu_score);
    document.getElementById('cpu_score').innerHTML = cpu_score;
  }

  if (user == "paper" && compSelection == "scissor") {
    console.log ("You lose! Scissor cuts paper!");
    document.getElementById('choices').innerHTML = "Computer chose " + compSelection + ", you chose " + user;
    document.getElementById('game').innerHTML = "You lose! Scissor cuts paper!";
    cpu_score ++;
    //end_game(human_score,cpu_score);
    document.getElementById('cpu_score').innerHTML = cpu_score;
  }

  if (user == "paper" && compSelection == "rock") {
    console.log ("You win! Paper covers rock!");
    document.getElementById('choices').innerHTML = "Computer chose " + compSelection + ", you chose " + user;
    document.getElementById('game').innerHTML = "You win! Paper covers rock!";
    human_score ++;
    //end_game(human_score,cpu_score);
    document.getElementById('human_score').innerHTML = human_score;
  }

  if (user == "scissor" && compSelection == "rock") {
    console.log ("You lose! Rock breaks scissors!");
    document.getElementById('choices').innerHTML = "Computer chose " + compSelection + ", you chose " + user;
    document.getElementById('game').innerHTML = "You lose! Rock breaks scissors!";
    cpu_score ++;
    //end_game(human_score,cpu_score);
    document.getElementById('cpu_score').innerHTML = cpu_score;
  }

  if (user == "scissor" && compSelection == "paper") {
    console.log ("You win! Scissor cuts paper!");
    document.getElementById('choices').innerHTML = "Computer chose " + compSelection + ", you chose " + user;
    document.getElementById('game').innerHTML = "You win! Scissor cuts paper!";
    human_score ++;
    //end_game(human_score,cpu_score);
    document.getElementById('human_score').innerHTML = human_score;
  }
}

// what I need is when cpu_score or human_score hits 10, win or lose flashes somehwere and scores reset
//I need a fucntion or something that will happen given somehting else happening (cpu_score or human_score hits 10)
//I need how to make shit happen when something else happens
// an end game function!


function end_game(human_score,cpu_score) {
  if (human_score == win) {
    alert("YOU WIN, CONGRATS!");
    document.location.reload();
    }
  if (cpu_score == win) {
    alert("YOU LOSE, YOU SUCK!");
    document.location.reload();
    }
  } 

