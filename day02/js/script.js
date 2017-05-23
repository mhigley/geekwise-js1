// var userAge = parseInt( prompt('Enter your age') );
// console.log(userAge + 10);

// String Object
var myString = "this is a string"; // string literal
var myStringObj = new String("this is also a string");

// Number Object
var num = 7;
var numObj = new Number(7.6);
// console.log(typeof num);
// console.log(numObj);

// typeof

// Float Object
var float = 5.9876543;
// console.log(typeof float);

// Boolean Object
var bool = true;
// console.log(bool);

// Array Object
var arr = ['red', 'orange', 'green'];
var numArr = [0, 1, 2, 3];
// console.log(arr[0] + arr[2]);
// console.log(numArr[1] + numArr[2]);  // add index 1 to index 2

// Object Object
var myCar = {
    make: "Jeep",
    model: "Wrangler",
    year: 2014
};

// Math Object
// round to specific decimal
var num1 = 5.0000008765431;
// console.log( Math.round(num1) );
// console.log( Math.floor(num1) );
// console.log( Math.ceil(num1) );

var rand = Math.random();
rand = rand*10;
rand = Math.floor(rand);
// console.log(rand);
// why down? or up?
// console.log(Math.round( (Math.random() * 10) ));

// Date Object
var theDate = new Date();
// console.log(theDate.getMonth());
// getDay() === day of the week - 0
// getDate() === day of the month
// getMonth() === month - 0
// getFullYear() === year

// if( theDate.getDay() === 0 ){
//     console.log('sunday');
// }else if( theDate.getDay() === 1 ){
//     console.log('monday');
// }else if( theDate.getDay() === 2 ){
//     console.log('tuesday');
// }else if( theDate.getDay() === 3 ){
//     console.log('wednesday');
// }

var myBday = new Date(1999, 9, 02);
var myDate = theDate.toLocaleString('en-us', {day: '2-digit'});
// console.log(myBday);
/*
    options:
    weekday, year, month, day, hour, etc...
    narrow, short, long, numeric, 2-digit
*/

var myBdate = myBday.toLocaleString('en-us', {day: 'numeric'});
var myBmon = myBday.toLocaleString('en-us', {month: 'long'});
var myByear = myBday.toLocaleString('en-us', {year: 'numeric'});

// console.log(myBmon + ' ' + myBdate + ', ' + myByear);// October 2, 1999


// prompt user for 3 individual items
// ask the user for their number birth month
// ask the user for their number birth day
// ask the user for their full birth year
// save each response as a variable
// parse each response into a number
// for 0 based items, subtract 1
// create a new Date instance representing users birthday
// var myBday = new Date(1999, 9, 02);

// var someVariableName = new Date(var, var, var);

// take users birthday object and parse to console in the following format:
// Oct 02, 99

/*
    options:
    weekday, year, month, day, hour, etc...
    narrow, short, long, numeric, 2-digit
*/

var userMon = parseInt(prompt('month')) - 1;
var userDay = parseInt(prompt('day'));
var userYear = parseInt(prompt('year'));

var userBday = new Date(userYear, userMon, userDay);

var m = userBday.toLocaleString('us-en', {month: 'short'});
var d = userBday.toLocaleString('us-en', {day: '2-digit'});
var y = userBday.toLocaleString('us-en', {year: '2-digit'});

console.log( m + ' ' + d + ', ' + y );

// javascript1.matthewhigley.com
// MDN - Mozilla Developer Network
// w3schools
// Date Object, Math Object, Strings, Numbers, Array, etc...
