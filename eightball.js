// playing with conditional statements in javascript


let userName='Andrei';
console.log(`USER:Salut, numele meu este ${userName}`)
console.log(`EIGHTBALL: Salut ${userName}, care este intrebarea? `)

const userQuestion='USER:Cum este vremea maine? ';
console.log(userQuestion);
const randomNumber= Math.floor(Math.random() * 8);
let eightBall='';
// using else if statements
/* if (randomNumber===0) {
  eightBall='EIGHTBALL:insorit';
} else if (randomNumber===1){
    eightBall='EIGHTBALL:innorat';
}else if (randomNumber===2){
    eightBall='EIGHTBALL:ploua';
  }else if (randomNumber===3){
    eightBall='EIGHTBALL:ninge';
}else if (randomNumber===4){
    eightBall='EIGHTBALL:bate vantul';
}else if(randomNumber===5){
    eightBall='EIGHTBALL:grindina';
}else if (randomNumber===6){
    eightBall='EIGHTBALL:frig';
}else if(randomNumber===7){
    eightBall='EIGHTBALL:vezi ce zice Busu';
} */

// using switch statement

switch (randomNumber) {
  case 0:
    eightBall = 'EIGHTBALL:insorit';
    break;
  case 1:
    eightBall = 'EIGHTBALL:innorat';
    break;
  case 2:
    eightBall = 'EIGHTBALL:ploua';
    break;
  case 3:
    eightBall = 'EIGHTBALL:ninge';
    break;
  case 4:
    eightBall = 'EIGHTBALL:bate vantul';
    break;
  case 5:
    eightBall = 'EIGHTBALL:grindina';
    break;
  case 6:
    eightBall = 'EIGHTBALL:frig';
    break;
  case 7:
    eightBall = 'EIGHTBALL:vezi ce zice Busu';
    break;
}
console.log(eightBall);
    
    
    
    
    
    
    




