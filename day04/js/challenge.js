// Gather info from the user. Specifically, the users firstname and lastname. For stylistic purposes, you need the first letter of each to be capitalized and the remaining lowercase. Accomplish this REGARDLESS of user input.

// get user first name.
// !! edge case for extra spaces before and after
// capitalize first letter
// lowercase remaining letters
// concatenate first name to last name.
// alert result

// var firstname = prompt('What is your first name?').trim();
// console.log(firstname);
// var firstLetter = firstname.charAt(0);
// console.log(firstLetter);
// var firstLetterCap = firstLetter.toUpperCase();
// console.log(firstLetterCap);
// var remainingLetters = firstname.substr(1);
// console.log(remainingLetters);
// var remainingLettersDrop = remainingLetters.toLowerCase();
// console.log(remainingLettersDrop);
// alert(firstLetterCap+remainingLettersDrop);

var firstname = prompt('What is your first name?').trim();
var lastname = prompt('What is your last name?').trim();
console.log(
    firstname.charAt(0).toUpperCase() + firstname.substr(1).toLowerCase(),
    lastname.charAt(0).toUpperCase() + lastname.substr(1).toLowerCase()
);
// alert(firstname);
