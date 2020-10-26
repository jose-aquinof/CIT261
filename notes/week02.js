//  Creator of JavaScript : Brendan Eich
// He created JavaScript combining other languages like AWK, Java, Perl, Scheme, HyperTalk and Self. Took him 10 days.
// JavaScript not similar than Java
// JavaScript took less time for the user to actually have an interaction with a web page which caught the attention to many programmers.
// JavaScript can change while it is running, therefore, it can do a lot of things in the background as it is running. C++ language (for example) would do it at compile time.

// Loops: JavaScript

// Loops can execute a block of code a number of times. Very important when you want to run a code many times with different values.

// Different Kinds of Loops:
// -	For
// -	For/in
// -	For/of
// -	While
// -	Do/while


for (i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}

// Output:
// The number is 0
// The number is 1
// The number is 2
// The number is 3
// The number is 4



// Arrays: JavaScript
// Arrays are very handy when you want to store multiple values in a single variable.
// Example: -->

var cars = ["Saab", "Volvo", "BMW"];

// If you want to access to an specific data in a variable, the best solution is an Array!

// How to access through their elements?
// In order to access to the first element you have to type this:
// var name = cars[0];
// this will access to the first element of the array (which is the number 0) being “Saab”.

// You can also add element to an existing array
// For example: 
var cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Opel";

// <!-- Moreover, you can access to it length, for example: -->
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.length; 

// which and output would be:
// 4




// Functions: JavaScript
// A function in JavaScript is a block of code made to perform an specific task. 
// You always need to call a function in order to make it run.
// This is an example of a function: 
function myFunction(p1, p2) {
  return p1 * p2;   // The function returns the product of p1 and p2
}
// In order to call your function you need to type the same name of the function and some extra data showing in the following example:
var x = myFunction(4, 3);

// The function “myFunction” is being called with the values added. Since this function has a multiplication return, it will return the multiplication of those numbers and save it in the x value.

// You always need functions in order to just write one code and use it many times. Moreover it makes an easier layout for your code.




// There are many ways you can learn these great concepts in JavaScript.
// These are great website that you can access and learn in a very simple way:

// •	W3Resource
// •	JS Hero
// •	Javascript30 -->
