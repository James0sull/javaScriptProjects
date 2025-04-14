const getUserChoice = () => {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    readline.question(
      'Enter 1 for rock, 2 for paper, or 3 for scissors: ',
      (choice) => {
        let userInput;
        switch (choice) {
          case '1':
            userInput = 'rock';
            break;
          case '2':
            userInput = 'paper';
            break;
          case '3':
            userInput = 'scissors';
            break;
			
		  case '4':
			userInput = 'bomb';
			break;
			
          default:
            console.log('Invalid choice. Please enter 1, 2, or 3.');
            userInput = null;
        }
        readline.close();
        resolve(userInput);
      }
    );
  });
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb') {
    return 'User won with the bomb cheat!';
  }

  if (userChoice === computerChoice) {
    return 'The game is a tie!';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer won!';
    } else {
      return 'User won!';
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer won!';
    } else {
      return 'User won!';
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer won!';
    } else {
      return 'User won!';
    }
  }
};

const playGame = async () => { //make playGame async
  const userChoice = await getUserChoice(); //await getUserChoice to resolve the promise.
  if (userChoice === null) {
      return; //exit the function if the user input is invalid.
  }
  const computerChoice = getComputerChoice();
  console.log('User choice: ' + userChoice);
  console.log('Computer choice: ' + computerChoice);
  if (userChoice) {
    console.log(determineWinner(userChoice, computerChoice));
  }
};

playGame();