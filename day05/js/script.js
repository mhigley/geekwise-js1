// if

// == equal to
// === strict equal to
// < less than
// <= less than equal to
// > greater than
// >= greater than equal to
// ! not
// != not equal to
// !== not strict equal
// && and
// || or

/*
var age = parseInt( prompt('what is your age?') );
var gender = prompt('are you a male or female');
// console.log(!!age);
// var age;
if(age > 21 && gender == 'female'){
    console.log('welcome');
}else if(age < 21){
    console.log('too young');
}else{
    // console.log('exactly');
}

if(!age){
    console.log('enter your age');
}
*/

// switch statement
/*
var today = new Date().getDay();

switch(today){
    case 0:
        console.log('its still the weekend');
        break;
    case 1:
        console.log('bad case of the mondays');
        break;
    default:
        console.log('well at least its not monday');
}
*/

// ternary operator
/*
var age = prompt('what is your age?');
age >= 21 ? console.log('welcome') : console.log('nope');
*/
// if(age >= 21){console.log('welcome');}else{console.log('nope');}

// var myname;

/*
console.log(myname);
var myname = 'matt';
console.log(myname);


let mymiddlename;
mymiddlename = 'david'
console.log(mymiddlename);


const mylastname = 'higley';
console.log(mylastname);

var dog = 2;

if(dog > 1){
    let dogyears = 7;
    console.log(dogyears * dog);
}
*/
/*
// JavaScript Functions

// Function Declaration
function myName(name, age){ // <-- parameters go here
    // alert(name + 'is'  age + 'years old');
    alert(`${name} is ${age} years old`);
    // template literals
    // interpolation `${}`
}
myName('chuck', 29); // <-- arguments go here


// Function Expression
var myCar = function(car, year){ // <-- parameters go here
    alert(`My ${car} is a ${year}`);
}('honda', 1989); // <-- arguments go here
// myCar();

// add vehicle year
// add approprate parameter
// create a template string and alert

// ''
// ""
// ``
*/

// with 2 prompts, get the users first name & last name
// write a function that alerts a message welcoming them

// var userFirst = prompt('what is your first name');
// var userLast = prompt('what is your last name');

// arguments object
function welcome(){
    var msg = 'Welcome';
    for(var arg of arguments){
        msg += ' ' + arg;
    }
    alert( msg );
}
// welcome('matthew', 'david', 'higley');

// when button is clicked
// run function and alert name
var greet = function(name){
    alert(name);
};

// user clicks the button
// user is prompted to enter their first name
// save users name and account for extra spaces
// ensure first character is capped
// remaining are drop capped
// pass into another function
// alert welcome message to user

// minimum 2 functions!!
