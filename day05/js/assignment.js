// user clicks the button
// user is prompted to enter their first name
// save users name and account for extra spaces
function getUsername(){
    var userFirst = prompt('Enter your first name.').trim();
    welcome(properCap(userFirst));
}

function properCap(uf){
    uf = uf.charAt(0).toUpperCase() + uf.substr(1).toLowerCase();
    // welcome(uf);
    return uf; // <!-- always the last command!
}

function welcome(uf){
    alert(`Welcome ${uf}.`);
}

// ensure first character is capped
// remaining are drop capped
// pass into another function
// alert welcome message to user

// minimum 2 functions!!
