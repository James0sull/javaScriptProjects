const myAge = 25;
// This var will not change it will stay as is so if it needs to be changed you need to edit it on this line. When use this var any time in the program it equals 25

let earlyYears = 2;
// This var will and can be changed at any time durging the program without returning to this line as it is put as "let"

earlyYears *= 10.5;

let laterYears = myAge - 2;
// After knowing the fist 2 years we need the later years which can be changed later in the program 

laterYears *= 4;
// now we have change the var laterYears to be multiplied by 4 without going back up to the origanal line of code

console.log(earlyYears)
console.log(laterYears)

let myAgeInDogYears = earlyYears + laterYears;
// We went to found out our age in dog years so we need to early and later years together.

let myName = 'James Kelly'.toLowerCase();
// .toLowerCase will put all letters as lower case 

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);












