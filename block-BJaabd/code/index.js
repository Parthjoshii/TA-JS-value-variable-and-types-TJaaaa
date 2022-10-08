// Condition
// Write your code below each problems:

/*
Write a program that asks the user his/her age and check for the following conditions :

- `if` the age is between 12-55 then print the message "You can participate in the marathon".
- `if` the age is between 4-11 then print the message " You are too young to participate in the marathon".
- `if` the age is less than 4 then print the message " Hey Kiddo! Can You Walk ?"
- `if` the age is greater than 55 then print the message " You are too old to participate in the marthon".
👇
*/
let userAge = Number(prompt(`What is your age?`))
if (userAge > 12 && userAge < 55) {
  alert(`You can participate in marathon`)
} else if (userAge > 4 && userAge < 11) {
  alert(`You are too young to participate in the marathon`)
} else if (userAge < 4) {
  alert(`Hey kiddo! Can you walk?`)
} else if (userAge > 55) {
  alert(`You are too old to participate in the marathon`)
}

// Loops
/*
Given a positive integer `n`. Print the word (hello) in format of heeeello (letter 'e' must be repeated `n` times). Take input from prompt and print the result in alert.

Example:
n = 1 => output: hello
n = 7 => output: heeeeeeello
👇
*/
// [Your code goes here]
let n = Number(prompt(`Enter a number`))
for (n = "e"; n <= 10; n ++){
  alert("hello")
}
/*
Program to calculate the sum of first n natural numbers(1,2,3...n are known as natural numbers). Prompt user to enter n (using `prompt`) then based on input provided calculate and show result in `alert`.
👇
*/
// [Your code goes here]
let num1 = Number(prompt(`Enter any number`));
let finalValue = "";

while (num1 >= n ) {
  num1 += finalValue ;
  finalValue --;
}
alert(finalValue);




/* Switch Statement

 🎖Using switch statement do the following

Take a number value from user and alert the message if it matches the conditions.
* [ ] ONE, if `number` is equal to 1.
* [ ] TWO, if `number` is equal to 2.
* [ ] THREE, if `number` is equal to 3.
* [ ] FOUR, if `number` is equal to 4.
* [ ] FIVE, if `number` is equal to 5.
* [ ] SIX, if `number` is equal to 6.
* [ ] SEVEN, if `number` is equal to 7.
* [ ] EIGHT, if `number` is equal to 8.
* [ ] NINE, if `number` is equal to 9.
* [ ] PLEASE TRY AGAIN, if  is none of the above.

*/
// [Your code goes here]
let num2 = Number(prompt(`enter a number between 1 & 9`))

switch (true) {
  case num2 === 1 :
    alert(`ONE`);
    break;
  case num2 === 2 :
    alert(`TWO`);
    break;
  case num2 === 3 :
    alert(`THREE`);
    break;
  case num2 === 4 :
    alert(`FOUR`);
    break;
  case num2 === 5 :
    alert(`FIVE`);
    break;
  case num2 === 6 :
    alert(`SIX`);
    break;
  case num2 === 7 :
    alert(`SEVEN`);
    break;
  case num2 === 8 :
    alert(`EIGHT`);
    break;
  case num2 === 9 :
    alert(`NINE`);
    break ;
  default :
  alert(`PLEASE TRY AGAIN`)
}

/*
🎖Using switch statement do the following

Take the value of `marks` (0-100) from user using `prompt` and `alert` the message (Your Grade is AA) as giver below.
* [ ] `AA` if `marks` is greater than 90.
* [ ] `AB` if `marks` is greater than 80 and less than or equal to 90
* [ ] `BB` if `marks` is greater than 70 and less than or equal to 80
* [ ] `BC` if `marks` is greater than 60 and less than or equal to 70
* [ ] `CC` if `marks` is greater than 50 and less than or equal to 60
* [ ] `CD` if `marks` is greater than 40 and less than or equal to 50
* [ ] `DD` if `marks` is greater than 30 and less than or equal to 40
* [ ] `FF` if `marks` is less than or equal to 30
*/
// [Your code goes here]

let marks = Number(prompt(`Enter your marks`))

switch (true) {
  case marks > 90 :
    alert(`Your Grade is AA`);
    break ;
  case marks > 80 && marks <= 90 :
    alert(`Your Grade is AB`);
    break;
  case marks > 70 && marks <= 80 :
    alert(`Your Grade is BB`);
    break;
  case marks > 60 && marks <=70 :
    alert(`Your Grade is BC`);
    break;
  case marks > 50 && marks <= 60 :
    alert(`Your Grade is CC`);
    break;
  case marks > 40 && marks <= 50 :
    alert(`Your Grade is CD`);
    break;
  case marks > 30 && marks <= 40 :
    alert(`Your Grade is DD`);
    break;
  case marks <= 30 :
    alert(`Your Grade is FF`);
}

/*
 🎖Write a JavaScript program that takes two `integers` from user (using prompt) and alerts the larger number.
*/
// [your code goes here]
let numA = +prompt(`Enter an integer`)
let numB = +prompt(`Enter another integer`)

switch (true) {
  case numA > numB :
    alert(numA);
    break;
  case numA < numB :
    alert(numB);
}

/*
🎖Write a JavaScript conditional statement to find the sign (+, -) of product of three numbers. Take those three numbers from user using `prompt`. Display an alert box with the specified sign.
*/
// [Your code goes here]

/* Calculator
 🎖Make a simple calculator with these functions. Using prompt, type conversion, if else statement. Use prompt to take the input from user i.e two numbers and an operation (Add, Sub, Mul, Div).

  ⛑ Rule
    * [ ] While substracting and dividing keep in mind the number one should be greater then number two. If not show alert saying `Number Two is larger then Number one`.
  ⚡️ Operations
    * [ ] Add
    * [ ] Sub
    * [ ] Mul
    * [ ] Div
*/

// [Your code goes here]
