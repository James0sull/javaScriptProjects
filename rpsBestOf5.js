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

const playGame = async () => {
  const userChoice = await getUserChoice();
  if (userChoice === null) {
    return null;
  }
  const computerChoice = getComputerChoice();
  console.log('User choice: ' + userChoice);
  console.log('Computer choice: ' + computerChoice);
  const result = determineWinner(userChoice, computerChoice);
  console.log(result);
  return result;
};

const playBestOfFive = async () => {
  let userWins = 0;
  let computerWins = 0;
  let ties = 0;

  for (let i = 0; i < 5; i++) {
    console.log(`\n--- Round ${i + 1} ---`);
    const result = await playGame();

    if (result === 'User won!') {
      userWins++;
    } else if (result === 'Computer won!') {
      computerWins++;
    } else if (result === 'The game is a tie!') {
      ties++;
    } else if (result === null) {
        return; //exit if user input is invalid.
    }
  }

  console.log('\n--- Game Results ---');
  console.log(`User wins: ${userWins}`);
  console.log(`Computer wins: ${computerWins}`);
  console.log(`Ties: ${ties}`);

  if (userWins > computerWins) {
    console.log('User wins the best of 5!');
  } else if (computerWins > userWins) {
    console.log('Computer wins the best of 5!');
  } else {
    console.log('The best of 5 is a tie!');
  }
};

playBestOfFive();