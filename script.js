let body = document.querySelector("#body");
let pink = document.querySelector("#pink");
let orange = document.querySelector("#orange");
let blue = document.querySelector("#blue");
let green = document.querySelector("#green");
let yellow = document.querySelector("#yellow");
let reset = document.querySelector("#reset");

pink.addEventListener('click',function(){
    body.style.background="#ffc0cb";
});

orange.addEventListener('click',function(){
    body.style.background="#ffa500";
});

blue.addEventListener('click',function(){
    body.style.background="#7fffd4";
});


green.addEventListener('click',function(){
    body.style.background="#7cfc00";
});


yellow.addEventListener('click',function(){
    body.style.background="#ffff00";
});


reset.addEventListener('click',function(){
    body.style.background="#f0fff0";
});
