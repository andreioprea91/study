const rock= document.getElementById("rock");
const paper= document.getElementById("paper");
const scissors= document.getElementById("scissors");
const userScoreBoard=document.getElementById('userscore');
const computerScoreBoard=document.getElementById('computerscore');
const result=document.getElementById('result');
let userScore=0;
let computerScore=0;

function getComputerChoice() {
 let randomNumber= Math.floor(Math.random()*3);
  switch (randomNumber){
    case 0:
    return 'rock';
      break;
      case 1:
    return 'paper';
      break;
      case 2:
    return 'scissors';
      break;
  }
}

function win(userChoice,computerChoice){
  userScore++;
  userScoreBoard.innerHTML=userScore;
result.innerHTML=` ${userChoice} beats ${computerChoice}. You WIN!`;
}

function lose(userChoice,computerChoice){
  computerScore++;
  computerScoreBoard.innerHTML=computerScore;
  result.innerHTML=` ${userChoice} beats ${computerChoice}. You LOOSE!`;
}

function draw(userChoice,computerChoice){
  result.innerHTML=` ${userChoice} equal ${computerChoice}. DRAW!`;
}

function determineWinner(userChoice){
  const computerChoice =getComputerChoice();
   if (userChoice===computerChoice){
      return draw(userChoice,computerChoice);
    }
   if(userChoice==='rock'){
     if (computerChoice==='paper'){
        return lose(userChoice,computerChoice);
      }else{
        return win(userChoice,computerChoice);
      }
    }
   if(userChoice==='paper'){
     if(computerChoice==='scissors'){
        return lose(userChoice,computerChoice);
      }else {
        return win(userChoice,computerChoice);
      }
    }
    if (userChoice==='scissors'){
     if(computerChoice==='rock'){
        return lose(userChoice,computerChoice);
      }else{
        return win(userChoice,computerChoice);
      }
     }
 }

rock.addEventListener('click', function(){
  return determineWinner('rock');
})

paper.addEventListener('click', function(){
  return determineWinner('paper');
})

scissors.addEventListener('click', function(){
  return determineWinner('scissors');
})
