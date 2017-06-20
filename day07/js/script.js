// var btn = document.querySelector('button');
// var nav = document.querySelector('ul');

// Click
// btn.addEventListener('click', function(evt){
//     // console.log(this);
//     // console.log(evt.target.innerText);
// });

// mouseenter
// btn.addEventListener('mouseenter', function(evt){
//     // console.log(evt);
//     evt.target.style.color = 'red';
//     // ^-- use dot notation to target the element itself and modify a style property
// });

// mouseleave
// btn.addEventListener('mouseleave', function(evt){
//     // console.log(evt);
//     evt.target.style.color = 'black';
// });

// window.addEventListener('scroll', function(evt){
//     // console.clear();
//     // console.log(evt);
//     // console.log(evt.pageY);
//     // if(evt.pageY < 200){
//     //     nav.classList.add('vis');
//     // }else{
//     //     nav.classList.remove('vis');
//     // }
// });

// keydown, keyup, keypress

// textContent & innerHTML
// var user = prompt('type a message');
// console.log(user);
//
// var setDiv = document.querySelector("div#set");
// setDiv.textContent = '<p>Here is a <strong>line</strong></p>';
//
// var getDiv = document.querySelector("div#get");
// console.log(getDiv.innerHTML);

var submitBtn = document.querySelector('input[type="submit"]');
var form = document.querySelector('form');
// var inputText = document.querySelector('input[type="text"]');
// var inputPass = document.querySelector('input[type="password"]');

submitBtn.addEventListener('click', function(evt){
    evt.preventDefault();
    console.log(form);
    var formVals = [];

    for(var i = 0; i < form.length - 1; i++){
        // console.log(form[i].value);
        formVals.push(form[i].value);
    }

    console.log(formVals);
    // var text = inputText.value;
    // var pass = inputPass.value;
    // alert(text + ' ' + pass);
});

// in the HTML, add a second input box with the type "password"
// capture BOTH values
// alert values


// "listen" for keypresses
// grab the keycode
// textContent or innerHTML to "set" the code to the window
// http://keycode.info
