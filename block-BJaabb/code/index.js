/* 1. Do the following

1. Declare a variable `user` and take the name using `prompt`. Display the value stored in `user` using `alert`.
2. Now copy the value of `user` into a new variable named `userName`. Log the value of both `user` and `userName` using `console.log`.
3. Declare variable `age` and `isLearning` with value `22` and `true` in the same line. hint: declaring multiplemvariable in one line.
4. Now change the value of `user` to `John` and log the value of both `user` and `userName`.
*/
let user = prompt(`Enter your name`)
alert(`Your Name is ${user}`)
 let userName = user
 console.log (user)
 console.log (userName)
let age = Number(22), isLearning = true
let userA = "John"
userName = userA
console.log(userA, userName)
/* 2.
Use `prompt` to take two numbers from user and store it in variable `numA` and `numB`. Create a third variable called `sum`, using `+` operator add numA and numB , store it in varible `sum` and using alert display `sum` in browser.
*/
let numA = Number(prompt(`Enter a Number`))
let numB = Number(prompt(`Enter second number`))
let sum = (numA + numB)
alert(`The sum of both numbers is ${sum}`)
// Loops

// 3. Complete the following code to make the output be 0 2 4 6 8 10?

for (let j = 0; j <= 10; j = j + 1) {
    if(j % 2 == 0) {
        console.log(j);
    }
}


// 4. Print the odd numbers from 9 to 1 (both inclusive) using a for loop.
for (let a = 9; a >= 1; a = a - 1) {
    if(a % 2 !== 0) {
        console.log(a);
    }
}

// 5. Concat all the numbers from 5 to 0 (both inclusive) in descending order using a while loop. (543210)
let finalString1 = "";
let initialValue1 = 5;

while (initialValue1 >= 0) {
    finalString1 += initialValue1;
    initialValue1--;
}
console.log(finalString1)

// 6. Concat all the even numbers from 10 to 0 (both inclusive) in descending order using a while loop. (1086420)
let finalString = "";
let initialValue = 10;

while (initialValue >= 0) {
    if (initialValue % 2 == 0)
    finalString += initialValue;
    initialValue--;
}
console.log (finalString) 

// Comparisoin

/* 7. Take two value using prompt and store them in variables `num1` and `num2`. Check whether they are equal or not.

- `alert` true or false base on the entered value.
- if the input value is anything like `true`, `null` or `undefined` alert saying `Enter a valid value`.


Example:

21, 21; // true
"hello", -21; // false

*/
let num1 = Number(prompt(`Enter a number`))
let num2 = Number(prompt(`Enter another number`))
if (isNaN (num1) || isNaN (num2)) {
    alert(`Enter a valid value`)
} else {
    alert(num1 === num2);
}