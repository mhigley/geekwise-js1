xhr('/env.json', setEnv);

function xhr(url, callback){
    var req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = function(){
        if(req.status === 200 && req.readyState === 4){
            // console.log('success', req.responseText);
            callback( JSON.parse(req.responseText) );
        }else{
            console.log('error', req.responseText);
        }
    };
    req.send(null);
}

var envVars;
function setEnv(obj){
    envVars = envVars();
    envVars.set_url(obj.root_url);
    envVars.set_id(obj.client_id);
    envVars.set_secret(obj.client_secret);

    getUsers('matthew');
    pageSetup();
}

function envVars(){
    let url, id, secret;
    return {
        set_url: function(data){
            url = data;
        },
        set_id: function(data){
            id = data;
        },
        set_secret: function(data){
            secret = data;
        },
        get_url: function(){
            return url;
        },
        get_id: function(){
            return id;
        },
        get_secret: function(){
            return secret;
        }
    }
}

function pageSetup(){
    var userInput = document.querySelector('input[type="text"]');
    var userSubmit = document.querySelector('input[type="submit"]');
    userSubmit.addEventListener('click', function(evt){
        evt.preventDefault();
        if(userInput.value){
            getUsers(userInput.value.trim());
        }
    });
}

function setUsers(obj){
    var figure = document.querySelector('figure');
    var figureName = document.querySelector('h1');
    var userList = document.querySelector('ul');

    figure.firstElementChild.src = obj.items[0].avatar_url;
    figure.lastElementChild.textContent = obj.items[0].html_url;
    figureName.textContent = obj.items[0].login;

    userList.innerHTML = '';

    obj.items.forEach(function(e, i){
        var li = document.createElement('li'),
            img = document.createElement('img'),
            p = document.createElement('p');


        li.dataset.idx = i;
        img.src = e.avatar_url;
        p.textContent = e.login;

        li.addEventListener('click', function(){
            var idx = this.dataset.idx;

            figure.firstElementChild.src = obj.items[idx].avatar_url;
            figure.lastElementChild.textContent = obj.items[idx].html_url;
            figureName.textContent = obj.items[idx].login;
        });

        li.append(img, p);
        userList.append(li);
    });
}

function getUsers(users){
    console.log(users);
    var url = envVars.get_url();
    var search = 'search/users?q='+users;
    var creds = '&per_page=5&client_id='+envVars.get_id()+'&client_secret='+envVars.get_secret();
    xhr(url+search+creds, setUsers);
}
