const kelvin = 0;
// This code is a constant meaning it will stay the same value

const celsius = kelvin - 273;
// Convert Kelvin to Celsius by subtracting 273

let fahrenheit = celsius * (9/5) + 32;
// "Let" at the start allows us to change the code if we need to late in the program

fahrenheit = Math.floor(fahrenheit);
// When you convert from Celsius to Fahrenheit, you often get a decimal number. Use the .floor() method from the built-in Math object to round down the Fahrenheit temperature. Save the result to the fahrenheit variable.

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

let newton = celsius * (33/100);
// Convert Celsius to Newton scale

newton = Math.floor(newton);

console.log(`the temperature is ${newton} degrees Newton.`);
