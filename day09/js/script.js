var myCar = {
    make: 'jeep',
    model: 'wrangler',
    year: 2014
};

var myOtherCar = {
    doors: 2,
    make: 'jeep',
    model: 'wrangler',
    year: 1997
};

function Car(make, model, year, color){
    this.doors = 2;
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
}

var myJeep = new Car('jeep', 'wrangler', 2014, 'black');
var myOtherJeep = new Car('jeep', 'wrangler', 1997, 'red');

// console.log(myCar);
// console.log(myJeep);
// console.log(myOtherJeep.model);

// create a Person Object Constructor
// choose 5 traits (properties)
// create 2 new instances of your Person Object Constructor


//setTimeOut
function delay(){
    setTimeout(sayHello, 4000);
}

function sayHello(){
    alert("Hello");
}

//setInterval
// var greeting = setInterval(sayHi, 500);
var greet = 0;

function sayHi(){
    greet++;
    // console.log("Hi  "+ greet);
}




var btns = document.querySelectorAll('button');
var timer;
for(let btn of btns){
    btn.addEventListener('mouseover', function(evt){
        // console.log(this);
        // setTimeout(getBtn(), 1000);
        timer = setTimeout(function(){
            getBtn(evt);
        }, 1000);
    });

    btn.addEventListener('mouseout', function(evt){
        clearTimeout(timer);
    });
}

function getBtn(evt){
    console.log(evt.target);
    evt.target.classList.add('megaBtn');
    evt.target.style.color = 'magenta';
    evt.target.style.fontSize = '200%';
}


// target the figure
// target the figcaption and display:none; by default
// on figure mouseenter, after 500ms figcaption display: block;
// visibility: hidden; & visibility: visible;
// opacity: 0; & opacity: 1;
// if mouseleave before 500ms, clear the timeout

// if you get this done, take it to a nav example
// only display: block; the dropdown navigation if the user hovers over a link for more than 250ms
