
const rock= document.getElementById("rock");
const paper= document.getElementById("paper");
const scissors= document.getElementById("scissors");


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

function win(){
  console.log("win")
}

function lose(){
  console.log("lose")
}

function draw(){
  console.log("draw")
}

function determineWinner(userChoice){
  const computerChoice =getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw:' + computerChoice);
   if (userChoice===computerChoice){
      return draw();
    }
   if(userChoice==='rock'){
     if (computerChoice==='paper'){
        return lose();
      }else{
        return win();
      }
      }
   if(userChoice==='paper'){
     if(computerChoice==='scissors'){
        return lose();
      }else {
        return win();
      }
    }
    if (userChoice==='scissors'){
     if(computerChoice==='rock'){
        return lose();
      }else{
        return win();
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
