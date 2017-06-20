xhr('/env.json', setEnv);

function xhr(url, callback){
    var req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = function(){
        if(req.status === 200 && req.readyState === 4){
            console.log('success!', req.responseText);
            callback( JSON.parse(req.responseText) );
        }else{
            console.log('error!!', req.responseText);
        }
    };
    req.send(null);
}

var envVars;

// JavaScript Closure
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

function setEnv(obj){
    envVars = envVars();
    envVars.set_url(obj.root_url);
    envVars.set_id(obj.client_id);
    envVars.set_secret(obj.client_secret);

    pageSetup();
    getUsers('david');
}

function pageSetup(){
    var userInput = document.querySelector('input[type="text"]'),
        userSubmit = document.querySelector('input[type="submit"]');

    userSubmit.addEventListener('click', function(evt){
        evt.preventDefault();
        if(userInput.value){
            getUsers(userInput.value.trim());
        }
    });
}

function getUsers(users){
    console.log(users);
    var url = envVars.get_url();
    var search = 'search/users?q='+users;
    // var search = `search/users?q=${users}`;
    var creds = '&per_page=5&client_id='+envVars.get_id()+'&client_secret='+envVars.get_secret();
    xhr(url+search+creds, setUsers);
}

function setUsers(users){
    var figureImg = document.querySelector('figure img'),
        figCaption = document.querySelector('figure figcaption'),
        figureH1 = document.querySelector('h1'),
        userList = document.querySelector('ul');

    figureImg.src = users.items[0].avatar_url;
    figCaption.textContent = users.items[0].html_url;
    figureH1.textContent = users.items[0].login;

    userList.innerHTML = '';

    users.items.forEach(function(element, index){
        var li = document.createElement('li'),
            img = document.createElement('img'),
            p = document.createElement('p');

        li.dataset.idx = index;
        img.src = element.avatar_url;
        p.textContent = element.login;

        li.addEventListener('click', function(){
            var idx = this.dataset.idx;

            figureImg.src = users.items[idx].avatar_url;
            figCaption.textContent = users.items[idx].html_url;
            figureH1.textContent = users.items[idx].login;
        });

        li.append(img, p);
        userList.append(li);
    });
}
