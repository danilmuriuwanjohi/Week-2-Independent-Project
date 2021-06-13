var age = prompt( "enter your age");
var gender = prompt ("enter your gender");
var CC = prompt ("enter your cc");
var YY = prompt ("enter yy");
var MM = prompt ("Enter MM");
var DD = prompt ("Enter your dd")
var mod = prompt ("Enter your mod. Please enter in decimal.");
var age = function () {
    (((CC/4) - 2*CC - 1) + (5* YY/4) + (26* (MM + 1))/10 +DD)*mod;
};
console.log ("The number of the day of the week in which you were born is" + age);