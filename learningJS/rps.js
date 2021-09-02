const getUserChoice = userInput => {
  userInput = userInput.toLowerCase()
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput
  } else {
    console.log('error: need input')
  }

} 

const getComputerChoice = () => {
  let random = Math.floor(Math.random() *3)
  switch(random) {
    case 0:
      return 'rock'
      break;
    case 1:
      return 'paper'
      break;
    case 2:
      return 'scissors'
      break;
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if(userChoice === computerChoice) {
    return 'Both win in a Tie!'
  } 
  if(userChoice === 'bomb') {
    return 'Human is the bomb!'
  }
  if(userChoice === 'rock') {
    if(computerChoice === 'paper') {
      return 'AI wins'
    } else {
      return 'Human win'
    }
  }
  if(userChoice === 'paper') {
    if(computerChoice === 'scissors') {
      return 'AI wins'
    } else {
      return 'Human win'
    }
  }
  if(userChoice === 'scissors') {
    if(computerChoice === 'rock') {
      return 'Human win'
    } else {
      return 'AI wins'
    }
  }
}

const playGame = () => {
  const userChoice = getUserChoice('bomb')
  const computerChoice = getComputerChoice()
  console.log('You choose: ' + userChoice);
  console.log('The computer choose:' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame()