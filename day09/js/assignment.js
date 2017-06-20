var figure = document.querySelector('figure'),
    figcaption = document.querySelector('figcaption');

figcaption.style.transition = 'all 500ms';
figcaption.style.opacity = 0;

var timer;

figure.addEventListener('mouseenter', function(evt){
    timer = setTimeout(function(){
        figcaption.style.opacity = 1;
    }, 1000);

});

figure.addEventListener('mouseleave', function(){
    clearTimeout(timer);
    figcaption.style.opacity = 0;
});
