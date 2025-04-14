let userName = 'James';
userName ? console.log(`'Hello, ${userName}'`) : 
console.log('Hello');

let userQuestion = 'Is it going to rain ?';
console.log(`You asked: 
${userQuestion}?`);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch (randomNumber) {
  case 0:
    eigthtBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is look that so what can I do.';
    break;
  case 2:
    eightBall = 'It is not that clear more hazy so may just try saying a prayer again for the world.';
    break;
  case 3:
    eightBall = 'That cannot be predicted at this time but I hope it goes the way you wish for.';
    break;
  case 4:
    eightBall = 'Do not count on it, just look how different the world is today compared to a few months ago.';
    break;
  case 5:
    eightBall = 'My sources say no and they are great sources, realy great source they do not get thing wrong.';
    break;
  case 6:
    eightBall = 'Outlook not so good well it depends on what way you look at.';
    break;
  case 7:
    eightBall = 'Signs point to yes but they are just signs along the road.';
    break;
  case 8:
    eightBall = 'Well I can not tell the future, who do you think I am God.';
    break;
} 
console.log(`The eight ball has answered for you:

${eightBall}`);






















