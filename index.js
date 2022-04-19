// Import stylesheets
import './style.css';

// Handy JavaScript Tips and Tricks - Part 1
// *********************************************

// Style console.log() with CSS
// --------------------------------------------

//styntax: console.log(`%c string`, 'css style')
//1st parameter: use the string formate and put in the %c, which is for the CSS string to take effect.
//2nd paramenter: css string

const arr = ['ant', 'bug', 'cat', 'dog'];

console.log(
  `%c ${arr[2]}, ${arr[arr.length - 1]}`,
  'color:yellow; font-size:1.2rem; font-weight:bold;'
);

// cat, dog

//Only execute an event handler once
// -----------------------------------------------

// We have a <button > on the page and we only want the user to be able to click the button once.
//For this, we can add an options object as the 3rd parameter and specify once:true

document.querySelector('#btn').addEventListener(
  'click',
  () => {
    console.log('submitted.');
  },
  { once: true }
);

//  submitted. -> when clicked once
// (nothing happens) ->when clicked again

//Use && to simplify if() statement
// --------------------------------------------

let condition = true;

if (condition) {
  console.log('if true, do this....');
}
//if true, do this....

//the above code is equal to:
condition && console.log('if true, do this....');
//if true, do this....

//Shorten an array
//------------------------------------------------

const fruits = ['Apple', 'Orange', 'Pear', 'Lemon', 'Banana'];

fruits.length = 3;
console.log(fruits); //(3)["Apple", "Orange", "Pear"]

fruits.length = 4;
console.log(fruits); //["Apple", "Orange", "Pear", undefined]
// last item is 'undefined' !!

// Remove duplicates from an array
// ------------------------------------------

//Using ES6 method: Set object
// We created a new Set object using the given array, then spread it into a new array.
const numbers = [10, 5, 7, 10, 3, 20, 10, 7];
const noDuplicates = [...new Set(numbers)];

console.log(noDuplicates); //[10, 5, 7, 3, 20]

//Improve large number’s readability
//-------------------------------------------

//to make large numbers more readable, you can use the new numeric separator introduced in ES2021
//The numeric separator is just for developers to read large numbers easier, it won’t make any change to their value
// const largeNum = 3715000000000000;  //not easily readable

const largeNum = 3_715_000_000_000_000;
console.log(largeNum);
// 3715000000000000 ->no change to its value

//Convert number to string
//-------------------------------------------

//You can concatenate the number with an empty string ''.
const myNum = 7654321;
console.log(typeof myNum, myNum); //number 7654321
const numToString = myNum + '';
console.log(typeof numToString, numToString); //string 7654321

//Alternative Way: Using String() method
const newString = String(myNum);
console.log(typeof newString, newString); //string 7654321

//Convert string to number
//-------------------------------------------

//The + sign added in front of the string will do the trick and convert it to a string.
let myString = '123';
console.log(typeof myString, myString); //string 123

let stringToNumber = +myString;
console.log(typeof stringToNumber, stringToNumber); //number 123

//Alternative : using Number() method
let newNumber = Number(myString);
console.log(typeof newNumber, newNumber); //number 123
