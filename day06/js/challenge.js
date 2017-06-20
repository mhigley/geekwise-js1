var name = '';

function getName(){
    var user = prompt('please enter a name');
    getMore(properCap(user));
}
getName();

function properCap(n){
    return n.charAt(0).toUpperCase() + n.substr(1).toLowerCase();
}

function getMore(n){
    name += `${n} `;
    confirm('more?') ? getName() : alertName(name);
}

function alertName(n){
    alert(n);
}
