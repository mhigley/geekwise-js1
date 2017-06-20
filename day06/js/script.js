// Hoisting - variable names and function declarations
/*
console.log(myname);
var myname = 'matt';

firstname();
function firstname(){
    alert('my firstname');
    // firstname(); // <!-- recursiveness
}

console.log(lastname);
var lastname = function(){
    alert('my lastname');
};
*/

// write a function that returns a random number from 0 - 10
// write a function that alerts random number
/*
function alertRand(){
    alert(getRandNum());
}

function getRandNum(){
    return Math.floor(Math.random() * 11);
}

// function asking user for a name
// function properCap
// function asking if more names?  -if statement-
// after all names complete, alert full name

var fullName = '';

function getName(){
    var user = prompt('enter a name');
    alertName( getMore( properCap(user) ) );
}
getName();

function properCap(str1){
    return str1.charAt(0).toUpperCase() + str1.substr(1).toLowerCase();
}

function getMore(str2){
    fullName += `${str2} `;
    // confirm('more names?') ? getName() : return fullName;
    if(confirm('more names?')){
        getName();
    }else{
        return fullName;
    }
}

function alertName(str3){
    // this does not work!!!!!!! Kinda.
    console.log(str3);

    console.log(str3);
    if(str3.length != 0){
        alert(str3);
    }

    if(str3 !== 'undefined'){
        alert(str3);
    }
}
*/


// Targeting DOM Elements
// getElementById()
var myH1 = document.getElementById('hdr1');
// getElementsByTagName()
var myP = document.getElementsByTagName('p')[0];
// getElementsByClassName()
var myAs = document.getElementsByClassName('a');
// querySelector()
var h1 = document.querySelector('');
// querySelectorAll()
var inp = document.querySelectorAll('');

console.log(inp);

console.log(myH1);
console.log(myP);

myH1.addEventListener('click', function(){
    console.log(this);
    // this.style.color = 'red';
    // this.style.paddingTop = '50px';
    // this.style.fontSize = '100px';
    // myP.style.color = 'magenta';
    myP.classList.toggle('red');
});
