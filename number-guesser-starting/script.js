let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// generateTarget() function
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

// getAbsoluteDistance() function
const getAbsoluteDistance = (num1, num2) => {
  return Math.abs(num1 - num2);
};

// compareGuesses() function
const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
  
  const humanDifference = getAbsoluteDistance(humanGuess, targetNumber);
  const computerDifference = getAbsoluteDistance(computerGuess, targetNumber);

  if (humanDifference <= computerDifference) {
    return true; 
  } else {
    return false;
  }
};

// updateScore() function
const updateScore = (winner) => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
};


const advanceRound = () => {
  currentRoundNumber++;
};

// Test the functions
// console.log(generateTarget());
// console.log(compareGuesses(5, 3, 7));
// updateScore('human');
// console.log(humanScore);
// advanceRound();
// console.log(currentRoundNumber);

// Function to validate user guess
const validateHumanGuess = (humanGuess) => {
  if (humanGuess < 0 || humanGuess > 9) {
    alert('Your number is out of range. Please enter a number between 0 and 9.');
    return false; // Indicate invalid guess
  }
  return true; // Indicate valid guess
};

function playRound(humanGuess) {

    if (!validateHumanGuess(humanGuess)) {
        return; // Stop the round if the guess is invalid
    }
    const targetValue = generateTarget();
    const computerGuess = generateTarget();

    console.log(`Human Guess: ${humanGuess}`);
    console.log(`Computer Guess: ${computerGuess}`);
    console.log(`Target Number: ${targetValue}`);

    const humanWins = compareGuesses(humanGuess, computerGuess, targetValue);

    if (humanWins) {
        updateScore('human');
        console.log('Human Wins');
    } else {
        updateScore('computer');
        console.log('Computer Wins');
    }

    advanceRound();
    console.log(`Round Number: ${currentRoundNumber}`);
    console.log(`Human Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
}

//playRound(5);