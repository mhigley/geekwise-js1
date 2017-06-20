var firstBtn = document.getElementById('firstBtn');
var secondBtn = document.getElementsByTagName('button')[1];
var thirdBtn = document.querySelector('li:last-child button');
console.log(thirdBtn);

function properCap(str){
    return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
}
var fullName = '';

firstBtn.addEventListener('click', getName);

secondBtn.addEventListener('click', getName);

thirdBtn.addEventListener('click', function(e){
    getName(e);
    alert(fullName);
});

function getName(theother){
    fullName += properCap(prompt('get ' + theother.originalTarget.innerText)) + ' ';
}
