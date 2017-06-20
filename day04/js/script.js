/*
// for loop
for(let i = 0; i < 10; i++){
    // console.log(i + 1);
}

// while loop
let j = 0;
while(j < 10){
    // console.log(j + 1);
    j++;
}

// do... while loop
let k = 0;
do {
    // console.log('this will run once at least!', k);
    k++;
}while(k < 10);

var names = ['alan', 'ellie', 'ian', 'lex', 'tim'];
// forEach loop
names.forEach(function(element, index){
    // if(names[l] === 'ian'){
    //     break;
    // }
    // console.log(names[l]);
});

for(let l = 0; l < names.length; l++){
    if(names[l] === 'ian'){
        break;
    }
    // console.log(names[l]);
}

// for... of loop
for(var z of names){
    if(z === 'ian'){
        break;
    }
    console.log(z);
}

var ps = document.querySelectorAll('p');
console.log(ps);


// var - function scope
// let - block scope
// const - block scope
*/
var sample = 'something';

console.log('this is:', sample);

let sample2 = 'something';

console.log(sample2);

const sample3 = 'something';

console.log(sample3);

sample2 = 'something else';

console.log(sample2);

// sample3 = 'something else';

console.log(sample3);

// if statements
var name = 'matt2';

if(name === 'david'){
    // do this
    console.log(name);
}else if(name === 'matt'){
    // do that
    console.log('this', name);
}else{
    // do this other
}

// is equal to ===
// = assignment operator

// create a choose your own adventure story
// prompts
// confirm
// alerts
// if/else if/else
// string method
