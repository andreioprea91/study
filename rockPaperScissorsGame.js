//simple game to understand functions in javascript



const getUserChoice= userInput => {
  userInput = userInput.toLowerCase();
  if(userInput==='bomb' || userInput==='rock' || userInput==='paper' || userInput==='scissors'){
    return userInput;
  }else{
      console.log('Error');
  }
    
};

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

function determineWinner(userChoice,computerChoice){
  if(userChoice==='bomb'){
    return 'you cheat'
  }
  if (userChoice===computerChoice){
    return 'its a tie ';
  }
  if(userChoice==='Rock'){
    if (computerChoice==='paper'){
      return 'The computer won';
    }else{
      return 'You won';
    }
    }
  if(userChoice==='paper'){
    if(computerChoice==='scissors'){
      return 'The computer won';
    }else {
      return 'You won';
    }
  }
  if (userChoice==='scissors'){
    if(computerChoice==='rock'){
      return 'The computer won'; 
    }else{
      return 'you won';
    }
  }
}

const playGame = () => {
  const userChoice = getUserChoice('paper');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw:' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};
playGame() ; 
