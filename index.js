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
