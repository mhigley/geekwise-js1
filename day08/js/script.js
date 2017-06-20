// create nav w/ 2 inputs & 1 submit button
// add styling w/ flexbox
// no id's & no classes!

// 1 target for the entire form
// when go is pressed, run a function
// this function will:
// -get all input values (loop??),
// -push each value into a new array (create empty array in function)
// -console complete array

var form = document.querySelector('form#nav');
form[2].addEventListener('click', getInputs);
// form.children[2]
// form[2]
// form.lastElementChild.addEventListener()

function getInputs(evt){
    evt.preventDefault();

    /*
    var inputArr = [];
    for(let i = 0; i < form.elements.length - 1; i++){
        // console.log(form.elements[i].value);
        inputArr.push(form.elements[i].value);
    }
    console.log(inputArr);
    */
    // document.write(sticky);
    // document.body.appendChild(sticky);
    document.body.innerHTML += sticky;
    stickySetup();
    // appendChild()
}

var sForm = document.createElement('form'),
    sBtn = document.createElement('button'),
    sInput = document.createElement('input');
sForm.id = 'sticky';
sBtn.id = 'add';
sBtn.textContent = '+';
sInput.type = 'text';
sInput.placeholder = 'todo';
// sForm.appendChild(sBtn);
// sForm.appendChild(sInput);
sForm.append(sBtn, sInput);
document.body.appendChild(sForm);

sBtn.addEventListener('click', addTodo);

function addTodo(evt){
    evt.preventDefault();
    var newTodo = document.createElement('input');
    newTodo.type = 'text';
    newTodo.placeholder = 'todo';
    sForm.appendChild(newTodo);
}

/*
var sticky =
`
<form id="sticky">
    <button id="add">+</button>
    <input type="text" placeholder="todo">
</form>
`;

function stickySetup(){
    var todo = document.createElement('input');
    var stickySubmit = document.querySelector('#sticky');
    stickySubmit[0].addEventListener('click', function(evt){
        evt.preventDefault();
        stickySubmit.appendChild(todo);
    });
}
*/
