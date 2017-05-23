/*
var myName = "Matthew David Higley";

console.log(myName);

// .length
console.log(myName.length);

// .charAt()
console.log(myName.charAt(11));
console.log(myName.charAt(250));

// .indexOf()
console.log(myName.indexOf('t'));
console.log(myName.indexOf('H'));

// .lastIndexOf()
console.log(myName.lastIndexOf('a', 7));
// multiple instances

// .concat()
console.log(myName.concat(' peanuts'));

// .substring() - upto but not including
console.log(myName.substring(0, 3));
console.log(myName.substring(5, 2));
console.log(myName.substring(2, 5));
console.log(myName.substring(8));

// .substr() - total characters
console.log(myName.substr(0, 3));
console.log(myName.substr(5, 2));
console.log(myName.substr(2, 5));
console.log(myName.substr(8));

// .toUpperCase()
console.log(myName.toUpperCase());

// .toLowerCase()
console.log(myName.toLowerCase());

var newUser = '         yoda         master       ';
// .trim()
// regular expressions
console.log(newUser.trim());

// \b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b
*/

// single line comment
/*  block comment  */

// Arrays - identified by []
var sodas = ['pepsi', 'coke', 'mountain dew'];
//console.log(sodas);
//console.log( Array.isArray(sodas) );

var colors = ['red','orange','purple'];
 var arrLength = colors.push('green');
//console.log("the new array is ", colors);
//console.log("the array length is  ", arrLength);

var arrlength = colors.unshift('pink');
//console.log("New array ", colors);
//console.log("Array lentgth is ", arrlength);


var item = colors.pop();
//console.log("Item is ", item);

//console.log("the new array  ",colors);
//console.log("the lengt of array",colors.length);

item = colors.shift();
//console.log("Item is  ",item);

//console.log("New array is  ", colors);
//console.log("array length is ..",colors.length);


// .indexOf()
console.log(colors.indexOf('red'));

// .lastIndexOf()
console.log(colors.lastIndexOf('orange'));

// .splice() - remove or add items
var removeItem = colors.splice(1, 2);
console.log(colors);
console.log(removeItem);

var addItems = colors.splice(2, 0, 'green', 'blue');
console.log(colors);
console.log(addItems);

var newColors = ['red', 'orange', 'yellow', 'blue', 'purple', 'green'];
// console.log(newColors);
// remove the color green, and in its place, add indigo
var remGreen = newColors.indexOf('green');
// console.log(remGreen);
newColors.splice(remGreen, 1, 'indigo');
// console.log(newColors);

// .slice() - upto but not including
var moreColors = newColors.slice();
// console.log(moreColors);

// .reverse()
var revColors = newColors.reverse();
//console.log(newColors);
//console.log(revColors);

newColors.sort();

var names = ['Matt', 'matt', 'david', 'higley', 'Higley', 'David'];
names.sort();

console.log(names);

// bubble sort
//
var points = [4, 2, 5, 1, 3];
points.sort(function(a, b){
    return a - b;
});
console.log(points);

// for loop
// ['blue', 'indigo', 'orange', 'purple', 'red', 'yellow']
/*
for(var i = 0; i < newColors.length; i++){
    console.log('my fav color is ', newColors[i]);
}
*/

var modColors = newColors.map(function(e, i){
    // console.log(e);
    // console.log(i);
    console.log('my fav color', e);
});
console.log(modColors);

var modPoints = points.map(function(e){
    return e * 2;
});
console.log(points);
console.log(modPoints);
