let raceNumber = Math.floor(Math.random() * 1000);
let early = true;
let age = 18;

// Check if the runner is an early adult
if (early && age > 18) {
  raceNumber += 1000;
  console.log(`Early adults run at 9:30 am. Your race number is ${raceNumber}.`);
} else if (age > 18) {
  console.log(`Late adults run at 11:00 am. Your race number is ${raceNumber}.`);
} else if (age < 18) {
  console.log(`Youth registrants run at 12:30 pm. Your race number is ${raceNumber}.`);
} else {
  console.log('Please see the registration desk.');
}

// testing the random number
console.log(`My race number is ${raceNumber}`);