var intro = document.querySelector('.intro'),
    h1 = document.querySelector('h1'),
    key = document.querySelector('.key');

window.addEventListener('keyup', function(evt){
    evt.preventDefault();

    intro.classList.add('hidden');
    key.parentElement.classList.remove('hidden');

    h1.textContent = evt.keyCode;
    key.textContent = evt.key;

    if(evt.keyCode === 32){
        key.textContent = "Spacebar";
    }
});


























// var form = document.querySelector('form');
//
// form[2].addEventListener('click', getInputs);
//
// function getInputs(e){
//     e.preventDefault();
//     var myArr = [];
//     for(let i = 0; i < form.length - 1; i++){
//         myArr.push(form[i].value);
//     }
//     console.log(myArr);
// }
