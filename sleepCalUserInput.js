const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getSleepHours = (day, hours) => {
  return hours[day] || 0;
};

const getActualSleepHours = (hours) => {
  return (
    getSleepHours('monday', hours) +
    getSleepHours('tuesday', hours) +
    getSleepHours('wednesday', hours) +
    getSleepHours('thursday', hours) +
    getSleepHours('friday', hours) +
    getSleepHours('saturday', hours) +
    getSleepHours('sunday', hours)
  );
};

const getIdealSleepHours = (idealHoursPerNight = 8) => {
  const idealHours = idealHoursPerNight;
  return idealHours * 7;
};

const calculateSleepDebt = (actualSleepHours, idealSleepHours) => {
  const difference = idealSleepHours - actualSleepHours;

  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep!');
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`You got ${difference * -1} more sleep than needed.`);
  } else {
    console.log(`You should get ${difference} more hours of rest.`);
  }
};

const getSleepHoursInput = () => {
  return new Promise((resolve) => {
    const dailyHours = {};
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

    const askForHours = (dayIndex) => {
      if (dayIndex >= days.length) {
        readline.close();
        resolve(dailyHours);
        return;
      }

      const day = days[dayIndex];
      readline.question(`Enter the number of hours you slept on ${day}: `, (hours) => {
        const numHours = parseInt(hours);
        if (isNaN(numHours)) {
          console.log('Invalid input. Please enter a number.');
          dailyHours[day] = 0;
        } else {
          dailyHours[day] = numHours;
        }
        askForHours(dayIndex + 1);
      });
    };
    askForHours(0);
  });
};

const main = async () => {
  const actualSleepHours = await getSleepHoursInput();
  const idealSleepHours = getIdealSleepHours();
  calculateSleepDebt(getActualSleepHours(actualSleepHours), idealSleepHours);

    const getActualSleepHoursWithoutCallingGetSleepHours = (hours) => {
    const sum = Object.values(hours).reduce((acc, val) => acc + val, 0);
    return sum;
  }
  console.log(getActualSleepHoursWithoutCallingGetSleepHours(actualSleepHours));
};

main();
