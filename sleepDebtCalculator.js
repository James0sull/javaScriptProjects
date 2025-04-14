// Function to get sleep hours for a day
const getSleepHours = (day) => {
  switch (day) {
    case 'monday':
      return 8;
    case 'tuesday':
      return 7;
    case 'wednesday':
      return 6;
    case 'thursday':
      return 7;
    case 'friday':
      return 8;
    case 'saturday':
      return 9;
    case 'sunday':
      return 8;
    default:
      return 0; // Return 0 for invalid day
  }
};

// Test the function
console.log(getSleepHours('monday')); // Output: 8
console.log(getSleepHours('friday')); // Output: 8
console.log(getSleepHours('invalidday')); // Output: 0

// Function to get total actual sleep hours
const getActualSleepHours = () => {
  return (
    getSleepHours('monday') +
    getSleepHours('tuesday') +
    getSleepHours('wednesday') +
    getSleepHours('thursday') +
    getSleepHours('friday') +
    getSleepHours('saturday') +
    getSleepHours('sunday')
  );
};

// Function to get ideal sleep hours
const getIdealSleepHours = (idealHoursPerNight = 8) => { // Added parameter with default value
  const idealHours = idealHoursPerNight;
  return idealHours * 7;
};

// Test the functions
console.log(getActualSleepHours()); // Output: 53
console.log(getIdealSleepHours()); // Output: 56
console.log(getIdealSleepHours(7)); //Output: 49

// Function to calculate and log sleep debt
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(); // Updated to use the parameter

  const difference = idealSleepHours - actualSleepHours;

  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep!');
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`You got ${difference * -1} more sleep than needed.`);
  } else {
    console.log(`You should get ${difference} more hours of rest.`);
  }
};

// Start the program
calculateSleepDebt();
